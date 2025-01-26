import { forwardRef } from 'react'

import * as SelectPrimitive from '@radix-ui/react-select'

import cva, { cn, type VariantProps } from '@/lib/cva'

export interface SelectLabelProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>,
    VariantProps<typeof selectLabelVariants> {}

const SelectLabel = forwardRef<React.ComponentRef<typeof SelectPrimitive.Label>, SelectLabelProps>((props, ref) => {
  const { className, ...rest } = props
  return <SelectPrimitive.Label className={cn(selectLabelVariants({ className }))} ref={ref} {...rest} />
})
export default SelectLabel

export const selectLabelVariants = cva('px-2 py-1.5 text-sm font-semibold')
