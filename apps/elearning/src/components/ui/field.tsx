import { forwardRef } from 'react'

import cva, { baseVariants, cn, type VariantProps } from '@/lib/cva'

import box from './box'
import Input, { type InputProps } from './input'
import Label from './label'

export interface FieldProps extends Omit<InputProps, 'size'>, VariantProps<typeof fieldVariants> {
  id: string
  label?: React.ReactNode
  message?: React.ReactNode
}

const Field = forwardRef<HTMLInputElement, FieldProps>((props, ref) => {
  const { className, fullWidth, gap, id, label, message, size, ...rest } = props

  return (
    <box.div className={cn(fieldVariants({ className, fullWidth, gap, size }))}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input fullWidth={fullWidth} id={id} ref={ref} size={size} {...rest} />
      {message && <p className="text-sm text-gray-500">{message}</p>}
    </box.div>
  )
})
export default Field

const fieldVariants = cva([], {
  variants: {
    ...baseVariants(['fullWidth', 'gap']),
    size: {
      lg: ['gap-4', 'text-lg'],
      md: ['gap-3', 'text-base'],
      sm: ['gap-2', 'text-sm'],
      xl: ['gap-5', 'text-xl'],
      xs: ['gap-1', 'text-xs'],
    },
  },
})
