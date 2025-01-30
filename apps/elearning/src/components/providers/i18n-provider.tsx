import { NextIntlClientProvider } from 'next-intl'

export type I18nProviderProps = Parameters<typeof NextIntlClientProvider>[0]

export const I18nProvider = (props: I18nProviderProps) => <NextIntlClientProvider {...props} />
