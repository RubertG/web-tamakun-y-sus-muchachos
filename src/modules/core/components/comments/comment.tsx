import Image from 'next/image'

import { CommentResponse } from '../../interfaces/api/api'

interface Props {
  className?: string
  user: CommentResponse
}

const Comment = ({ className, user: { profile_picture, user_name, created_at, comment } }: Props) => {
  const date = created_at
    ? new Date(created_at).toLocaleDateString('es-CO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : ''

  return (
    <div className={`group relative z-10 w-full max-w-sm rounded-[10px] border border-border-default ${className}`}>
      <div className="absolute -left-[1px] -top-[1px] -z-10 inline-block h-[calc(100%+2px)] w-[calc(100%+2px)] rounded-[10px] border-solid bg-gradient-primary opacity-0 transition-all group-hover:opacity-100" />

      <div className="rounded-[10px] bg-bg-dark p-6">
        <header className="flex items-center gap-4 overflow-hidden">
          <Image
            src={profile_picture || '/assets/user.webp'}
            alt={`Avatar de ${user_name}`}
            width={55}
            height={55}
            className="h-[55px] w-[55px] rounded-full object-cover object-center"
          />

          <div className="w-full overflow-hidden">
            <h3 className="overflow-hidden text-ellipsis text-nowrap font-semibold text-text-primary">{user_name}</h3>
            <p className="overflow-hidden text-ellipsis text-nowrap text-sm font-normal text-text-muted">{date}</p>
          </div>
        </header>

        <p className="mt-5 line-clamp-4 text-sm font-normal text-text-secondary">&quot;{comment}&quot;</p>
      </div>
    </div>
  )
}

export { Comment }
