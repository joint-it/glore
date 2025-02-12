import { getRequestConfig } from 'next-intl/server'

import { useServerLocale } from '@/hooks/use-server-locale'
import type { locales } from 'config/i18n.json'
import type en from 'config/translations/en.json'

export type Locale = keyof typeof locales

declare global {
  type IntlMessages = typeof en
}

export default getRequestConfig(async () => {
  const [locale] = await useServerLocale()
  const messages = (await import(`config/translations/${locale}.json`)).default

  return { locale, messages }
})
