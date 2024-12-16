import { useLocale as useNextIntlLocale, useTranslations as useNextIntlTranslations } from 'next-intl'

import { getUserLocale, setUserLocale } from '@/i18n/locale'

export const useLocale = () => {
  const locale = useNextIntlLocale()

  return {
    getLocale: getUserLocale,
    locale,
    setLocale: setUserLocale,
  }
}

export const useTranslations = useNextIntlTranslations
