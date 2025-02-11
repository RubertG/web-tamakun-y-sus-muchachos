import { CommentResponse, Response } from '@/modules/core/interfaces/api/api'
import { env } from '@/modules/core/lib/env'
import { apiRoutes } from '@/modules/core/utils/api/api-routes'

interface Params {
  start?: number
  end?: number
  areActives?: boolean
}

export const getComments = async (params?: Params): Promise<Response<CommentResponse[]>> => {
  try {
    const response = await fetch(
      apiRoutes.comments.allComments(params?.start, params?.end, params?.areActives),
      {
        headers: {
          authorization: env.SECRET_KEY
        },
        cache: 'force-cache',
        next: {
          revalidate: 60
        }
      }
    )
    const data = await response.json()

    return data
  } catch (error) {
    return {
      data: null,
      error,
      message: 'No se pudieron obtener los comentarios'
    }
  }
}
