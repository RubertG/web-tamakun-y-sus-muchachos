'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import clsx from 'clsx'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px] font-medium text-text-primary ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'bg-gradient-primary bg-[length:150%_150%] bg-[position:50%_50%] hover:bg-[position:80%_80%] transition-[background-position] bg-center px-[15px] py-[10px]',
        secondary: 'px-[14px] py-[9px] bg-bg-dark',
        ghost: 'px-[14px] py-[9px] bg-bg-dark'
      },
      size: {
        normal: 'text-base',
        small: 'text-sm'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'normal'
    }
  }
)

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = ({ children, className, variant, size, ...props }: Props) => {
  const classNames = buttonVariants({ variant, size }) + (className ? ` ${className}` : '')

  if (variant === 'secondary' || variant === 'ghost') {
    return (
      <div
        className={clsx('inline h-fit w-fit rounded-[10px] p-[1px] transition-all', {
          'bg-gradient-primary hover:shadow-button-secondary': variant === 'secondary',
          'hover:bg-gradient-primary': variant === 'ghost'
        })}
      >
        <button className={classNames} {...props}>
          {children}
        </button>
      </div>
    )
  }

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  )
}

export { Button }
