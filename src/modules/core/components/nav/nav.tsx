'use client'

import clsx from 'clsx'
import { LazyMotion, domAnimation } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { useDisableScroll } from '../../hooks/use-disable'
import { NavLinkType } from '../../interfaces/nav/nav'
import MenuIcon from './menu-icon'
import { NavMenuDesktop } from './nav-menu-desktop'
import { NavMenuMobile } from './nav-menu-phone'

interface Props {
  className?: string
  items: NavLinkType[]
  lastComponentInMobile?: React.ReactNode
  lastComponentInDesktop?: React.ReactNode
}

const Nav = ({
  items,
  className,
  lastComponentInDesktop,
  lastComponentInMobile
}: Props) => {
  const [open, setOpen] = useState(false)

  useDisableScroll(open)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <LazyMotion features={domAnimation}>
      <nav
        className={clsx(
          'fixed left-0 top-0 z-50 w-full md:flex md:items-center md:justify-between md:bg-bg-dark/50 md:px-8 md:py-3 md:backdrop-blur-[6px]',
          className
        )}
      >
        <div
          className={clsx(
            'z-10 flex items-center justify-between px-3 py-3 backdrop-blur-[6px] transition-all duration-300 md:basis-full md:bg-transparent md:px-0 md:py-0 md:backdrop-blur-none',
            {
              'bg-bg-dark/50': !open,
              'bg-bg-dark/80': open
            }
          )}
        >
          <Link href="/" onClick={handleOpen}>
            <Image
              className="h-[52px] w-[100px]"
              src="/assets/name-logo.webp"
              alt="Logo Tamakún y sus muchachos"
              width={100}
              height={52}
              priority
            />
          </Link>

          <button
            onClick={handleOpen}
            aria-expanded={open}
            className="focus:outline-none md:hidden"
          >
            <MenuIcon isOpen={open} />
          </button>
        </div>

        <NavMenuMobile
          items={items}
          open={open}
          onClose={handleOpen}
          lastContent={lastComponentInMobile}
        />

        <NavMenuDesktop
          items={items}
          lastContent={lastComponentInDesktop}
        />
      </nav>
    </LazyMotion>
  )
}

export { Nav }
