import SignInWithGoogleButton from '@/modules/core/components/auth/sign-in-with-google-button'
import { Form } from '@/modules/core/components/form/form'

const LoginForm = () => {
  return (
    <Form>
      <form>
        <h1 className="text-center text-2xl font-bold md:text-3xl">Iniciar sesión</h1>

        <div className="mt-5 space-y-3 text-sm text-text-secondary">
          <p>Debes iniciar sesión con Google para dejar tu comentario sobre nosotros.</p>
          <p>
            Al iniciar sesión, aceptas que mostremos tu nombre y foto de perfil de Google, junto con
            tu comentario, en nuestra web y redes sociales.
          </p>
          <p>Agradecemos tu tiempo y opinión ❤️.</p>
        </div>

        <footer className="mt-6">
          <SignInWithGoogleButton next="/dejar-comentario" />
        </footer>
      </form>
    </Form>
  )
}

export { LoginForm }
