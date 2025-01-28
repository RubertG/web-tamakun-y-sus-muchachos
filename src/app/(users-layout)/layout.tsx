import { UsersNav } from '@/modules/core/components/nav/users-nav'
import { PropsWithChildren } from 'react'

function PublicLayout({ children }: PropsWithChildren) {
  return (
    <>
      <UsersNav />
      {children}
    </>
  )
}

export default PublicLayout
