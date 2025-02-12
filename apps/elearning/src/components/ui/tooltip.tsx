import { forwardRef } from 'react'

import {
  Content,
  Portal,
  Root,
  TooltipProvider,
  Trigger,
  type TooltipContentProps,
  type TooltipProps,
  type TooltipTriggerProps,
} from '@radix-ui/react-tooltip'

import { css, cx } from 'styled-system/css'

const Tooltip = (props: TooltipProps) => (
  <TooltipProvider>
    <Root {...props} />
  </TooltipProvider>
)

const TooltipContent = forwardRef<React.ComponentRef<typeof Content>, TooltipContentProps>(
  ({ className, sideOffset = 4, ...props }, ref) => (
    <Portal>
      <Content className={cx(tooltip.content, className)} ref={ref} sideOffset={sideOffset} {...props} />
    </Portal>
  ),
)

const TooltipTrigger = forwardRef<React.ComponentRef<typeof Trigger>, TooltipTriggerProps>(({ children, ...props }, ref) => (
  <Trigger ref={ref} {...props}>
    {children}
  </Trigger>
))

const tooltip = {
  content: css({
    background: 'primary',
    borderRadius: 'md',
    color: 'text',
    fontSize: 'xs',
    overflow: 'hidden',
    paddingBlock: '1.5',
    paddingInline: '3',
    zIndex: 50,
  }),
}

export { Tooltip, TooltipContent, TooltipTrigger, type TooltipProps, type TooltipContentProps, type TooltipTriggerProps }
