import { cn, cva, type VariantProps } from '@/lib/cva'

import { Div, type DivProps } from './div'

export interface GridProps extends DivProps, VariantProps<typeof gridVariants> {}

export const Grid = (props: GridProps) => {
  const { className, ...rest } = props
  return <Div className={cn(gridVariants({ className }))} {...rest} />
}

export const gridVariants = cva('grid')
