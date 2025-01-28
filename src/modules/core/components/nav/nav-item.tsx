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
        'group relative z-10 inline-flex h-fit w-fit text-[55px] font-extrabold md:w-fit md:text-base md:font-medium',
        className
      )}
      href={path}
    >
      <div className="absolute -left-[1px] -top-[1px] -z-10 hidden h-[calc(100%+2px)] w-[calc(100%+2px)] rounded-[10px] border-solid bg-gradient-primary opacity-0 transition-all group-hover:opacity-100 md:inline-block" />
      <p
        className={clsx(
          'capitalize md:rounded-[10px] md:px-[14px] md:py-[9px] md:transition-colors md:duration-200 md:group-hover:bg-bg-dark md:group-hover:text-primary-200 md:group-hover:duration-100',
          {
            'text-gradient-primary text-gradient-primary-off':
              isActive,
            'text-text-secondary': !isActive
          }
        )}
      >
        {children || label}
      </p>
    </Link>
  )
}

export { NavItem }
