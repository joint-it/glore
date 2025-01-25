import { NextResponse, type MiddlewareConfig, type NextMiddleware } from 'next/server'

import { updateSession } from '@/services/db'

const PUBLIC_PAGES = ['/login', '/forgot-password', '/reset-password']

export const middleware: NextMiddleware = async request => {
  if (PUBLIC_PAGES.includes(request.nextUrl.pathname)) return NextResponse.next({ request })
  return await updateSession(request)
}

export const config: MiddlewareConfig = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|site.webmanifest|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
