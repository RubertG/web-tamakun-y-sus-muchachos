'use client'

import clsx from 'clsx'
import { LazyMotion, domAnimation } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { useDisableScroll } from '../../hooks/use-disable'
import { NavLinkType } from '../../interfaces/nav/nav'
import MenuIcon from './menu-icon'
import { NavMenu } from './nav-menu'

interface Props {
  className?: string
  items: NavLinkType[]
}

const Nav = ({ items, className }: Props) => {
  const [open, setOpen] = useState(false)

  useDisableScroll(open)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <LazyMotion features={domAnimation}>
      <nav className={clsx('fixed left-0 top-0 w-full', className)}>
        <div
          className={clsx(
            'z-10 flex items-center justify-between px-3 py-3 backdrop-blur-[6px] transition-all duration-300',
            {
              'bg-bg-dark/50': !open,
              'bg-bg-dark/80': open
            }
          )}
        >
          <Link href="/">
            <Image src="/assets/name-logo.webp" alt="Logo Tamakún y sus muchachos" width={100} height={52} priority />
          </Link>

          <button onClick={handleOpen} aria-expanded={open} className="focus:outline-none">
            <MenuIcon isOpen={open} />
          </button>
        </div>

        <NavMenu items={items} open={open} onClose={handleOpen} />
      </nav>
    </LazyMotion>
  )
}

export { Nav }
