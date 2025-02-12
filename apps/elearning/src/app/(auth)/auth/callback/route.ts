import { NextResponse } from 'next/server'

import { withDB } from '@/hooks/with-db'

export const GET = async (request: Request) => {
  const { origin, searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const redirectTo = searchParams.get('redirect_to')?.toString()

  if (code) {
    const { auth } = await withDB()
    await auth.exchangeCodeForSession(code)
  }

  if (redirectTo) {
    return NextResponse.redirect(`${origin}${redirectTo}`)
  }

  return NextResponse.redirect(origin)
}
