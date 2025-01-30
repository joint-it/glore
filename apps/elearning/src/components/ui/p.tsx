import { forwardRef } from 'react'

import { BASE_VARIANTS, cn, cva, type VariantProps } from '@/lib/cva'

export interface PProps
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'color'>,
    VariantProps<typeof pVariants> {}

export const P = forwardRef<HTMLParagraphElement, PProps>((props, ref) => {
  const { className, color, size, ...rest } = props
  return <p className={cn(pVariants({ className, color, size }))} ref={ref} {...rest} />
})

export const pVariants = cva('', {
  defaultVariants: {
    color: 'base',
  },
  variants: {
    color: BASE_VARIANTS.textColor,
    size: BASE_VARIANTS.textSize,
  },
})
