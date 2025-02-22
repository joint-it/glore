import { forwardRef } from 'react'

import { cn } from '@/theme/utils'

interface H3Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const H3 = forwardRef<HTMLHeadingElement, H3Props>(({ className, ...props }, ref) => (
  <h3 className={cn('text-3xl font-bold dark:text-white', className)} ref={ref} {...props} />
))

export { H3, type H3Props }
