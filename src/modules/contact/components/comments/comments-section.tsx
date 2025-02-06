import { Loader } from '@/modules/core/ui/loader'
import { CommentsHeader } from '@/modules/home/components/comments/comments-header'
import { Suspense } from 'react'

import { Comments } from './comments'

type Props = React.HTMLAttributes<HTMLDivElement>

const CommentsSection = ({ className, ...props }: Props) => {
  return (
    <section className={`mx-auto max-w-7xl space-y-6 ${className}`} {...props}>
      <CommentsHeader />

      <Suspense
        fallback={
          <div className="grid h-52 place-content-center">
            <Loader />
          </div>
        }
      >
        <Comments />
      </Suspense>
    </section>
  )
}

export { CommentsSection }
