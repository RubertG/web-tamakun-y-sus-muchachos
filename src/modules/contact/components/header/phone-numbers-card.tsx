import { Phone } from 'lucide-react'
import Link from 'next/link'

interface Props {
  number: string
  prefix: string
}

const PhoneNumbersCard = ({ number, prefix }: Props) => {
  return (
    <Link
      key={number}
      href={`tel:${prefix}${number}`}
      className="mx-auto mb-2 flex w-fit items-center justify-center gap-1.5 text-3xl font-bold text-text-secondary md:mb-5 md:text-[40px] md:transition-transform md:hover:scale-105"
      title={`Llamar al ${prefix} ${number}`}
    >
      <Phone className="-mt-0.5 w-5 md:hidden" />

      <p>
        {prefix} <span className="text-gradient-primary">{number}</span>
      </p>
    </Link>
  )
}

export { PhoneNumbersCard }
