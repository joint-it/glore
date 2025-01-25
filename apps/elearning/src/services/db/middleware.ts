import { NextResponse, type NextRequest } from 'next/server'

import { getDB } from './hooks'

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

    return error ? NextResponse.redirect(new URL('/login', request.url)) : response
  } catch {
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    })
  }
}
