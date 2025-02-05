import Link from 'next/link'
import React, { memo } from 'react'

import type { Post } from '../../../types'
import Date from '../../elements/Date'

interface Props {
  title: Post['title']
  coverImageUrl?: Post['coverImageUrl']
  date: Post['date']
  author?: Post['author']
  slug: Post['slug']
}

const PostListItem: React.FC<Props> = memo(
  ({ title, date, slug }) => {
    return (
      <li className="sfpace-y-6 flex w-full flex-col">
        <h3 className="mb-4 text-3xl leading-tight">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        <div className="text-lg">
          <Date dateString={date} />
        </div>
      </li>
    )
  },
  () => true
)

export default PostListItem
