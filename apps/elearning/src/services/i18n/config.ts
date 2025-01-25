export type Locale = (typeof LOCALES)[number]

export const LOCALES = ['en', 'it'] as const
export const DEFAULT_LOCALE: Locale = 'en'
