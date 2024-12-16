import { NextResponse } from 'next/server'

import { createClient } from '@/db/server'

export const GET = async (request: Request) => {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const origin = requestUrl.origin
  const redirectTo = requestUrl.searchParams.get('redirect_to')?.toString()

  if (code) {
    const db = await createClient()
    await db.auth.exchangeCodeForSession(code)
  }

  if (redirectTo) {
    return NextResponse.redirect(`${origin}${redirectTo}`)
  }

  return NextResponse.redirect(`${origin}/protected`)
}
