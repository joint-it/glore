import cva, { cn, type VariantProps } from '@/lib/cva'

import Div, { type DivProps } from './div'

export interface GridProps extends DivProps, VariantProps<typeof gridVariants> {}

const Grid = (props: GridProps) => {
  const { className, ...rest } = props
  return <Div className={cn(gridVariants({ className }))} {...rest} />
}
export default Grid

export const gridVariants = cva('grid')
