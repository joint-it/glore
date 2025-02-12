import { cookies } from 'next/headers'

import { type Cookie } from '@/lib/storage'
import { slug } from 'config/app.json'

const getCookie = async <T>(
  cookie: Cookie,
  initialValue?: T,
  options = {
    prefix: slug,
  },
) => {
  const key = options.prefix ? `${options.prefix}:${cookie}` : cookie
  const store = await cookies()
  const raw = store.get(key)?.value

  if (!raw) return initialValue as T

  return JSON.parse(raw) as T
}

const setCookie = async <T>(
  cookie: Cookie,
  value: T,
  options = {
    prefix: slug,
  },
) => {
  const key = options.prefix ? `${options.prefix}:${cookie}` : cookie
  const store = await cookies()
  store.set(key, JSON.stringify(value))
  return value
}

export const withCookies = () => ({
  getCookie,
  setCookie,
})
