import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

export interface LeadProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const Lead = forwardRef<HTMLParagraphElement, LeadProps>(({ className, ...props }, ref) => (
  <p className={cn('text-xl text-muted-foreground', className)} ref={ref} {...props} />
))
