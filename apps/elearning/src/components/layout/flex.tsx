import { forwardRef, useMemo } from 'react'

import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

export const flexVariants = cva('flex', {
  variants: {
    align: {
      baseline: 'items-baseline',
      center: 'items-center',
      end: 'items-end',
      start: 'items-start',
      stretch: 'items-stretch',
    },
    direction: {
      col: 'flex-col',
      'col-reverse': 'flex-col-reverse',
      row: 'flex-row',
      'row-reverse': 'flex-row-reverse',
    },
    justify: {
      around: 'justify-around',
      between: 'justify-between',
      center: 'justify-center',
      evenly: 'justify-evenly',
      normal: 'justify-normal',
      start: 'justify-start',
      stretch: 'justify-stretch',
    },
    variant: {
      center: 'items-center justify-center',
      end: 'items-end justify-end',
      start: 'items-start justify-start',
    },
  },
})

export interface FlexProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof flexVariants> {
  as?: keyof HTMLElementTagNameMap | React.ComponentType<any>
  gap?: number
  grow?: boolean
}

export const Flex = forwardRef<HTMLElement, FlexProps>(
  ({ align, as = 'div', className, direction, gap, grow, justify, ...props }, ref) => {
    const base = useMemo(() => {
      const classes = ['flex']
      if (gap) classes.push(`gap-${gap}`)
      if (grow !== undefined) classes.push(grow ? 'grow' : 'grow-0')
      return classes.join(' ')
    }, [gap, grow])

    const Component = as

    return (
      <Component className={cn(base, flexVariants({ align, direction, justify }), className)} ref={ref} {...props} />
    )
  },
)
