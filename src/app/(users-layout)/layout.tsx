import { Nav } from '@/modules/core/components/nav/nav'
import { NavLinkType } from '@/modules/core/interfaces/nav/nav'
import { PropsWithChildren } from 'react'

const NavItems: NavLinkType[] = [
  {
    label: 'Inicio',
    path: '/'
  },
  {
    label: 'historia',
    path: '/historia'
  },
  {
    label: 'eventos',
    path: '/eventos'
  },
  {
    label: 'Galería',
    path: '/galeria'
  }
]

function PublicLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Nav items={NavItems} />
      {children}
    </>
  )
}

export default PublicLayout
