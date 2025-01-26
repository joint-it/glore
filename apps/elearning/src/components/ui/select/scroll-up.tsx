import { forwardRef } from 'react'

import * as SelectPrimitive from '@radix-ui/react-select'

import { ChevronUpIcon, type Icon } from '@/components/ui/icons'
import cva, { cn, type VariantProps } from '@/lib/cva'
import type { SizeBase } from '@/lib/types'

import SelectIcon, { selectIconVariants } from './icon'

export interface SelectScrollUpProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>,
    VariantProps<typeof selectScrollUpVariants> {
  icon?: Icon
  iconSize?: SizeBase
}

const SelectScrollUp = forwardRef<React.ComponentRef<typeof SelectPrimitive.ScrollUpButton>, SelectScrollUpProps>(
  (props, ref) => {
    const { className, icon = ChevronUpIcon, iconSize, ...rest } = props

    return (
      <SelectPrimitive.ScrollUpButton className={cn(selectScrollUpVariants({ className }))} ref={ref} {...rest}>
        <SelectIcon className={cn(selectIconVariants({ size: iconSize }))} icon={icon} />
      </SelectPrimitive.ScrollUpButton>
    )
  },
)
export default SelectScrollUp

export const selectScrollUpVariants = cva('flex cursor-default items-center justify-center py-1')
