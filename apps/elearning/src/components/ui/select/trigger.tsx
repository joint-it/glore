import { forwardRef } from 'react'

import * as SelectPrimitive from '@radix-ui/react-select'

import { ChevronDownIcon, type Icon } from '@/components/ui/icons'
import cva, { cn, type VariantProps } from '@/lib/cva'
import type { SizeBase } from '@/lib/types'

import SelectIcon from './icon'

export interface SelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>,
    VariantProps<typeof selectTriggerVariants> {
  icon?: Icon
  iconSize?: SizeBase
}

const SelectTrigger = forwardRef<React.ComponentRef<typeof SelectPrimitive.Trigger>, SelectTriggerProps>(
  (props, ref) => {
    const { children, className, icon = ChevronDownIcon, iconSize, ...rest } = props

    return (
      <SelectPrimitive.Trigger className={cn(selectTriggerVariants({ className }))} ref={ref} {...rest}>
        {children}
        <SelectPrimitive.Icon asChild>
          <SelectIcon className="opacity-50" icon={icon} size={iconSize} />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
    )
  },
)
export default SelectTrigger

export const selectTriggerVariants = cva(
  'flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs ring-offset-background placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
)
