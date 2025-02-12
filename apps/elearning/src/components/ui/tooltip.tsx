import { forwardRef } from 'react'

import {
  Content,
  Portal,
  Provider,
  Root,
  Trigger,
  type TooltipContentProps,
  type TooltipProps,
  type TooltipTriggerProps,
} from '@radix-ui/react-tooltip'

import { displayName } from '@/lib/utils'
import { cn } from '@/theme/utils'

const Tooltip = (props: TooltipProps) => (
  <Provider>
    <Root {...props} />
  </Provider>
)
Tooltip.displayName = displayName('Tooltip')

const TooltipContent = forwardRef<React.ComponentRef<typeof Content>, TooltipContentProps>(
  ({ className, sideOffset = 4, ...props }, ref) => (
    <Portal>
      <Content
        className={cn(`z-50 overflow-hidden rounded-sm bg-primary px-3 py-1.5 text-xs text-accent-foreground`, className)}
        ref={ref}
        sideOffset={sideOffset}
        {...props}
      />
    </Portal>
  ),
)
TooltipContent.displayName = displayName('TooltipContent')

const TooltipTrigger = forwardRef<React.ComponentRef<typeof Trigger>, TooltipTriggerProps>(({ children, ...props }, ref) => (
  <Trigger ref={ref} {...props}>
    {children}
  </Trigger>
))
TooltipTrigger.displayName = displayName('TooltipTrigger')

export { Tooltip, TooltipContent, TooltipTrigger, type TooltipProps, type TooltipContentProps, type TooltipTriggerProps }
