import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

export const h3Variants = cva('scroll-m-20 text-2xl tracking-tight', {
  defaultVariants: {
    weight: 'semibold',
  },
  variants: {
    weight: {
      bold: 'font-bold',
      normal: 'font-normal',
      semibold: 'font-semibold',
    },
  },
})

export interface H3Props extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof h3Variants> {}

export const H3 = forwardRef<HTMLHeadingElement, H3Props>(({ className, ...props }, ref) => (
  <h3 className={cn(h3Variants({ className }))} ref={ref} {...props} />
))
