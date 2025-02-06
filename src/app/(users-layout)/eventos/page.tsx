import { PageContainer } from '@/modules/core/components/layouts/page-container'
import { EventsSection } from '@/modules/events/components/events-section'

export default function EventPage() {
  return (
    <PageContainer>
      <h1 className="animation-entry text-center text-4xl font-bold md:text-6xl">
        Próximas fechas
      </h1>

      <EventsSection
        className="animation-entry"
        style={{
          animationDelay: '0.15s'
        }}
      />
    </PageContainer>
  )
}
