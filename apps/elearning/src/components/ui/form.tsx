'use client'

import { useCallback } from 'react'

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

const Form = (props: FormProps) => {
  const { onSubmit, ...rest } = props

  const onFormSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (onSubmit) onSubmit(e)
    },
    [onSubmit],
  )

  return <form {...rest} onSubmit={onFormSubmit} />
}

export { Form, type FormProps }
