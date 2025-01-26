'use server'

import { cookies } from 'next/headers'

import { createServerClient } from '@supabase/ssr'

import Env from '@/lib/env'

import { type Database } from './types'

export const getDB = async (setCookiesCallback = () => {}) => {
  const cookieStore = await cookies()

  return createServerClient<Database>(Env.SUPABASE_URL, Env.SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookies) {
        for (const { name, options, value } of cookies) {
          cookieStore.set(name, value, options)
        }
        setCookiesCallback()
      },
    },
  })
}
