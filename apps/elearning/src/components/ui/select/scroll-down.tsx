import { forwardRef } from 'react'

import * as SelectPrimitive from '@radix-ui/react-select'

import { ChevronDownIcon, type Icon } from '@/components/ui/icons'
import { cn, cva, type VariantProps, type VariantSizeBase } from '@/lib/cva'

import { SelectIcon, selectIconVariants } from './icon'

export interface SelectScrollDownProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>,
    VariantProps<typeof selectScrollDownVariants> {
  icon?: Icon
  iconSize?: VariantSizeBase
}

export const SelectScrollDown = forwardRef<
  React.ComponentRef<typeof SelectPrimitive.ScrollDownButton>,
  SelectScrollDownProps
>((props, ref) => {
  const { className, icon = ChevronDownIcon, iconSize, ...rest } = props

  return (
    <SelectPrimitive.ScrollDownButton className={cn(selectScrollDownVariants({ className }))} ref={ref} {...rest}>
      <SelectIcon className={cn(selectIconVariants({ size: iconSize }))} icon={icon} />
    </SelectPrimitive.ScrollDownButton>
  )
})

export const selectScrollDownVariants = cva('flex cursor-default items-center justify-center py-1')
