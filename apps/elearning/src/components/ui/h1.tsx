import { forwardRef } from 'react'

import { cn } from '@/theme/utils'

interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const H1 = forwardRef<HTMLHeadingElement, H1Props>(({ className, ...props }, ref) => (
  <h1
    className={cn(
      'mb-4 text-4xl leading-none font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white',
      className,
    )}
    ref={ref}
    {...props}
  />
))

export { H1, type H1Props }
