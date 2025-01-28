'use client'

import { usePathname } from 'next/navigation'

import { NavLinkType } from '../../interfaces/nav/nav'
import { NavItem } from './nav-item'

interface Props {
  items: NavLinkType[]
  lastContent?: React.ReactNode
}

const NavMenuDesktop = ({ items, lastContent }: Props) => {
  const pathName = usePathname()

  return (
    <>
      <ul className="hidden md:flex md:basis-full md:items-center md:justify-center md:space-x-1">
        {items.map((item) => {
          const isActive = pathName === item.path

          return (
            <li key={item.path}>
              <NavItem
                label={item.label}
                path={item.path}
                isActive={isActive}
              />
            </li>
          )
        })}
      </ul>

      {lastContent && (
        <div className="md: hidden md:flex md:basis-full md:justify-end">
          {lastContent}
        </div>
      )}
    </>
  )
}

export { NavMenuDesktop }
