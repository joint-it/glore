import { type VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

import { inputVariants } from './input.variants'

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  label?: string | React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, size, variant, ...props }, ref) => (
  <input className={cn(inputVariants({ className, size, variant }))} ref={ref} {...props} />
))
