import { forwardRef } from 'react'

import cva, { cn, type VariantProps } from '@/lib/cva'

export interface LargeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof largeVariants> {}

const Large = forwardRef<HTMLDivElement, LargeProps>(({ className, ...props }, ref) => (
  <div className={cn(largeVariants({ className }))} ref={ref} {...props} />
))
export default Large

const largeVariants = cva('text-lg font-semibold')
