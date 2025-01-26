import { forwardRef } from 'react'

import cva, { cn, type VariantProps } from '@/lib/cva'

export interface PProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof pVariants> {}

const P = forwardRef<HTMLParagraphElement, PProps>((props, ref) => {
  const { className, ...rest } = props
  return <p className={cn(pVariants({ className }))} ref={ref} {...rest} />
})
export default P

const pVariants = cva('text-gray-500 dark:text-gray-400')
