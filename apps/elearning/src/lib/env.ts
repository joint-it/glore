import { env } from '@repo/utils'

/**
 * Environment variables of the application.
 */
const Env = {
  SUPABASE_URL: env('NEXT_PUBLIC_SUPABASE_URL'),
  SUPABASE_ANON_KEY: env('NEXT_PUBLIC_SUPABASE_ANON_KEY'),
}

export default Env
