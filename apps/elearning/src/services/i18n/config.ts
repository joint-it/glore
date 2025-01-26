export const LOCALES = ['en', 'it'] as const
export const DEFAULT_LOCALE: Locale = 'en'

export type Locale = (typeof LOCALES)[number]
