import { forwardRef } from 'react'

import cva, { cn, type VariantProps } from '@/lib/cva'

export interface H4Props extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof h4Variants> {}

const H4 = forwardRef<HTMLHeadingElement, H4Props>(({ className, ...props }, ref) => (
  <h4 className={cn(h4Variants({ className }))} ref={ref} {...props} />
))
export default H4

const h4Variants = cva('text-xl font-semibold tracking-tight')
