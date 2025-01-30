import { NextResponse, type NextRequest } from 'next/server'

import { getDB } from './server'

const AUTH_PAGES = ['/login', '/signup', '/reset-password']

const isAuthPage = (request: NextRequest) => AUTH_PAGES.includes(request.nextUrl.pathname)

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

    if (error && !isAuthPage(request)) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    if (isAuthPage(request)) {
      return NextResponse.redirect(new URL('/', request.url))
    }

    return response
  } catch {
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    })
  }
}
