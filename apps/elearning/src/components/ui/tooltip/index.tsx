import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import type { TooltipProps } from '@radix-ui/react-tooltip'

import { TooltipContent } from './content'
import { TooltipTrigger } from './trigger'

const Tooltip = ({ children, ...props }: TooltipProps) => (
  <TooltipPrimitive.Provider>
    <TooltipPrimitive.Root {...props}>{children}</TooltipPrimitive.Root>
  </TooltipPrimitive.Provider>
)
Tooltip.Content = TooltipContent
Tooltip.Trigger = TooltipTrigger

export { Tooltip, type TooltipProps }
