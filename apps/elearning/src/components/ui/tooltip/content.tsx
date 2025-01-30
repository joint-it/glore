import { forwardRef } from 'react'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { cva, type VariantProps } from '@/lib/cva'

export interface TooltipContentProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
    VariantProps<typeof tooltipContentVariants> {}

export const TooltipContent = forwardRef<React.ComponentRef<typeof TooltipPrimitive.Content>, TooltipContentProps>(
  (props, ref) => {
    const { className, sideOffset = 4, ...rest } = props

    return (
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          className={tooltipContentVariants({ className })}
          ref={ref}
          sideOffset={sideOffset}
          {...rest}
        />
      </TooltipPrimitive.Portal>
    )
  },
)

export const tooltipContentVariants = cva(
  'text-primary-foreground z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
)
