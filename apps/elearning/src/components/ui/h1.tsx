import { forwardRef } from 'react'

import { cn, cva, type VariantProps } from '@/lib/cva'

export interface H1Props extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof h1Variants> {}

export const H1 = forwardRef<HTMLHeadingElement, H1Props>(({ className, ...props }, ref) => (
  <h1 className={cn(h1Variants({ className }))} ref={ref} {...props} />
))

export const h1Variants = cva('text-5xl font-extrabold dark:text-white')
