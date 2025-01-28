import Link from 'next/link'

import { NavLinkType } from '../../interfaces/nav/nav'
import { Button } from '../../ui/button'
import { LastComponentInMobile } from './last-component-in-mobile'
import { Nav } from './nav'

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
        <LastComponentInMobile
          path="/contacto"
          label="Contacto"
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
