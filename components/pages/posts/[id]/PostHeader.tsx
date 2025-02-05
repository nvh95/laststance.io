import { memo } from 'react'

import type { Post } from '../../../../types'
import { Avatar } from '../../../elements/Avatar'
import Date from '../../../elements/Date'
import PostTitle from '../PostTitle'

interface Props {
  title: Post['title']
  coverImageUrl: Post['coverImageUrl']
  author: Post['author']
  date: Post['date']
  slug: Post['slug']
}

const PostHeader: React.FC<Props> = memo(
  ({ title, date, author }) => (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="flex space-x-4">
        <Avatar name={author.name} picture={author.picture} />
        <Date dateString={date} />
      </div>
    </>
  ),
  () => true
)

export default PostHeader
