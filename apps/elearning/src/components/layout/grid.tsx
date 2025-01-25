import { type VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'

import { Box } from '@/components/layout/box'
import { cn } from '@/lib/utils'

import { gridVariants } from './grid.variants'

export interface GridProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof gridVariants> {
  as?: keyof HTMLElementTagNameMap | React.ComponentType<any>
}

export const Grid = forwardRef<HTMLElement, GridProps>(({ as = Box, className, ...props }, ref) => {
  const Component = as
  return <Component className={cn(gridVariants({ className }))} ref={ref} {...props} />
})
