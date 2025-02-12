import { forwardRef, useMemo } from 'react'

import { displayName } from '@/lib/utils'
import { type VariantProps } from '@/theme/types'
import { cn, cva } from '@/theme/utils'
import { textColor, textSize } from '@/theme/variants'

interface PProps extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'color'>, VariantProps<typeof p> {}

const P = forwardRef<HTMLParagraphElement, PProps>(({ className, color, ...props }, ref) => {
  const styles = useMemo(() => p({ color }), [color])
  return <p className={cn(styles, className)} ref={ref} {...props} />
})
P.displayName = displayName('P')

const p = cva([], {
  variants: {
    color: textColor,
    size: textSize,
  },
})

export { P, type PProps }
