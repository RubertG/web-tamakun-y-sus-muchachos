'use client'

import { usePathname } from 'next/navigation'

import { NavLinkType } from '../../interfaces/nav/nav'
import { NavItem } from './nav-item'

const LastComponentInMobile = ({
  path,
  label
}: NavLinkType) => {
  const pathName = usePathname()
  const isActive = pathName === path

  return (
    <NavItem
      label={label}
      path={path}
      isActive={isActive}
    />
  )
}

export { LastComponentInMobile }
