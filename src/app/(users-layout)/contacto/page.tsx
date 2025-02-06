import { CommentsSection } from '@/modules/contact/components/comments/comments-section'
import { ContactHeader } from '@/modules/contact/components/header/contact-header'
import { PageContainer } from '@/modules/core/components/layouts/page-container'

export default function ContactPage() {
  return (
    <PageContainer>
      <ContactHeader className="mx-auto max-w-3xl" />

      <CommentsSection className="animation-entry mt-14" style={{ animationDelay: '0.45s' }} />
    </PageContainer>
  )
}
