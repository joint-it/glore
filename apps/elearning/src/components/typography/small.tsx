import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

export interface SmallProps extends React.HTMLAttributes<HTMLElement> {}

export const Small = forwardRef<HTMLElement, SmallProps>(({ className, ...props }, ref) => (
  <small className={cn('text-sm leading-none font-medium', className)} ref={ref} {...props} />
))
