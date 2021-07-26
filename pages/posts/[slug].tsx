import { useRouter } from 'next/router'
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next'
import ErrorPage from 'next/error'
import { PostBody } from '../../components/pages/posts/[id]/PostBody'
import PostHeader from '../../components/pages/posts/[id]/PostHeader'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import PostTitle from '../../components/pages/posts/PostTitle'
import Head from 'next/head'
import { Post } from '../../types'

interface Props {
  post: Post
  preview?: GetStaticPropsContext['preview']
}

const PostPage: React.FC<Props> = ({ post }) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage bage statusCode={404} />
  }
  return (
    <div className="pl-4 pr-4">
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article>
            <Head>
              <title>
                {post.title} | Laststance.io is indipendent organization for OSS
                activity.
              </title>
              {/* <meta property="og:image" content={post.ogImage.url} /> */}
            </Head>
            <PostHeader
              title={post.title}
              coverImageUrl={post.coverImageUrl}
              date={post.date}
              author={post.author}
              slug={post.slug}
            />
            <PostBody content={post.content} />
          </article>
        </>
      )}
    </div>
  )
}

export default PostPage

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  // @ts-ignore @TODO I don't know how resove this at the time
  const data = await getPostAndMorePosts(params.slug, preview)
  return {
    props: {
      preview,
      post: data?.post || null,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  }
}
