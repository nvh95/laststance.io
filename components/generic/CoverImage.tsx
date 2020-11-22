import React from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { imageBuilder } from '../../lib/sanity'
import { Post } from '../../DataStructure'

interface Props {
  title: Post['title']
  url: Post['coverImage']
  slug: Post['slug']
}

const CoverImage: React.FC<Props> = ({ title, url, slug }) => {
  const image = (
    <img
      width={2000}
      height={1000}
      alt={title}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
      src={imageBuilder.image(url).height(1000).width(2000).url()}
    />
  )

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
