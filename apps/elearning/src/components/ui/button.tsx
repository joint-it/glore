import { type VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'

import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'

import { buttonVariants } from './button.variants'

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, color, fullWidth, size, variant, ...props }, ref) => {
    const Component = asChild ? Slot : 'button'
    return (
      <Component className={cn(buttonVariants({ className, color, fullWidth, size, variant }))} ref={ref} {...props} />
    )
  },
)
