'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { saveComment } from '../actions/save-comment'

export const useCommentForm = (userId: string) => {
  const [state, setState] = useState({
    message: '',
    error: true
  })
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const onChange = () => {
    if (state.error) {
      setState({ message: '', error: false })
    }
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)
    const data = await saveComment(userId, new FormData(e.currentTarget))
    setLoading(false)
    setState(data)

    if (!data.error) {
      router.push('/')
    }
  }

  return {
    state,
    loading,
    onChange,
    onSubmit
  }
}
