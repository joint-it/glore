import { getRequestConfig } from 'next-intl/server'

import { type AnyObject } from '@joint-it/utils'

import { withLocale } from '@/hooks/with-locale'
import type { locales } from 'config/i18n.json'
import type en from 'config/translations/en.json'

declare global {
  type IntlMessages = typeof en
}

export type Locale = keyof typeof locales

export default getRequestConfig(async () => {
  const [locale] = await withLocale()
  const messages = (
    (await import(`config/translations/${locale}.json`)) as {
      default: AnyObject
    }
  ).default

  return { locale, messages }
})
