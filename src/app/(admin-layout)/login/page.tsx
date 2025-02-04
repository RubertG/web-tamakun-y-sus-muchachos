import { LogoutButton } from '@/modules/core/components/auth/logout-button'
import SignInWithGoogleButton from '@/modules/core/components/auth/sign-in-with-google-button'
import { createClientServer } from '@/modules/core/utils/supabase/create-client-server'
import { redirect } from 'next/navigation'

export default async function LoginPage() {
  const supabase = await createClientServer()
  const {
    data: { user }
  } = await supabase.auth.getUser()

  if (user) {
    redirect('/')
  }

  return (
    <form className="flex h-screen flex-col items-center justify-center space-y-4">
      <h1>Ingresar</h1>

      {user ? (
        <div>
          <LogoutButton />
        </div>
      ) : (
        <div>
          <SignInWithGoogleButton />
        </div>
      )}
    </form>
  )
}
