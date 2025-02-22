import { type MiddlewareConfig, type NextMiddleware } from 'next/server'

import { updateSession } from '@/middlewares/session'

export const middleware: NextMiddleware = async request => await updateSession(request)

export const config: MiddlewareConfig = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|site.webmanifest|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
