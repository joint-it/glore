import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

export const boxVariants = cva('', {
  variants: {
    fullWidth: {
      true: 'w-full',
    },
    relative: {
      true: 'relative',
    },
  },
})

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof boxVariants> {}

export const Box = forwardRef<HTMLDivElement, BoxProps>(({ className, fullWidth, relative, ...props }, ref) => (
  <div className={cn(boxVariants({ className, fullWidth, relative }))} ref={ref} {...props} />
))
