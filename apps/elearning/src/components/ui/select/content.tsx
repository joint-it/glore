import { forwardRef } from 'react'

import * as SelectPrimitive from '@radix-ui/react-select'

import cva, { cn, type VariantProps } from '@/lib/cva'

import SelectScrollUp from './scroll-up'

export interface SelectContentProps
  extends Omit<React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>, 'position'>,
    VariantProps<typeof selectContentVariants> {}

const SelectContent = forwardRef<React.ComponentRef<typeof SelectPrimitive.Content>, SelectContentProps>(
  (props, ref) => {
    const { children, className, position = 'popper', ...rest } = props

    return (
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          className={cn(selectContentVariants({ className, position }))}
          position={position || undefined}
          ref={ref}
          {...rest}
        >
          <SelectScrollUp />
          <SelectPrimitive.Viewport className={cn(selectViewportVariants({ position }))}>
            {children}
          </SelectPrimitive.Viewport>
          <SelectScrollUp />
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    )
  },
)
export default SelectContent

export const selectContentVariants = cva(
  'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
  {
    defaultVariants: {
      position: 'popper',
    },
    variants: {
      position: {
        'item-aligned': null,
        popper:
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
      },
    },
  },
)

const selectViewportVariants = cva('p-1', {
  defaultVariants: {
    position: 'popper',
  },
  variants: {
    position: {
      'item-aligned': null,
      popper: 'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
    },
  },
})
