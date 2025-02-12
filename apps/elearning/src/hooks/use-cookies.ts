'use client'

import { useCallback, useMemo } from 'react'

import cookies from 'browser-cookies'

import { type Cookie } from '@/lib/storage'

export type UseCookie = [string | undefined, (value: string) => void, () => void]

export const useCookie = (cookie: Cookie): UseCookie => {
  const value = useMemo(() => cookies.get(cookie) || undefined, [cookie])

  const setCookie = useCallback(
    (value: string) => {
      cookies.set(cookie, value)
    },
    [cookie],
  )

  const removeCookie = useCallback(() => {
    cookies.erase(cookie)
  }, [cookie])

  return [value, setCookie, removeCookie]
}
