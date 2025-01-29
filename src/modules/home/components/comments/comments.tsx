import { Comment } from '@/modules/core/components/comments/comment'
import { Marquee } from '@/modules/core/ui/marquee'

import { getComments } from '../../../core/services/comments'

interface Props {
  className?: string
}

const Comments = async ({ className }: Props) => {
  const { data } = await getComments()

  return (
    <>
      <Marquee className={`[--duration:90s] ${className}`} pauseOnHover>
        {data?.map((comment) => <Comment key={comment.id} comment={comment} />)}
      </Marquee>
    </>
  )
}

export { Comments }
