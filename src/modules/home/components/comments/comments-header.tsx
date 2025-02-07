import Link from 'next/link'

interface Props {
  className?: string
}

const CommentsHeader = ({ className }: Props) => {
  return (
    <header className={className}>
      <p className="px-3 text-center text-sm text-text-muted md:text-base">
        Muchos de nuestros clientes y fans que{' '}
        <span className="font-medium text-text-secondary">confían en nosotros</span> dejaron su
        comentario.
      </p>
      <p className="mt-0.5 px-3 text-center text-sm font-medium text-text-muted md:text-base">
        Deja el tuyo dando{' '}
        <Link href="/dejar-comentario" className="font-medium text-primary-100 hover:underline">
          clic aquí.
        </Link>
      </p>
    </header>
  )
}

export { CommentsHeader }
