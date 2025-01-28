import { google } from 'googleapis'

import { Event } from '../interfaces/db/db'
import { EVENTS_LIMIT } from '../utils/const/events'
import { env } from './env'

const calendar = google.calendar('v3')

export const getEvents = async (
  maxResults: number = EVENTS_LIMIT
): Promise<Event[]> => {
  const calendarId = env.GOOGLE_CALENDAR_ID
  const apiKey = env.GOOGLE_API_KEY

  const response = await calendar.events.list({
    calendarId,
    key: apiKey,
    timeMin: new Date().toISOString(), // Solo eventos futuros
    maxResults, // Número máximo de eventos
    singleEvents: true, // Expandir eventos recurrentes
    orderBy: 'startTime'
  })

  const items = response.data.items || []

  return items.map((event) => ({
    id: event.id || '',
    title: event.summary || 'Sin título',
    description:
      event.location || 'Lugar reservado por el cliente',
    date: event.start?.dateTime || event.start?.date || ''
  })) as Event[]
}
