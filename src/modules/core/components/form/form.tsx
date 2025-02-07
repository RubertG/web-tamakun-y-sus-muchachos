type Props = React.HTMLAttributes<HTMLDivElement>

const Form = ({ className, ...props }: Props) => {
  return (
    <div
      className={`w-full max-w-lg rounded-[10px] border border-border-default bg-bg-dark/20 p-4 backdrop-blur-md md:p-6 ${className}`}
      {...props}
    ></div>
  )
}

export { Form }
