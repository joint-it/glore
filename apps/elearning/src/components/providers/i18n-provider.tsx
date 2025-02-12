import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import { displayName } from '@/lib/utils'

type I18nProviderProps = Parameters<typeof NextIntlClientProvider>[0]

const I18nProvider = async (props: I18nProviderProps) => <NextIntlClientProvider messages={await getMessages()} {...props} />
I18nProvider.displayName = displayName('I18nProvider')

export { I18nProvider, type I18nProviderProps }
