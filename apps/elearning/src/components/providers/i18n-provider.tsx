import { NextIntlClientProvider } from 'next-intl'

export type I18nProviderProps = Parameters<typeof NextIntlClientProvider>[0]

const I18nProvider = (props: I18nProviderProps) => <NextIntlClientProvider {...props} />
export default I18nProvider
