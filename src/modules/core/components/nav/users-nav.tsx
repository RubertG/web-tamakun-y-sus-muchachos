import Link from 'next/link'

import { NavLinkType } from '../../interfaces/nav/nav'
import { Button } from '../../ui/button'
import { Nav } from './nav'
import { NavItem } from './nav-item'

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

const UsersNav = () => {
  return (
    <Nav
      items={NavItems}
      lastComponentInMobile={
        <NavItem
          label="contacto"
          path="/contacto"
          className="text-gradient-primary"
        />
      }
      lastComponentInDesktop={
        <Link href="/contacto">
          <Button variant="secondary">Contáctanos</Button>
        </Link>
      }
    />
  )
}

export { UsersNav }
