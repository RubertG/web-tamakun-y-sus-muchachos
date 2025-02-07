'use client'

import React from 'react'

import { signout } from '../../actions/login'
import { Button } from '../../ui/button'

function LogoutButton() {
  return (
    <Button
      type="button"
      variant="transparent"
      className="w-full"
      size="small"
      onClick={() => {
        signout()
      }}
    >
      Cerrar sesión
    </Button>
  )
}

export { LogoutButton }
