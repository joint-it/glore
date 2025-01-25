'use server'

import { cookies } from 'next/headers'

import { getTranslations as getNextIntlTranslations } from 'next-intl/server'

import { DEFAULT_LOCALE, type Locale } from './config'

const COOKIE_NAME = 'NEXT_LOCALE'

export const getLocale = async () => {
  const cookieStore = await cookies()
  return cookieStore.get(COOKIE_NAME)?.value || DEFAULT_LOCALE
}

export const setLocale = async (locale: Locale) => {
  const cookieStore = await cookies()
  cookieStore.set(COOKIE_NAME, locale)
}

export const getTranslations = getNextIntlTranslations
