'use server'

import { CommentInsert } from '@/modules/core/interfaces/db/db'
import { env } from '@/modules/core/lib/env'
import { apiRoutes } from '@/modules/core/utils/api/api-routes'

export const saveComment = async (userId: string, formData: FormData) => {
  const commentText = formData.get('comment') as string

  if (!commentText) {
    return {
      error: true,
      message: 'El comentario no puede estar vacío'
    }
  }

  const comment: CommentInsert = {
    user_id: userId,
    comment: formData.get('comment') as string
  }

  try {
    const res = await fetch(apiRoutes.comments.saveComment, {
      method: 'POST',
      headers: {
        authorization: env.SECRET_KEY
      },
      body: JSON.stringify(comment)
    })

    if (!res.ok) {
      return {
        error: true,
        message: 'Ocurrió un error al guardar tu comentario'
      }
    }

    return {
      error: false,
      message: 'Comentario guardado correctamente'
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {
      error: true,
      message: 'Ocurrió un error al guardar tu comentario'
    }
  }
}
