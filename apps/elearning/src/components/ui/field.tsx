import { forwardRef, useMemo } from 'react'

import { Input, type InputProps } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { P } from '@/components/ui/p'
import { displayName } from '@/lib/utils'
import { SemanticColor, Sizing } from '@/theme/enums'
import type { VariantProps } from '@/theme/types'
import { cn, cva } from '@/theme/utils'
import { fullWidth } from '@/theme/variants'

interface FieldProps extends Omit<InputProps, 'fullWidth'>, VariantProps<typeof field> {
  color?: SemanticColor
  id: string
  label?: React.ReactNode
  message?: React.ReactNode
  size?: Sizing
}

const Field = forwardRef<HTMLInputElement, FieldProps>(
  ({ className, color = SemanticColor.Base, fullWidth, id, label, message, size = Sizing.Md, ...props }, ref) => {
    const styles = useMemo(() => field({ fullWidth }), [fullWidth])
    const labelColor = useMemo(() => (['success', 'warning', 'danger'].includes(color) ? color : undefined), [color])

    return (
      <div className={cn(styles, className)}>
        {label && (
          <Label className="mb-2" color={labelColor} htmlFor={id} size={size}>
            {label}
          </Label>
        )}
        <Input color={color} fullWidth={fullWidth} id={id} ref={ref} size={size} {...props} />
        {message && (
          <P className="mt-1" color={labelColor} size={size}>
            {message}
          </P>
        )}
      </div>
    )
  },
)
Field.displayName = displayName('Field')

const field = cva('block', {
  defaultVariants: {
    fullWidth: true,
  },
  variants: {
    fullWidth,
  },
})

export { Field, type FieldProps }
