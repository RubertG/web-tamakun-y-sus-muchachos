'use client'

import { AnimatePresence, m } from 'motion/react'
import { Variants } from 'motion/react'

import { NavLinkType } from '../../interfaces/nav/nav'
import { NavItem } from './nav-item'

interface Props {
  items: NavLinkType[]
  open: boolean
  onClose: () => void
}

const navVariants: Variants = {
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
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

const NavMenu = ({ items, open, onClose }: Props) => {
  return (
    <AnimatePresence>
      {open && (
        <m.ul
          className="left-0 top-0 flex h-[calc(100dvh-76px)] w-full flex-col justify-end -space-y-2.5 bg-bg-dark/80 px-3 pb-10 backdrop-blur-[6px]"
          initial="closed"
          animate="open"
          exit="closed"
          variants={navVariants}
        >
          {items.map((item) => (
            <m.li key={item.path} onClick={onClose} variants={itemVariants}>
              <NavItem label={item.label} path={item.path} />
            </m.li>
          ))}

          <m.li variants={itemVariants} onClick={onClose}>
            <NavItem label="Contacto" path="/contacto" className="text-gradient-primary" />
          </m.li>
        </m.ul>
      )}
    </AnimatePresence>
  )
}

export { NavMenu }
