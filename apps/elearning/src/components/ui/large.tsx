import { forwardRef } from 'react'

import { cn, cva, type VariantProps } from '@/lib/cva'

export interface LargeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof largeVariants> {}

export const Large = forwardRef<HTMLDivElement, LargeProps>(({ className, ...props }, ref) => (
  <div className={cn(largeVariants({ className }))} ref={ref} {...props} />
))

export const largeVariants = cva('text-lg font-semibold')
