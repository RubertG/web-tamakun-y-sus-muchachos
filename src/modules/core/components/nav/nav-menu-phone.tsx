'use client'

import { AnimatePresence, m } from 'motion/react'
import { Variants } from 'motion/react'
import { usePathname } from 'next/navigation'

import { NavLinkType } from '../../interfaces/nav/nav'
import { NavItem } from './nav-item'

interface Props {
  items: NavLinkType[]
  open: boolean
  onClose: () => void
  lastContent?: React.ReactNode
}

const navVariants: Variants = {
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  },
  closed: {
    opacity: 0,
    transition: { staggerChildren: 0.05, delay: 0.2 }
  }
}

const itemVariants: Variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    x: -100,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

const NavMenuMobile = ({ items, open, onClose, lastContent }: Props) => {
  const pathName = usePathname()

  return (
    <AnimatePresence>
      {open && (
        <m.ul
          className="absolute left-0 top-0 -z-10 flex h-dvh w-full flex-col justify-end -space-y-2.5 bg-bg-dark/80 px-3 pb-10 backdrop-blur-[6px] md:hidden"
          initial="closed"
          animate="open"
          exit="closed"
          variants={navVariants}
        >
          {items.map((item) => {
            const isActive = pathName === item.path

            return (
              <m.li key={item.path} className="w-fit" onClick={onClose} variants={itemVariants}>
                <NavItem label={item.label} path={item.path} isActive={isActive} />
              </m.li>
            )
          })}

          {lastContent && (
            <m.li variants={itemVariants} onClick={onClose}>
              {lastContent}
            </m.li>
          )}
        </m.ul>
      )}
    </AnimatePresence>
  )
}

export { NavMenuMobile }
