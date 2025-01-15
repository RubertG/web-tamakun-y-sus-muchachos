import { type Event } from '@/modules/core/interfaces/db/db'

interface Props {
  event: Event
  className?: string
}

const EventCard = ({ event: { date, description, title }, className }: Props) => {
  const eventDate = new Date(date)
  const day = eventDate.getDate()
  const monthAndYear = eventDate.toLocaleDateString('es-CO', { month: 'long' }) + ', ' + eventDate.getFullYear()

  return (
    <article className={`flex h-fit w-fit items-center gap-3 md:gap-6 ${className}`}>
      <div className="w-[95px] text-center">
        <p className="text-gradient-primary -mt-[16px] h-[70px] text-[60px] font-bold md:-mt-[25px] md:h-[90px] md:text-[80px]">
          {day}
        </p>
        <p className="text-xs capitalize text-text-secondary md:mt-0.5 md:text-sm">{monthAndYear}</p>
      </div>
      <div className="overflow-hidden">
        <h3 className="overflow-hidden text-ellipsis text-nowrap text-xl font-bold text-text-primary md:text-[22px]">
          {title}
        </h3>
        <p className="mt-0.5 text-sm leading-[1.1rem] text-text-secondary md:text-base">{description}</p>
      </div>
    </article>
  )
}

export { EventCard }
