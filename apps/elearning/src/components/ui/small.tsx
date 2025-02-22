import { forwardRef } from 'react'

import { cn } from '@/theme/utils'

interface SmallProps extends React.HTMLAttributes<HTMLElement> {}

const Small = forwardRef<HTMLElement, SmallProps>(({ className, ...props }, ref) => (
  <small className={cn('text-sm leading-none font-medium', className)} ref={ref} {...props} />
))

export { Small, type SmallProps }
