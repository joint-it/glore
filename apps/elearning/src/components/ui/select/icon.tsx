import { forwardRef } from 'react'

import { type Icon } from '@/components/ui/icons'
import { cn, cva, type VariantProps, type VariantSizeBase } from '@/lib/cva'

export interface SelectIconProps extends React.ComponentPropsWithoutRef<Icon>, VariantProps<typeof selectIconVariants> {
  className?: string
  icon: Icon
  size?: VariantSizeBase
}

export const SelectIcon = forwardRef<React.ComponentRef<Icon>, SelectIconProps>((props, ref) => {
  const { className, icon: IconComponent, size, ...rest } = props
  return <IconComponent className={cn(selectIconVariants({ className, size }))} ref={ref} {...rest} />
})

export const selectIconVariants = cva('', {
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: 'h-2 w-2',
      md: 'h-4 w-4',
      lg: 'h-6 w-6',
    },
  },
})
