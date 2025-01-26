import { forwardRef } from 'react'

import cva, { cn, type VariantProps } from '@/lib/cva'

export interface LeadProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof leadVariants> {}

const Lead = forwardRef<HTMLParagraphElement, LeadProps>(({ className, ...props }, ref) => (
  <p className={cn(leadVariants({ className }))} ref={ref} {...props} />
))
export default Lead

const leadVariants = cva('text-xl text-muted-foreground')
