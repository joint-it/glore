export type Locale = keyof typeof LOCALES

export const LOCALES = {
  en: {
    name: 'English',
    flag: '🌐',
  },
  it: {
    name: 'Italiano',
    flag: '🇮🇹',
  },
  es: {
    name: 'Español',
    flag: '🇪🇸',
  },
} as const

export const DEFAULT_LOCALE = Object.keys(LOCALES)[0]
