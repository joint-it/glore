'use client'

import { useCallback, useRef, useState } from 'react'

import { box, Button, Checkbox, Field, Form, Input, Label, Link, type InputProps } from '@/components/ui'
import { useDB } from '@/hooks/use-db'
import { useTranslations } from '@/hooks/use-translations'
import { isValidEmail } from '@/lib/utils'

export interface LoginFormProps {}

const LoginForm = () => {
  const db = useDB()
  const t = useTranslations('Login')

  const userRef = useRef<HTMLInputElement>(null)
  const [user, setUser] = useState('')
  const [userError, setUserError] = useState('')
  const [userColor, setUserVariant] = useState<InputProps['color']>('secondary')
  const passwordRef = useRef<HTMLInputElement>(null)
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [passwordVariant, setPasswordVariant] = useState<InputProps['color']>('secondary')

  const [userDisabled, setUserDisabled] = useState(false)
  const [showPasswordInput, setShowPasswordInput] = useState(false)

  const onContinue = useCallback(async () => {
    setUserDisabled(true)
    if (!isValidEmail(user)) {
      setUserVariant('danger')
      setUserError(user ? t('userRequired') : t('userInvalid'))
      return
    }
    const { data } = await db.from('profiles').select().or(`email.eq.${user},username.eq.${user}`).single()
    console.log(data)
  }, [user, setUserError, setUserVariant, t])

  return (
    <Form className="grid gap-6">
      <box.grid gap={4}>
        <Field
          color={userColor}
          disabled={userDisabled}
          gap={4}
          id="user"
          label="Email or username"
          message={userError}
          placeholder="me@example.com"
          ref={userRef}
        />
        {!showPasswordInput && (
          <Button className="font-medium" color="info" fullWidth onClick={onContinue}>
            {'Continue'}
          </Button>
        )}
      </box.grid>
      {showPasswordInput && (
        <box.grid gap={2}>
          <box.flex align="center">
            <Label htmlFor="password">{'Password'}</Label>
            <Link className="ml-auto text-sm" href="#">
              {t('forgotPassword')}
            </Link>
          </box.flex>
          <Input formNoValidate id="password" type="password" variant="secondary" />
          <box.flex className="mt-1 mb-1">
            <Checkbox color="secondary" id="rememberMe" />
            <Label className="ml-2" htmlFor="rememberMe">
              {t('rememberMe')}
            </Label>
          </box.flex>
          <Button className="font-medium" fullWidth type="submit" variant="gradient">
            {t('login')}
          </Button>
        </box.grid>
      )}
    </Form>
  )
}
export default LoginForm
