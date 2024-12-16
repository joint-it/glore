import { forwardRef, useMemo } from 'react'

import { cn } from '@/lib/utils'

export interface PProps extends React.HTMLAttributes<HTMLParagraphElement> {
  leading?: number
  muted?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export const P = forwardRef<HTMLParagraphElement, PProps>(({ className, leading = 7, muted, size, ...props }, ref) => {
  const base = useMemo(() => {
    const classes = [`leading-${leading}`]
    if (muted) classes.push('text-muted-foreground')
    if (size) classes.push(`text-${size}`)
    return classes.join(' ')
  }, [leading, muted, size])

  return <p className={cn(base, className)} ref={ref} {...props} />
})
