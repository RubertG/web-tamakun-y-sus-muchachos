import { type NextRequest, NextResponse } from 'next/server'

import { env } from './modules/core/lib/env'
import { updateSession } from './modules/core/utils/supabase/middleware'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/api')) {
    const apiToken = request.headers.get('authorization')

    if (!apiToken || apiToken !== env.SECRET_KEY) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }
  }

  if (pathname.startsWith('/admin')) {
    return await updateSession(request)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/api/:path*']
}
