interface Props {
  className?: string
  children: React.ReactNode
}

const PageContainer = ({ className, children }: Props) => {
  return (
    <div
      className={`min-h-[calc(100vh-44px)] px-3 pb-16 pt-24 md:flex md:flex-col md:items-center md:justify-center ${className}`}
    >
      {children}
    </div>
  )
}

export { PageContainer }
