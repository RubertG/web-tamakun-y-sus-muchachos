import { getEvents } from '@/modules/core/services/events'
import { EventCard } from '@/modules/events/components/event-card'

interface Props {
  className?: string
}

const Events = async ({ className }: Props) => {
  const { data } = await getEvents(4)

  return (
    <ul className={`${className} space-y-6`}>
      {data?.map((event) => <EventCard key={event.id} event={event} />)}
    </ul>
  )
}

export { Events }
