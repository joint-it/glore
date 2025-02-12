import { forwardRef } from 'react'

import { displayName } from '@/lib/utils'
import { cn } from '@/theme/utils'

interface LeadProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const Lead = forwardRef<HTMLParagraphElement, LeadProps>(({ className, ...props }, ref) => (
  <p className={cn('text-xl text-muted', className)} ref={ref} {...props} />
))
Lead.displayName = displayName('Lead')

export { Lead, type LeadProps }
