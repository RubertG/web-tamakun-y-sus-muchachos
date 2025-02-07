import { Button } from '@/modules/core/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex h-dvh flex-col items-center justify-center space-y-4">
      <h2 className="text-8xl font-bold">404</h2>

      <p className="text-sm text-text-secondary md:text-base">
        La página que estás buscando no existe.
      </p>
      <Link href="/">
        <Button variant="secondary" size="small">
          Volver al inicio
        </Button>
      </Link>
    </main>
  )
}
