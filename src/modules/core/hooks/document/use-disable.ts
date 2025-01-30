'use client'

import { useEffect } from 'react'

export const useDisableScroll = (disable: boolean) => {
  useEffect(() => {
    document.body.style.overflow = disable ? 'hidden' : 'auto'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [disable])
}
