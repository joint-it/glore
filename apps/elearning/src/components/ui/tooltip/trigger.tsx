import { forwardRef } from 'react'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'

export const TooltipTrigger = forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>
>(({ children, ...props }, ref) => (
  <TooltipPrimitive.Trigger ref={ref} {...props}>
    {children}
  </TooltipPrimitive.Trigger>
))
