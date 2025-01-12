import { PostgrestError } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

export interface Response<T = unknown> {
  message: string
  data?: T | null
  error?: PostgrestError | undefined | unknown
}

export type RouteResponse<T = unknown> = NextResponse<Response<T>>
