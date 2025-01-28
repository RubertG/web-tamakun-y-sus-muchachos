import { updateSession } from '@/modules/core/utils/supabase/middleware'
import { NextResponse, type NextRequest } from 'next/server'

import { createClientServer } from './modules/core/utils/supabase/create-client-server'

/**
 * Middleware function to handle authentication and session management.
 *
 * @param {NextRequest} request - The incoming request object.
 * @returns {Promise<NextResponse>} - The response object after processing the request.
 *
 * This middleware performs the following tasks:
 * 1. Updates the session using the `updateSession` function.
 * 2. Creates a Supabase client on the server side.
 * 3. Retrieves the current session from Supabase authentication.
 * 4. Checks the request URL pathname and session status to enforce authentication:
 *    - Redirects to the login page if accessing `/admin` without a session.
 *    - Returns a 401 Unauthorized response if accessing non-GET `/api` endpoints without a session.
 * 5. Returns the response from the `updateSession` function if no redirection or unauthorized access occurs.
 */
export async function middleware(request: NextRequest) {
  const supabaseResponse = await updateSession(request)

  const supabase = await createClientServer()
  const {
    data: { session }
  } = await supabase.auth.getSession()

  const { pathname } = request.nextUrl

  if (pathname.startsWith('/admin') && !session) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('redirect', pathname)

    return NextResponse.redirect(loginUrl)
  }

  if (pathname.startsWith('/api') && request.method !== 'GET' && !session) {
    return NextResponse.json({ message: 'No autorizado' }, { status: 401 })
  }

  return supabaseResponse
}

export const config = {
  matcher: ['/admin/:path*', '/api/:path*']
}
