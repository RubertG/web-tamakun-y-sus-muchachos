import { CommentsSection } from '@/modules/home/components/comments/comments-section'
import { EventsSection } from '@/modules/home/components/events/events-section'
import { Header } from '@/modules/home/components/header/header'

export default function Home() {
  return (
    <>
      <Header className="mb-28 mt-40 md:mb-0 md:mt-14" />

      <CommentsSection />

      <EventsSection className="mb-28 mt-20 px-3 md:mb-36" />
    </>
  )
}
