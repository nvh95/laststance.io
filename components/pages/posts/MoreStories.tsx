import React from 'react'

import type { Posts } from '../../../types'

import PostPreview from './PostPreview'

interface Props {
  posts: Posts
}

export const MoreStories: React.FC<Props> = ({ posts }) => {
  return (
    <section>
      <h2 className="mb-8 text-2xl md:text-4xl tracking-tighter leading-tight text-center">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {posts.map((post, i, arr) => (
          <PostPreview
            key={i}
            title={post.title}
            date={post.date}
            author={post.author}
            slug={post.slug}
            className={i === arr.length - 1 ? '' : 'mb-12 md:mb-16'}
          />
        ))}
      </div>
    </section>
  )
}
