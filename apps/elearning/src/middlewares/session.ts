import { NextResponse, type NextRequest } from 'next/server'

import { getDB } from '@/services/db'

export enum AuthPage {
  Login = '/login',
  Signup = '/signup',
  ResetPassword = '/reset-password',
}

export const updateSession = async (request: NextRequest) => {
  try {
    let response = NextResponse.next({
      request: {
        headers: request.headers,
      },
    })

    const db = await getDB(() => {
      response = NextResponse.next({ request })
    })

    const { error } = await db.auth.getUser()

    const isAuthPage = Object.values(AuthPage).includes(request.nextUrl.pathname as AuthPage)

    if (error) {
      return isAuthPage ? response : NextResponse.redirect(new URL('/login', request.url))
    }

    return isAuthPage ? NextResponse.redirect(new URL('/', request.url)) : response
  } catch {
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    })
  }
}
