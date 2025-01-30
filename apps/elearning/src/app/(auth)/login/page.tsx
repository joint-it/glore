import { LoginForm } from '@/components/blocks'
import { box, H3, P } from '@/components/ui'
import { getTranslations } from '@/services/i18n'

export default async () => {
  const t = await getTranslations('Auth')

  return (
    <box.flex align="center" direction="col" gap={6}>
      <box.flex align="center" className="text-center" direction="col" gap={2}>
        <H3 fontWeight="bold">{t('loginTitle')}</H3>
        <P>{t('loginSubtitle')}</P>
      </box.flex>
      <LoginForm />
    </box.flex>
  )
}
