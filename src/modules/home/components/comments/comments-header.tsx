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
        Deja el tuyo dando <span className="font-medium text-primary-100">clic aquí.</span>
      </p>
    </header>
  )
}

export { CommentsHeader }
