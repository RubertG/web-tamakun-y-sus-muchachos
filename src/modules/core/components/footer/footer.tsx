import Link from 'next/link'

import { Decoration } from '../../ui/decoration'

interface Props {
  className?: string
}

const Footer = ({ className }: Props) => {
  return (
    <footer className={`relative pb-6 ${className}`}>
      <Decoration
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 overflow-hidden"
        variant="secondary"
      />

      <p className="text-center text-sm text-gray-500">
        Diseñado y desarrollado por{' '}
        <Link href="/contacto" className="font-bold hover:underline">
          WebMinds Colombia
        </Link>
      </p>
    </footer>
  )
}

export { Footer }
