import { cookies } from 'next/headers'

import { Cookie } from '@/lib/storage'
import { type Locale } from '@/services/i18n'
import config from 'config/i18n.json'

const getLocale = async () => {
  const store = await cookies()
  return (store.get(Cookie.Locale)?.value || config.defaultLocale) as Locale
}

const setLocale = async (locale: Locale) => {
  const cookieStore = await cookies()
  cookieStore.set(Cookie.Locale, locale)
}

export const withLocale = async () => {
  const locale = await getLocale()
  return [locale, setLocale] as [Locale, (locale: Locale) => Promise<void>]
}
