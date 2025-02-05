import { SocialIcons } from '@/modules/contact/components/social-icons'
import { Button } from '@/modules/core/ui/button'
import { EventCardSkeleton } from '@/modules/events/components/event-card-skeleton'
import { Events } from '@/modules/home/components/events/events'
import Link from 'next/link'
import { Suspense } from 'react'

export default function EventPage() {
  return (
    <div className="min-h-[calc(100vh-44px)] px-3 pb-16 pt-24 md:flex md:flex-col md:items-center md:justify-center">
      <h1 className="animation-entry text-center text-4xl font-bold md:text-6xl">
        Próximas fechas
      </h1>

      <section
        className="animation-entry mx-auto max-w-md"
        style={{
          animationDelay: '0.15s'
        }}
      >
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
          <Button className="w-full" variant="secondary" size="small">
            ¡Contáctanos!
          </Button>
        </Link>

        <SocialIcons className="mt-8" />
      </section>
    </div>
  )
}
