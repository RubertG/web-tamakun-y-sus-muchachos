import { Comments } from '@/modules/contact/components/comments/comments'
import { ContactHeader } from '@/modules/contact/components/header/contact-header'
import { Loader } from '@/modules/core/ui/loader'
import { CommentsHeader } from '@/modules/home/components/comments/comments-header'
import { Suspense } from 'react'

export default function ContactPage() {
  return (
    <div className="min-h-[calc(100vh-44px)] px-3 pb-16 pt-24 md:flex md:flex-col md:items-center md:justify-center">
      <ContactHeader className="mx-auto max-w-3xl" />

      <section
        className="animation-entry mx-auto mt-14 max-w-7xl space-y-6"
        style={{ animationDelay: '0.45s' }}
      >
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
    </div>
  )
}
