import { env } from '@/modules/core/lib/env'
import { Mail } from 'lucide-react'
import Link from 'next/link'

import { SocialIcons } from '../social/social-icons'
import { PhoneNumbersCard } from './phone-numbers-card'

interface Props {
  className?: string
}

const phoneNumbers = [
  {
    prefix: '+57',
    number: '3114470929'
  },
  {
    prefix: '+57',
    number: '3112005489'
  }
]

export const ContactHeader = ({ className }: Props) => {
  const mail = env.NEXT_PUBLIC_MAIL

  return (
    <header className={className}>
      <h1 className="animation-entry text-center text-4xl font-bold md:text-6xl">Contáctanos</h1>

      <p
        className="animation-entry mt-7 text-sm text-text-secondary md:text-center md:text-base"
        style={{ animationDelay: '0.15s' }}
      >
        Somos el grupo perfecto si quieres música tropical, carranga y tecnomerengue en tu fiesta.
        Puedes escribirnos por nuestras <strong>redes sociales</strong> o <strong>llamarnos</strong>{' '}
        al:
      </p>

      <div className="animation-entry mt-5 text-center md:mt-9" style={{ animationDelay: '0.3s' }}>
        {phoneNumbers.map(({ number, prefix }) => (
          <PhoneNumbersCard key={number} number={number} prefix={prefix} />
        ))}

        <Link
          href={`mailto:${mail}`}
          className="mx-auto flex w-fit items-center justify-center gap-1.5 text-sm text-text-secondary md:gap-2 md:text-base md:transition-transform md:hover:scale-105"
          title="Envianos un correo"
        >
          <Mail className="w-5" />
          {mail}
        </Link>
      </div>

      <footer className="animation-entry mt-5" style={{ animationDelay: '0.45s' }}>
        <SocialIcons />
      </footer>
    </header>
  )
}
