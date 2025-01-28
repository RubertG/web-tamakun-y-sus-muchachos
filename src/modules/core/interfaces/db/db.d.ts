import { Database } from './supabase'

export type User =
  Database['public']['Tables']['users']['Row']
export type UserInsert =
  Database['public']['Tables']['users']['Insert']

export type Comment =
  Database['public']['Tables']['comments']['Row']
export type CommentInsert =
  Database['public']['Tables']['comments']['Insert']

export type Event = {
  id: string
  date: string
  title: string
  description: string
}
