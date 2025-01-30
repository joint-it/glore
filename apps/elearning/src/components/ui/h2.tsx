import { forwardRef } from 'react'

import { cn, cva, type VariantProps } from '@/lib/cva'

export interface H2Props extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof h2Variants> {}

export const H2 = forwardRef<HTMLHeadingElement, H2Props>(({ className, ...props }, ref) => (
  <h2 className={cn(h2Variants({ className }))} ref={ref} {...props} />
))

export const h2Variants = cva('text-4xl font-bold dark:text-white')
