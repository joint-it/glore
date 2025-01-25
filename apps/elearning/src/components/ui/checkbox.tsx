import { type VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

import { checkboxVariants } from './checkbox.variants'

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'color' | 'type'>,
    VariantProps<typeof checkboxVariants> {}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ className, color, ...props }, ref) => (
  <input className={cn(checkboxVariants({ className, color }))} ref={ref} {...props} type="checkbox" />
))
