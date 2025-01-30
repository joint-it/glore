import { forwardRef } from 'react'

import { cn, cva, type VariantProps } from '@/lib/cva'

export interface LeadProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof leadVariants> {}

export const Lead = forwardRef<HTMLParagraphElement, LeadProps>(({ className, ...props }, ref) => (
  <p className={cn(leadVariants({ className }))} ref={ref} {...props} />
))

export const leadVariants = cva('text-xl text-muted-foreground')
