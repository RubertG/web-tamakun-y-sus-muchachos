import { PostgrestError } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

import { Comment } from '../db/db'

export interface Response<T = unknown> {
  message: string
  data?: T | null
  error?: PostgrestError | undefined | unknown
}

export type RouteResponse<T = unknown> = NextResponse<
  Response<T>
>

export interface CommentResponse extends Comment {
  user_name: string
  profile_picture: string
}
