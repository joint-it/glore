import { forwardRef } from 'react'

import { baseVariants, cn, cva, type VariantProps } from '@/lib/cva'

export interface H3Props extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof h3Variants> {}

export const H3 = forwardRef<HTMLHeadingElement, H3Props>((props, ref) => {
  const { className, fontWeight, ...rest } = props
  return <h3 className={cn(h3Variants({ className, fontWeight }))} ref={ref} {...rest} />
})

export const h3Variants = cva('text-3xl font-bold dark:text-white', {
  defaultVariants: {
    fontWeight: 'semibold',
  },
  variants: {
    ...baseVariants(['fontWeight']),
  },
})
