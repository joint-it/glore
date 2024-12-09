import { NextResponse, type NextRequest } from 'next/server'

import { createServerClient } from '@supabase/ssr'

import Env from '@/lib/env'

export const updateSession = async (request: NextRequest) => {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(Env.SUPABASE_URL, Env.SUPABASE_ANON_KEY, {
    cookies: {
      getAll: () => request.cookies.getAll(),
      setAll: cookies => {
        for (const { name, value } of cookies) {
          request.cookies.set(name, value)
        }
        response = NextResponse.next({ request })
        for (const { name, value, options } of cookies) {
          response.cookies.set(name, value, options)
        }
      },
    },
  })

  const user = await supabase.auth.getUser()

  if (request.nextUrl.pathname.startsWith('/protected') && user.error) {
    return NextResponse.redirect(new URL('/sign-in', request.url))
  }
  if (request.nextUrl.pathname === '/' && !user.error) {
    return NextResponse.redirect(new URL('/protected', request.url))
  }

  return response
}
