import { RouteResponse } from '@/modules/core/interfaces/api/api'
import { Event } from '@/modules/core/interfaces/db/db'
import { getEvents } from '@/modules/core/lib/google-calendar'
import { EVENTS_LIMIT } from '@/modules/core/utils/const/events'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest): Promise<RouteResponse<Event[]>> {
  const limit = Number(request.nextUrl.searchParams.get('limit')) || EVENTS_LIMIT

  try {
    const events = await getEvents(limit)

    return NextResponse.json(
      {
        message: 'Hello World',
        data: events
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Error al obtener los eventos',
        error
      },
      { status: 500 }
    )
  }
}
