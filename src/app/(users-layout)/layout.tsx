import { UsersNav } from '@/modules/core/components/nav/users-nav'
import { Decoration } from '@/modules/core/ui/decoration'
import { PropsWithChildren } from 'react'

function PublicLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Decoration className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2" />
      <UsersNav />
      {children}
    </>
  )
}

export default PublicLayout
