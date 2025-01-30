'use client'

import { useEffect, useState } from 'react'

export const useWindowTop = () => {
  const [isWindowTop, setIsWindowTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsWindowTop(false)
      } else {
        setIsWindowTop(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return {
    isWindowTop
  }
}
