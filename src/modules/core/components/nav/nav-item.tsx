import Link from 'next/link'

import { NavLinkType } from '../../interfaces/nav/nav'

interface Props extends NavLinkType {
  children: React.ReactNode
}

const NavItem = ({ children, path, label }: Props) => {
  return (
    <Link className="group relative z-10 inline-flex h-fit w-fit font-medium" href={path}>
      <div className="bg-gradient-primary absolute -left-[1px] -top-[1px] -z-10 hidden h-[calc(100%+2px)] w-[calc(100%+2px)] rounded-[10px] border-solid opacity-0 transition-all group-hover:opacity-100 md:inline-block" />
      <p className="md:rounded-[10px] md:bg-black md:px-[14px] md:py-[9px]">{children || label}</p>
    </Link>
  )
}

export { NavItem }
