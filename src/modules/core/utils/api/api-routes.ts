import { env } from '../../lib/env'

export const apiRoutes = {
  comments: {
    allComments: (start?: number, end?: number, areActives?: boolean) => {
      const urlSearchParams = new URLSearchParams({
        ...(start !== undefined && { start: start.toString() }),
        ...(end !== undefined && { end: end.toString() }),
        ...(areActives !== undefined && { areActives: areActives.toString() })
      }).toString()

      return `${env.NEXT_PUBLIC_DOMAIN}/api/comments?${urlSearchParams}`
    },
    saveComment: `${env.NEXT_PUBLIC_DOMAIN}/api/comments`
  },
  events: {
    allEvents: (limit?: number) => {
      const urlSearchParams = new URLSearchParams({
        ...(limit !== undefined && { limit: limit.toString() })
      }).toString()

      return `${env.NEXT_PUBLIC_DOMAIN}/api/events?${urlSearchParams}`
    }
  }
}
