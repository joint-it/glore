import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

type I18nProviderProps = Parameters<typeof NextIntlClientProvider>[0]

const I18nProvider = async (props: I18nProviderProps) => <NextIntlClientProvider messages={await getMessages()} {...props} />

export { I18nProvider, type I18nProviderProps }
