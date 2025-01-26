import { forwardRef } from 'react'

import * as SelectPrimitive from '@radix-ui/react-select'

import cva, { cn, type VariantProps } from '@/lib/cva'

export interface SelectSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>,
    VariantProps<typeof selectSeparatorVariants> {}

const SelectSeparator = forwardRef<React.ComponentRef<typeof SelectPrimitive.Separator>, SelectSeparatorProps>(
  (props, ref) => {
    const { className, ...rest } = props
    return <SelectPrimitive.Separator className={cn(selectSeparatorVariants({ className }))} ref={ref} {...rest} />
  },
)
export default SelectSeparator

export const selectSeparatorVariants = cva('-mx-1 my-1 h-px bg-muted')
