import clsx from 'clsx'

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isInvalid?: boolean
}

const Textarea = ({ className, isInvalid, ...props }: Props) => {
  return (
    <textarea
      className={clsx(
        `w-full rounded-md border border-border-default bg-bg-dark/20 p-2 text-text-secondary outline-none transition-colors placeholder:text-text-muted focus:border-accent-200 ${className}`,
        {
          'border-red-700': isInvalid
        }
      )}
      autoFocus={isInvalid}
      {...props}
    />
  )
}

export { Textarea }
