'use client'

import { Button } from '@/modules/core/ui/button'

interface Props {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ reset }: Props) {
  return (
    <main className="flex h-dvh flex-col items-center justify-center space-y-4">
      <h2 className="text-8xl font-bold">Ops</h2>

      <p className="mt-2 text-sm text-text-secondary md:text-base">Ocurrió un error inesperado.</p>
      <Button variant="secondary" size="small" onClick={() => reset()}>
        Volver a intentar
      </Button>
    </main>
  )
}
