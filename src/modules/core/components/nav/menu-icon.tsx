import clsx from 'clsx'

interface Props {
  className?: string
  isOpen?: boolean
}

const MenuIcon = ({ isOpen = false, className }: Props) => {
  return (
    <div
      className={`flex w-6 flex-col items-center justify-center gap-1 ${className}`}
    >
      <span
        className={clsx(
          'h-[2px] w-full rounded-lg bg-text-primary transition-all duration-300',
          {
            'translate-y-[calc(100%*3)] rotate-45 transform':
              isOpen
          }
        )}
      />
      <span
        className={clsx(
          'h-[2px] w-full rounded-lg bg-text-primary transition-all duration-300',
          {
            'translate-x-2 opacity-0': isOpen
          }
        )}
      />
      <span
        className={clsx(
          'h-[2px] w-full rounded-lg bg-text-primary transition-all duration-300',
          {
            '-translate-y-[calc(100%*3)] -rotate-45 transform':
              isOpen
          }
        )}
      />
    </div>
  )
}

export default MenuIcon
