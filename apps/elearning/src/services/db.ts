import { cookies } from 'next/headers'

import { Env } from '@/lib/env'
import { createServerClient } from '@supabase/ssr'
import type { User } from '@supabase/supabase-js'
import type { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient'
import type { Database, Tables } from 'supabase/types'

export type { Database, User }

export interface AuthClient extends SupabaseAuthClient {}

export interface Profile extends Tables<'profiles'> {
  name?: string
}

export const getDB = async (
  callback = () => {
    /**/
  },
) => {
  const cookieStore = await cookies()

  return createServerClient<Database>(Env.SUPABASE_URL, Env.SUPABASE_ANON_KEY, {
    cookies: {
      getAll: () => cookieStore.getAll(),
      setAll: cookies => {
        for (const { name, options, value } of cookies) {
          cookieStore.set(name, value, options)
        }
        callback()
      },
    },
  })
}
