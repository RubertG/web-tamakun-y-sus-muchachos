import { Comment } from '@/modules/core/components/comments/comment'
import { Marquee } from '@/modules/core/ui/marquee'

import { getComments } from '../../../core/services/comments'

interface Props {
  className?: string
  areActives?: boolean
}

const Comments = async ({ className, areActives = true }: Props) => {
  const { data } = await getComments({ areActives })

  return (
    <>
      <Marquee className={`[--duration:20s] ${className}`} pauseOnHover>
        {data?.map((comment) => <Comment key={comment.id} comment={comment} />)}
      </Marquee>
    </>
  )
}

export { Comments }
