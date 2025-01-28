import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
  GOOGLE_API_KEY: z.string(),
  GOOGLE_CALENDAR_ID: z.string(),
  NEXT_PUBLIC_DOMAIN: z.string().url(),
  SECRET_KEY: z.string()
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error('❌ Variables de entorno inválidas:', parsedEnv.error.format())
  throw new Error('❌ Variables de entorno inválidas')
}

export const env = parsedEnv.data
