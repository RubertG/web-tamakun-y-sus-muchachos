import Image from 'next/image'

import { CommentResponse } from '../../interfaces/api/api'

interface Props {
  className?: string
  comment: CommentResponse
}

const Comment = ({
  className,
  comment: { profile_picture, user_name, created_at, comment }
}: Props) => {
  const date = created_at
    ? new Date(created_at).toLocaleDateString('es-CO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : ''

  return (
    <div
      className={`h-fit w-full max-w-sm rounded-[10px] border border-border-default bg-bg-muted p-6 transition-all md:hover:border-accent-300 ${className}`}
    >
      <header className="flex items-center gap-4 overflow-hidden">
        <Image
          src={profile_picture || '/assets/user.webp'}
          alt={`Avatar de ${user_name}`}
          width={55}
          height={55}
          className="h-[55px] w-[55px] rounded-full object-cover object-center"
        />

        <div className="w-full overflow-hidden">
          <h3 className="overflow-hidden text-ellipsis text-nowrap font-semibold text-text-primary">
            {user_name}
          </h3>
          <p className="overflow-hidden text-ellipsis text-nowrap text-sm font-normal text-text-muted">
            {date}
          </p>
        </div>
      </header>

      <p className="mt-5 line-clamp-4 text-sm font-normal text-text-secondary">
        &quot;{comment}&quot;
      </p>
    </div>
  )
}

export { Comment }
