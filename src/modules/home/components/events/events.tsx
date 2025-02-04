import { getEvents } from '@/modules/core/services/events'
import { EventCard } from '@/modules/events/components/event-card'

interface Props {
  className?: string
  limit?: number
}

const Events = async ({ className, limit = 4 }: Props) => {
  const { data } = await getEvents(limit)

  return (
    <ul className={`${className} space-y-6`}>
      {data?.map((event) => <EventCard key={event.id} event={event} />)}
    </ul>
  )
}

export { Events }
