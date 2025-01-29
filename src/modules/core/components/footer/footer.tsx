import { Decoration } from '../../ui/decoration'

interface Props {
  className?: string
}

const Footer = ({ className }: Props) => {
  return (
    <footer className={`relative h-0 ${className}`}>
      <Decoration
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 overflow-hidden"
        variant="secondary"
      />
    </footer>
  )
}

export { Footer }
