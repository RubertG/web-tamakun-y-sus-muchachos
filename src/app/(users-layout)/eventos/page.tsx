import { SocialIcons } from '@/modules/contact/components/social-icons'
import { Button } from '@/modules/core/ui/button'
import { EventCardSkeleton } from '@/modules/events/components/event-card-skeleton'
import { Events } from '@/modules/home/components/events/events'
import Link from 'next/link'
import { Suspense } from 'react'

export default function EventPage() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-3 py-24">
      <h1 className="px-3 text-center text-4xl font-bold md:text-6xl">Próximas fechas</h1>

      <section className="mx-auto max-w-md">
        <Suspense
          fallback={
            <ul className="mt-12 space-y-6">
              {[1, 2, 3, 4].map((key) => (
                <EventCardSkeleton key={key} />
              ))}
            </ul>
          }
        >
          <Events className="mt-9" />
        </Suspense>

        <Link href="/contacto" className="mt-9 block">
          <Button className="w-full" variant="secondary">
            ¡Contáctanos!
          </Button>
        </Link>

        <SocialIcons className="mt-8" />
      </section>
    </div>
  )
}
