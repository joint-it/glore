'use server'

import { cookies } from 'next/headers'

import { createServerClient } from '@supabase/ssr'

import Env from '@/lib/env'

export const getDB = async (setCookiesCallback = () => {}) => {
  const cookieStore = await cookies()

  return createServerClient(Env.SUPABASE_URL, Env.SUPABASE_ANON_KEY, {
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
