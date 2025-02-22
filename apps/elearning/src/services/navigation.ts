import { headers } from 'next/headers'

export const getPathname = async () => {
  const headersList = await headers()
  const headerUrl = headersList.get('x-url')
  if (!headerUrl) return '/'
  return new URL(headerUrl).pathname
}
