import { forwardRef, useMemo } from 'react'

import { Label as LabelBase, type LabelProps as LabelBaseProps } from '@radix-ui/react-label'

import { displayName } from '@/lib/utils'
import { type VariantProps } from '@/theme/types'
import { cn, cva } from '@/theme/utils'
import { fontWeight, textColor, textSize } from '@/theme/variants'

interface LabelProps extends Omit<LabelBaseProps, 'color'>, VariantProps<typeof label> {}

const Label = forwardRef<React.ComponentRef<typeof LabelBase>, LabelProps>(
  ({ className, color, size, weight, ...props }, ref) => {
    const styles = useMemo(() => label({ color, size, weight }), [color, size, weight])
    return <LabelBase className={cn(styles, className)} ref={ref} {...props} />
  },
)
Label.displayName = displayName('Label')

const label = cva(`inline-block cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`, {
  defaultVariants: {
    color: 'base',
    size: 'sm',
    weight: 'medium',
  },
  variants: {
    color: textColor,
    size: textSize,
    weight: fontWeight,
  },
})

export { Label, type LabelProps }
