'use client'

import { useLocale as useNextIntlLocale } from 'next-intl'

import { setLocale, type Locale } from '@/services/i18n'

export const useLocale = () => {
  const locale = useNextIntlLocale()
  return [locale, setLocale] as [Locale, (locale: Locale) => Promise<void>]
}
