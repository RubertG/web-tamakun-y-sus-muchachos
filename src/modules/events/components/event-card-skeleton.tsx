import { Skeleton } from '@/modules/core/ui/skeleton'

interface Props {
  className?: string
}

const EventCardSkeleton = ({ className }: Props) => {
  return (
    <article
      className={`grid h-fit w-full grid-cols-[95px_auto] items-center gap-3 md:gap-6 ${className}`}
    >
      <div className="text-center">
        <Skeleton className="h-[51px] w-full md:h-[71px]" />

        <Skeleton className="mt-1 h-3 w-full" />
      </div>
      <div>
        <Skeleton className="h-6 w-full" />

        <Skeleton className="mt-2 h-3 w-full" />
      </div>
    </article>
  )
}

export { EventCardSkeleton }
