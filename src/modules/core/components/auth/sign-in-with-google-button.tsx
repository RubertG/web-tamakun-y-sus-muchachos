'use client'

import React from 'react'

import { signInWithGoogle } from '../../actions/login'

const SignInWithGoogleButton = () => {
  return (
    <button
      type="button"
      className="rounded-xl bg-slate-950 px-3.5 py-2.5 text-white"
      onClick={async () => {
        signInWithGoogle()
      }}
    >
      Ingresar con Google
    </button>
  )
}

export default SignInWithGoogleButton
