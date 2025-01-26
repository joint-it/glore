import { LoginForm } from '@/components/blocks'
import { box, H3, P } from '@/components/ui'
import { getTranslations } from '@/services/i18n'

export default async () => {
  const t = await getTranslations('Login')

  return (
    <box.flex direction="col" gap={8}>
      <box.flex align="center" className="text-center" direction="col" gap={2}>
        <H3 fontWeight="bold">{t('title')}</H3>
        <P>{t('subtitle')}</P>
      </box.flex>
      <LoginForm />
    </box.flex>
  )
}
