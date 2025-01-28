interface Props {
  className?: string
  children: React.ReactNode
}

const CommentsContainer = ({ children, className }: Props) => {
  return (
    <div className={`border-t border-border-default bg-bg-muted py-10 ${className}`}>
      {children}
    </div>
  )
}

export { CommentsContainer }
