import { Loader } from '@/modules/core/ui/loader'
import { Comments } from '@/modules/home/components/comments/comments'
import { CommentsContainer } from '@/modules/home/components/comments/comments-container'
import { CommentsHeader } from '@/modules/home/components/comments/comments-header'
import { Header } from '@/modules/home/components/header/header'
import { Suspense } from 'react'

export default function Home() {
  return (
    <>
      <Header className="mb-28 mt-40 md:mb-0 md:mt-14" />

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
    </>
  )
}
