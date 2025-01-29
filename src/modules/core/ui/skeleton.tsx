import { cn } from '@/modules/core/utils/shadcn/utils'

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('animate-pulse rounded-md bg-zinc-800', className)} {...props} />
}

export { Skeleton }
