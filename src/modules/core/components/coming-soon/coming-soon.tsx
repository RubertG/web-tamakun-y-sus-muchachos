interface Props {
  className?: string
}

const ComingSoon = ({ className }: Props) => {
  return (
    <div className={`${className}`}>
      <p className="text-center text-3xl font-bold md:text-5xl">Próximamente...</p>
    </div>
  )
}

export { ComingSoon }
