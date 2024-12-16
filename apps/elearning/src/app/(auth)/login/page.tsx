'use client'

import { LoginForm } from '@/components/app'
import { Flex } from '@/components/layout'
import { H3, P } from '@/components/typography'
import { Form } from '@/components/ui'
import { useTranslations } from '@/hooks/use-locale'

export default () => {
  const t = useTranslations('Login')

  return (
    <Flex as={Form} direction="col" gap={6}>
      <Flex align="center" className="text-center" direction="col" gap={2}>
        <H3 weight="bold">{t('title')}</H3>
        <P muted size="sm">
          {t('subtitle')}
        </P>
      </Flex>
      <LoginForm />
    </Flex>
  )
}
