'use client'

import { redirect } from 'next/navigation'
import { useCallback, useRef, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Field } from '@/components/ui/field'
import { Flex } from '@/components/ui/flex'
import { Form } from '@/components/ui/form'
import { Link } from '@/components/ui/link'
import { useDB } from '@/hooks/use-db'
import { useTranslations } from '@/hooks/use-translations'
import { displayName } from '@/lib/utils'
import { isEmail, isUsername } from '@/lib/validation'
import { SemanticColor } from '@/theme/enums'

interface LoginFormProps {}

const LoginForm = () => {
  const db = useDB()
  const t = useTranslations('Auth')

  const userRef = useRef<HTMLInputElement>(null)
  const [user, setUser] = useState('')
  const [userError, setUserError] = useState('')
  const [userColor, setUserColor] = useState<SemanticColor>(SemanticColor.Secondary)

  const passwordRef = useRef<HTMLInputElement>(null)
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [passwordColor, setPasswordColor] = useState<SemanticColor>(SemanticColor.Secondary)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onUserChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value)
    setUserError('')
    setUserColor(SemanticColor.Secondary)
  }, [])

  const onPasswordChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
    setPasswordError('')
    setPasswordColor(SemanticColor.Secondary)
  }, [])

  const triggerUserError = useCallback((error: string) => {
    setUserColor(SemanticColor.Danger)
    setUserError(error)
    userRef.current?.focus()
    setIsSubmitting(false)
  }, [])

  const triggerPasswordError = useCallback((error: string) => {
    setPasswordColor(SemanticColor.Danger)
    setPasswordError(error)
    passwordRef.current?.focus()
    setIsSubmitting(false)
  }, [])

  const onSubmit = useCallback(async () => {
    setIsSubmitting(true)

    if (!isEmail(user) && !isUsername(user)) {
      const error = user ? t('userInvalid') : t('userRequired')
      triggerUserError(error)
      return
    }

    const { data: profile } = await db.from('profiles').select().or(`email.eq.${user},username.eq.${user}`).single()

    if (!profile) {
      triggerUserError(t('userNotFound'))
      return
    }
    if (!password) {
      triggerPasswordError(t('passwordRequired'))
      return
    }

    const { error } = await db.auth.signInWithPassword({
      email: profile.email as string,
      password,
    })

    if (error) {
      triggerPasswordError(t('passwordInvalid'))
      return
    }

    redirect('/')
  }, [db, password, t, triggerPasswordError, triggerUserError, user])

  return (
    <Form className="grid w-sm max-w-sm gap-2" onSubmit={void onSubmit}>
      <Field
        color={userColor}
        id="user"
        label={t('userLabel')}
        message={userError}
        onChange={onUserChange}
        placeholder="me@example.com"
        ref={userRef}
      />
      <Field
        color={passwordColor}
        id="password"
        label={t('passwordLabel')}
        message={passwordError}
        onChange={onPasswordChange}
        ref={passwordRef}
        type="password"
      />
      <Flex align="center" className="mb-2" justify="between">
        <Checkbox color="secondary" id="rememberMe" label={t('rememberMe')} />
        <Link href="/">{t('forgotPassword')}</Link>
      </Flex>
      <Button color="info" fontWeight="medium" fullWidth loading={isSubmitting} type="submit" variant="gradient">
        {t('login')}
      </Button>
    </Form>
  )
}
LoginForm.displayName = displayName('LoginForm')

export { LoginForm, type LoginFormProps }
