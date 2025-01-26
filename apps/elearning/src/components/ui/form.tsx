'use client'

import { useCallback } from 'react'

import cva, { cn, type VariantProps } from '@/lib/cva'

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement>, VariantProps<typeof formVariants> {}

const Form = (props: FormProps) => {
  const { children, className, onSubmit, ...rest } = props

  const onFormSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (onSubmit) onSubmit(e)
    },
    [onSubmit],
  )

  return (
    <form {...rest} className={cn(formVariants({ className }))} onSubmit={onFormSubmit}>
      {children}
    </form>
  )
}
export default Form

const formVariants = cva()
