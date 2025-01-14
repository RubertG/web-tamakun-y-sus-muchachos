'use client'

import React from 'react'

import { signout } from '../../actions/login'

function LogoutButton() {
  return (
    <button
      type="button"
      className="rounded-xl bg-slate-950 px-3.5 py-2.5 text-white"
      onClick={() => {
        signout()
      }}
    >
      Cerrar sesión
    </button>
  )
}

export { LogoutButton }
