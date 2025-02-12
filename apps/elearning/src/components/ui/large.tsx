import { forwardRef } from 'react'

import { displayName } from '@/lib/utils'
import { cn } from '@/theme/utils'

interface LargeProps extends React.HTMLAttributes<HTMLDivElement> {}

const Large = forwardRef<HTMLDivElement, LargeProps>(({ className, ...props }, ref) => (
  <div className={cn('text-xl font-semibold', className)} ref={ref} {...props} />
))
Large.displayName = displayName('Large')

export { Large, type LargeProps }
