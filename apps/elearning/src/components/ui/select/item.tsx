import * as SelectPrimitive from '@radix-ui/react-select'

import { CheckIcon } from '@/components/ui/icons'
import { cn, cva, type VariantProps } from '@/lib/cva'

export interface SelectItemProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>,
    VariantProps<typeof selectItemVariants> {}

export const SelectItem = (props: SelectItemProps) => {
  const { children, className, ...rest } = props

  return (
    <SelectPrimitive.Item className={cn(selectItemVariants({ className }))} {...rest}>
      <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="h-4 w-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

const selectItemVariants = cva(
  'relative flex w-full cursor-default items-center rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50',
)
