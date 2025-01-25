'use client'

import { useLocale as useNextIntlLocale } from 'next-intl'

import { getLocale, setLocale } from '@/services/i18n'

export const useLocale = () => {
  const locale = useNextIntlLocale()
  return { getLocale, locale, setLocale }
}
