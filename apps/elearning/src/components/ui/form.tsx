'use client'

import { useCallback } from 'react'

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

export const Form = (props: FormProps) => {
  const { children, onSubmit, ...rest } = props

  const onFormSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (onSubmit) onSubmit(e)
    },
    [onSubmit],
  )

  return (
    <form {...rest} onSubmit={onFormSubmit}>
      {children}
    </form>
  )
}
