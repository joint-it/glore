'use client'

import { redirect } from 'next/navigation'
import { useCallback, useRef, useState } from 'react'

import { box, Button, Checkbox, Field, Form, Link, type InputProps } from '@/components/ui'
import { useDB } from '@/hooks/use-db'
import { useTranslations } from '@/hooks/use-translations'
import { isEmail, isUsername } from '@/lib/utils'

export const LoginForm = () => {
  const db = useDB()
  const t = useTranslations('Auth')

  const userRef = useRef<HTMLInputElement>(null)
  const [user, setUser] = useState('')
  const [userError, setUserError] = useState('')
  const [userColor, setUserColor] = useState<InputProps['color']>('secondary')

  const passwordRef = useRef<HTMLInputElement>(null)
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [passwordColor, setPasswordColor] = useState<InputProps['color']>('secondary')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onUserChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value)
    setUserError('')
    setUserColor('secondary')
  }, [])

  const onPasswordChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
    setPasswordError('')
    setPasswordColor('secondary')
  }, [])

  const triggerUserError = useCallback((error: string) => {
    setUserColor('danger')
    setUserError(error)
    userRef.current?.focus()
    setIsSubmitting(false)
  }, [])

  const triggerPasswordError = useCallback((error: string) => {
    setPasswordColor('danger')
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
      email: profile.email,
      password,
    })

    if (error) {
      triggerPasswordError(t('passwordInvalid'))
      return
    }

    redirect('/')
  }, [db, password, t, triggerPasswordError, triggerUserError, user])

  return (
    <Form className="grid w-sm max-w-sm gap-2" onSubmit={onSubmit}>
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
      <box.flex align="center" className="mb-2" justify="between">
        <Checkbox color="secondary" id="rememberMe" label={t('rememberMe')} />
        <Link href="/">{t('forgotPassword')}</Link>
      </box.flex>
      <Button color="info" fontWeight="medium" fullWidth loading={isSubmitting} type="submit" variant="gradient">
        {t('login')}
      </Button>
    </Form>
  )
}
