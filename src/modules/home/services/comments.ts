import { CommentResponse, Response } from '@/modules/core/interfaces/api/api'
import { env } from '@/modules/core/lib/env'
import { apiRoutes } from '@/modules/core/utils/api/apiRoutes'

export const getComments = async (
  start?: number,
  end?: number,
  areActives?: boolean
): Promise<Response<CommentResponse[]>> => {
  try {
    const response = await fetch(apiRoutes.comments.allComments(start, end, areActives), {
      headers: {
        authorization: env.SECRET_KEY
      },
      cache: 'no-cache',
      next: {
        revalidate: 60
      }
    })
    console.log({ authorization: env.SECRET_KEY, response })
    const data = await response.json()
    console.log({ data })

    return data
  } catch (error) {
    console.log({ error })

    return {
      data: null,
      error,
      message: 'No se pudieron obtener los comentarios'
    }
  }
}
