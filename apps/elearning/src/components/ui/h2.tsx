import { forwardRef } from 'react'

import { cn } from '@/theme/utils'

interface H2Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const H2 = forwardRef<HTMLHeadingElement, H2Props>(({ className, ...props }, ref) => (
  <h2 className={cn('text-4xl font-bold dark:text-white', className)} ref={ref} {...props} />
))

export { H2, type H2Props }
