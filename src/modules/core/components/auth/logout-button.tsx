'use client'

import React, { useState } from 'react'

import { signout } from '../../actions/login'
import { Button } from '../../ui/button'

function LogoutButton() {
  const [loading, setLoading] = useState(false)

  const handleSignout = async () => {
    setLoading(true)
    await signout()
    setLoading(false)
  }

  return (
    <Button
      type="button"
      variant="transparent"
      className="w-full"
      size="small"
      onClick={handleSignout}
    >
      {loading ? 'Cerrando sesión...' : 'Cerrar sesión'}
    </Button>
  )
}

export { LogoutButton }
