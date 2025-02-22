import { forwardRef, useMemo } from 'react'

import { type VariantProps } from '@/theme/types'
import { cn, cva } from '@/theme/utils'

interface PProps extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'color'>, VariantProps<typeof p> {}

const P = forwardRef<HTMLParagraphElement, PProps>(({ className, color, ...props }, ref) => {
  const styles = useMemo(() => p({ color }), [color])
  return <p className={cn(styles, className)} ref={ref} {...props} />
})

const p = cva('text-gray-900 dark:text-gray-50', {
  variants: {
    color: {
      failure: 'text-red-500 dark:text-red-400',
      info: 'text-blue-500 dark:text-blue-400',
      success: 'text-green-500 dark:text-green-400',
      warning: 'text-yellow-500 dark:text-yellow-400',
      gray: 'text-gray-500 dark:text-gray-400',
    },
  },
})

export { P, type PProps }
