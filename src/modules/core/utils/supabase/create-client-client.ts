import { createBrowserClient } from '@supabase/ssr'

import { env } from '../../lib/env'

export function createClientClient() {
  return createBrowserClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
}
