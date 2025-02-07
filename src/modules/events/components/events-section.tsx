import { SocialIcons } from '@/modules/contact/components/social/social-icons'
import { Button } from '@/modules/core/ui/button'
import { Events } from '@/modules/home/components/events/events'
import Link from 'next/link'
import { Suspense } from 'react'

import { EventCardSkeleton } from './event-card-skeleton'

type Props = React.HTMLAttributes<HTMLDivElement>

export const EventsSection = ({ className, ...props }: Props) => {
  return (
    <section className={`mx-auto w-full max-w-md ${className}`} {...props}>
      <Suspense
        fallback={
          <ul className="mt-9 space-y-6">
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
  )
}
