import { forwardRef } from 'react'

import { displayName } from '@/lib/utils'
import { cn } from '@/theme/utils'

interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const H1 = forwardRef<HTMLHeadingElement, H1Props>(({ className, ...props }, ref) => (
  <h1 className={cn('text-5xl font-extrabold', className)} ref={ref} {...props} />
))
H1.displayName = displayName('H1')

export { H1, type H1Props }
