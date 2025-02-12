'use client'

import { useCookie } from '@/hooks/use-cookies'
import { Cookie } from '@/lib/storage'

export const useLocale = () => useCookie(Cookie.Locale)
