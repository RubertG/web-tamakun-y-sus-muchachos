import { cva, VariantProps } from 'class-variance-authority'

const decorationVariants = cva('-z-10 aspect-square rounded-full', {
  variants: {
    variant: {
      primary: 'h-[250px] blur-[200px] lg:h-[350px] lg:blur-[270px] bg-primary-100',
      secondary: 'h-[250px] blur-[200px] lg:h-[350px] lg:blur-[270px] bg-accent-100'
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})

interface Props extends VariantProps<typeof decorationVariants> {
  className?: string
}

const Decoration = ({ className, variant }: Props) => {
  const classNames = decorationVariants({ variant }) + (className ? ` ${className}` : '')

  return <div className={classNames} />
}

export { Decoration }
