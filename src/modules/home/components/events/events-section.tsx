import { Button } from '@/modules/core/ui/button'
import { EventCardSkeleton } from '@/modules/events/components/event-card-skeleton'
import Link from 'next/link'
import { Suspense } from 'react'

import { Events } from './events'

interface Props {
  className?: string
}

const EventsSection = ({ className }: Props) => {
  return (
    <section className={className}>
      <h2 className="text-center text-4xl font-bold md:text-6xl">Próximas fechas</h2>

      <div className="mx-auto max-w-md space-y-9">
        <Suspense
          fallback={
            <ul className="mt-12 space-y-6">
              {[1, 2, 3, 4].map((key) => (
                <EventCardSkeleton key={key} />
              ))}
            </ul>
          }
        >
          <Events className="mt-12" />
        </Suspense>

        <Link href="/contacto" className="block">
          <Button className="w-full" variant="secondary" size="small">
            ¡Contáctanos!
          </Button>
        </Link>
      </div>
    </section>
  )
}

export { EventsSection }
