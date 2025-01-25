import { type Redirect } from 'next'
import { NextResponse } from 'next/server'

import { getDB } from '@/services/db'

export const GET = async (request: Request) => {
  const { origin, searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const redirectTo = searchParams.get('redirect_to')?.toString()

  if (code) {
    const { auth } = await getDB()
    await auth.exchangeCodeForSession(code)
  }

  if (redirectTo) {
    return NextResponse.redirect(`${origin}${redirectTo}`)
  }

  return NextResponse<Redirect>
}
