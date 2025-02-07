import { ComingSoon } from '@/modules/core/components/coming-soon/coming-soon'
import { PageContainer } from '@/modules/core/components/layouts/page-container'

export default function GaleryPage() {
  return (
    <PageContainer className="flex items-center justify-center !pt-0 md:!pt-24">
      <ComingSoon />
    </PageContainer>
  )
}
