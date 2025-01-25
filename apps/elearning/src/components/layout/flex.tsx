import { type VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'

import { Box } from '@/components/layout/box'
import { cn } from '@/lib/utils'

import { flexVariants } from './flex.variants'

export interface FlexProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof flexVariants> {
  as?: keyof HTMLElementTagNameMap | React.ComponentType<any>
}

export const Flex = forwardRef<HTMLElement, FlexProps>(
  ({ align, as = Box, className, direction, grow, justify, ...props }, ref) => {
    const Component = as
    return (
      <Component className={cn(flexVariants({ align, className, direction, grow, justify }))} ref={ref} {...props} />
    )
  },
)
