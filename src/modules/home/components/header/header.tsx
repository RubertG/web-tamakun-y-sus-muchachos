import { SocialIcons } from '@/modules/contact/components/social/social-icons'
import { Button } from '@/modules/core/ui/button'
import Link from 'next/link'

interface Props {
  className?: string
}

const Header = ({ className }: Props) => {
  return (
    <header
      className={`mx-auto max-w-[682px] px-3 md:flex md:h-[78vh] md:flex-col md:items-center md:justify-center ${className}`}
    >
      <SocialIcons className="animation-entry" />

      <h1
        className="animation-entry mx-auto mt-5 text-center text-[46px] font-extrabold leading-[1.05] md:text-[83px] md:leading-[1.05]"
        style={{ animationDelay: '0.15s' }}
      >
        <span className="text-gradient-primary">Tamakún</span> y sus Muchachos
      </h1>

      <p
        className="animation-entry mx-auto mt-4 max-w-md text-center text-sm text-text-secondary md:max-w-none md:text-base"
        style={{ animationDelay: '0.3s' }}
      >
        Grupo musical oriundo de Chinácota, Norte de Santander, Colombia. El grupo perfecto si
        quieres música tropical, carranga y tecnomerengue en tu fiesta.
      </p>

      <footer
        className="animation-entry mt-8 flex items-center justify-center gap-3.5"
        style={{ animationDelay: '0.45s' }}
      >
        <Link href="/contacto">
          <Button size="small">¡Contáctanos!</Button>
        </Link>
        <Link href="/historia">
          <Button variant="secondary" size="small">
            Nuestra historia
          </Button>
        </Link>
      </footer>
    </header>
  )
}

export { Header }
