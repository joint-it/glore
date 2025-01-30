import { forwardRef } from 'react'

import * as LabelPrimitive from '@radix-ui/react-label'

import { BASE_VARIANTS, cn, cva, type VariantProps } from '@/lib/cva'

export interface LabelProps
  extends Omit<React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>, 'color'>,
    VariantProps<typeof labelVariants> {}

export const Label = forwardRef<React.ComponentRef<typeof LabelPrimitive.Root>, LabelProps>((props, ref) => {
  const { className, color, size, weight, ...rest } = props
  return <LabelPrimitive.Root className={cn(labelVariants({ className, color, size, weight }))} ref={ref} {...rest} />
})

export const labelVariants = cva(
  'inline-block cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  {
    defaultVariants: {
      color: 'base',
      size: 'sm',
      weight: 'medium',
    },
    variants: {
      color: BASE_VARIANTS.textColor,
      size: BASE_VARIANTS.textSize,
      weight: BASE_VARIANTS.fontWeight,
    },
  },
)
