interface Props {
  className?: string
}

const CommentsHeader = ({ className }: Props) => {
  return (
    <header className={className}>
      <p className="px-3 text-center text-sm font-medium text-text-secondary md:text-base">
        Muchos de nuestros clientes y fans que{' '}
        <span className="text-text-primary">confían en nosotros</span> dejaron su comentario.
      </p>
      <p className="mt-0.5 px-3 text-center text-sm font-medium text-text-secondary md:text-base">
        Deja el tuyo dando <span className="font-bold text-primary-100">clic aquí.</span>
      </p>
    </header>
  )
}

export { CommentsHeader }
