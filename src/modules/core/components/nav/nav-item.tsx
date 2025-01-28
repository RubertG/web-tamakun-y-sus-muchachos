import clsx from 'clsx'
import Link from 'next/link'

import { NavLinkType } from '../../interfaces/nav/nav'

interface Props extends NavLinkType {
  children?: React.ReactNode
  className?: string
  isActive?: boolean
}

const NavItem = ({
  children,
  path,
  label,
  isActive,
  className
}: Props) => {
  return (
    <Link
      className={clsx(
        'group relative z-10 inline-flex h-fit w-full text-[55px] font-extrabold md:w-fit md:text-base md:font-medium md:transition-colors md:hover:text-primary-200',
        {
          'text-primary-200': isActive,
          'text-text-secondary': !isActive
        },
        className
      )}
      href={path}
    >
      <div className="absolute -left-[1px] -top-[1px] -z-10 hidden h-[calc(100%+2px)] w-[calc(100%+2px)] rounded-[10px] border-solid bg-gradient-primary opacity-0 transition-all group-hover:opacity-100 md:inline-block" />
      <p className="capitalize md:rounded-[10px] md:bg-black md:px-[14px] md:py-[9px]">
        {children || label}
      </p>
    </Link>
  )
}

export { NavItem }
