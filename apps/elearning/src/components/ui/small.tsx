import { forwardRef } from 'react'

import { cn, cva, type VariantProps } from '@/lib/cva'

export interface SmallProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof smallVariants> {}

export const Small = forwardRef<HTMLElement, SmallProps>((props, ref) => {
  const { className, ...rest } = props
  return <small className={cn(smallVariants({ className }))} ref={ref} {...rest} />
})

export const smallVariants = cva('text-sm leading-none font-medium')
