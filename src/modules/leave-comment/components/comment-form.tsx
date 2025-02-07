'use client'

import { LogoutButton } from '@/modules/core/components/auth/logout-button'
import Form from '@/modules/core/components/form/form'
import { Button } from '@/modules/core/ui/button'
import { Textarea } from '@/modules/core/ui/textarea'

import { useCommentForm } from '../hooks/useCommentForm'

interface Props {
  userId: string
}

const CommentForm = ({ userId }: Props) => {
  const { loading, onChange, onSubmit, state } = useCommentForm(userId)

  return (
    <Form>
      <form onSubmit={onSubmit}>
        <h1 className="text-center text-2xl font-bold md:text-3xl">Deja tu comentario</h1>

        <div className="mt-5 space-y-3 text-sm text-text-secondary">
          <p>
            Dejanos saber tu opinión sobre nuestra agrupación{' '}
            <strong>Tamakún y sus Muchachos</strong>.
          </p>
          <p>Siempre estamos buscando mejorar y tu opinión es muy importante para nosotros.</p>
          <p>
            <strong>¡Gracias por tu apoyo y tiempo!</strong> ❤️
          </p>
        </div>

        <main className="mt-6">
          <Textarea
            placeholder="Escribe tu comentario aquí..."
            isInvalid={state.error}
            name="comment"
            onChange={onChange}
          />
          {state.error && <p className="text-sm text-red-600">{state.message}</p>}
        </main>

        <footer className="mt-6 flex items-center justify-center gap-2">
          <LogoutButton />

          <Button size="small" className="w-full" type="submit">
            {loading ? 'Enviando...' : 'Enviar'}
          </Button>
        </footer>
      </form>
    </Form>
  )
}

export { CommentForm }
