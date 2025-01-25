import { LoginForm } from '@/components/app'
import { Flex } from '@/components/layout'
import { H3, P } from '@/components/typography'
import { getTranslations } from '@/services/i18n'

export default async () => {
  const t = await getTranslations('Login')

  return (
    <Flex className="gap-6" direction="col">
      <Flex align="center" className="gap-2 text-center" direction="col">
        <H3 weight="bold">{t('title')}</H3>
        <P muted size="sm">
          {t('subtitle')}
        </P>
      </Flex>
      <LoginForm />
    </Flex>
  )
}
