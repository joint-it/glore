import { forwardRef } from 'react'

import cva, { cn, type VariantProps } from '@/lib/cva'

export interface SmallProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof smallVariants> {}

const Small = forwardRef<HTMLElement, SmallProps>((props, ref) => {
  const { className, ...rest } = props
  return <small className={cn(smallVariants({ className }))} ref={ref} {...rest} />
})
export default Small

const smallVariants = cva('text-sm leading-none font-medium')
