import { Loader } from '@/modules/core/ui/loader'
import { Suspense } from 'react'

import { Comments } from './comments'
import { CommentsContainer } from './comments-container'
import { CommentsHeader } from './comments-header'

const CommentsSection = () => {
  return (
    <CommentsContainer>
      <CommentsHeader />

      <Suspense
        fallback={
          <div className="grid h-52 place-content-center">
            <Loader />
          </div>
        }
      >
        <Comments className="mt-5" />
      </Suspense>
    </CommentsContainer>
  )
}

export { CommentsSection }
