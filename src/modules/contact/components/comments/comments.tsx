import { Comment } from '@/modules/core/components/comments/comment'
import { getComments } from '@/modules/core/services/comments'

interface Props {
  className?: string
}

const Comments = async ({ className }: Props) => {
  const { data } = await getComments({ areActives: true })

  return (
    <ul
      className={`grid grid-cols-1 justify-center gap-x-4 gap-y-3 md:grid-cols-2 lg:grid-cols-3 ${className}`}
    >
      {data?.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          className="mx-auto !bg-bg-dark/20 !backdrop-blur-md hover:!bg-bg-dark"
        />
      ))}
    </ul>
  )
}

export { Comments }
