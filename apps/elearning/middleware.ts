import { type MiddlewareConfig, type NextMiddleware } from 'next/server'

import { updateSession } from '@/db/middleware'

export const middleware: NextMiddleware = async request => await updateSession(request)

export const config: MiddlewareConfig = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}
