import { PageContainer } from '@/modules/core/components/layouts/page-container'
import { createClientServer } from '@/modules/core/utils/supabase/create-client-server'
import { CommentForm } from '@/modules/leave-comment/components/comment-form'
import { LoginForm } from '@/modules/leave-comment/components/login-form'

export default async function LoginPage() {
  const supabase = await createClientServer()
  const {
    data: { user }
  } = await supabase.auth.getUser()

  if (user) {
    return (
      <PageContainer className="flex items-center justify-center !pt-0 md:!pt-24">
        <CommentForm userId={user.id} />
      </PageContainer>
    )
  }

  return (
    <PageContainer className="flex items-center justify-center !pt-0 md:!pt-24">
      <LoginForm />
    </PageContainer>
  )
}
