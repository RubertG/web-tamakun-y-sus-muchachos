'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { env } from '../lib/env'
import { createClientServer } from '../utils/supabase/create-client-server'

export async function signout() {
  const supabase = await createClientServer()
  await supabase.auth.signOut()

  revalidatePath('/dejar-comentario')
}

export async function signInWithGoogle(next?: string) {
  const supabase = await createClientServer()
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${env.NEXT_PUBLIC_DOMAIN}/auth/callback?next=${next || '/'}`
    }
  })

  if (error || !data.url) {
    redirect('/error')
  }

  redirect(data.url)
}
