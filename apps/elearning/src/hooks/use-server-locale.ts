'use server'

import { cookies } from 'next/headers'

import { Cookie } from '@/lib/storage'
import { type Locale } from '@/services/i18n'
import { defaultLocale } from 'config/i18n.json'

const getLocale = async () => {
  const store = await cookies()
  return (store.get(Cookie.Locale)?.value || defaultLocale) as Locale
}

const setLocale = async (locale: Locale) => {
  const cookieStore = await cookies()
  cookieStore.set(Cookie.Locale, locale)
}

export const useServerLocale = async () => [await getLocale(), setLocale] as [Locale, typeof setLocale]
