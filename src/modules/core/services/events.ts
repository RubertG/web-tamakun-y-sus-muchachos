import { Response } from '../interfaces/api/api'
import { Event } from '../interfaces/db/db'
import { env } from '../lib/env'
import { apiRoutes } from '../utils/api/api-routes'

export const getEvents = async (limit?: number): Promise<Response<Event[]>> => {
  try {
    const res = await fetch(apiRoutes.events.allEvents(limit), {
      method: 'GET',
      headers: {
        authorization: env.SECRET_KEY
      },
      cache: 'no-cache'
    })
    const data = await res.json()

    return data
  } catch (error) {
    return {
      message: 'Error al obtener los eventos',
      error
    }
  }
}
