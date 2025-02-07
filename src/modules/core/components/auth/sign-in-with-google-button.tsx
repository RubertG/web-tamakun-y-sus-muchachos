'use client'

import React from 'react'

import { signInWithGoogle } from '../../actions/login'
import { Button } from '../../ui/button'

interface Props {
  next?: string
}

const SignInWithGoogleButton = ({ next }: Props) => {
  return (
    <Button
      variant="secondary"
      size="small"
      className="w-full"
      onClick={async () => {
        signInWithGoogle(next)
      }}
    >
      Ingresar con Google
    </Button>
  )
}

export default SignInWithGoogleButton
