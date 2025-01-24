'use client'

import { useFormStatus } from 'react-dom'

import { Button, type ButtonProps } from '@/components/ui/button'

export interface SubmitProps extends ButtonProps {
  pendingText?: string
}

export const Submit = ({ children, pendingText = 'Submitting...', ...props }: SubmitProps) => {
  const { pending } = useFormStatus()

  return (
    <Button aria-disabled={pending} disabled={pending} type="submit" {...props}>
      {pending ? pendingText : children}
    </Button>
  )
}
