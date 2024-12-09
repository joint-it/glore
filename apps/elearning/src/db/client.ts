import { cookies } from 'next/headers'

import { createBrowserClient, createServerClient } from '@supabase/ssr'

import Env from '@/lib/env'

export const browserClient = () => createBrowserClient(Env.SUPABASE_URL, Env.SUPABASE_ANON_KEY)

export const serverClient = async () => {
  const cookieStore = await cookies()

  return createServerClient(Env.SUPABASE_URL, Env.SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookies) {
        for (const { name, value, options } of cookies) {
          cookieStore.set(name, value, options)
        }
      },
    },
  })
}
