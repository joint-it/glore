import { forwardRef, useMemo } from 'react'

import { P } from '@/components/ui/p'
import { baseVariants, cn, cva, type VariantProps } from '@/lib/cva'
import { decreaseVariantSize } from '@/lib/utils'

import { box } from './box'
import { Input, type InputProps } from './input'
import { Label } from './label'

export interface FieldProps extends InputProps, VariantProps<typeof fieldVariants> {
  id: string
  label?: React.ReactNode
  message?: React.ReactNode
}

export const Field = forwardRef<HTMLInputElement, FieldProps>((props, ref) => {
  const { className, color, fullWidth, gap, id, label, message, size, ...rest } = props

  const labelColor = useMemo(
    () => (['success', 'warning', 'danger'].includes(color || '') ? color : undefined),
    [color],
  )

  return (
    <box.div className={cn(fieldVariants({ className, fullWidth, gap }))}>
      {label && (
        <Label className="mb-2" color={labelColor} htmlFor={id} size={size}>
          {label}
        </Label>
      )}
      <Input color={color} fullWidth={fullWidth} id={id} ref={ref} size={size} {...rest} />
      {message && (
        <P className="mt-1" color={labelColor} size={decreaseVariantSize(size || 'md')}>
          {message}
        </P>
      )}
    </box.div>
  )
})

export const fieldVariants = cva([], {
  defaultVariants: {
    gap: 2,
  },
  variants: {
    ...baseVariants(['fullWidth', 'gap']),
  },
})
