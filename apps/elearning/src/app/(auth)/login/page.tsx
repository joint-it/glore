import { LoginForm } from '@/components/blocks/login-form'
import { Flex } from '@/components/ui/flex'
import { H3 } from '@/components/ui/h3'
import { P } from '@/components/ui/p'
import { useServerTranslations } from '@/hooks/use-server-translations'

export default async () => {
  const t = await useServerTranslations('Auth')

  return (
    <Flex align="center" direction="column" gap={6}>
      <Flex align="center" className="text-center" direction="column" gap={2}>
        <H3>{t('loginTitle')}</H3>
        <P>{t('loginSubtitle')}</P>
      </Flex>
      <LoginForm />
    </Flex>
  )
}
