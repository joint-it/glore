import { getRequestConfig } from 'next-intl/server'

import { getLocale } from './server'

export default getRequestConfig(async () => {
  const locale = await getLocale()

  return {
    locale,
    messages: (await import(`#/translations/${locale}.json`)).default,
  }
})
