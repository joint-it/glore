import { forwardRef, useCallback, type InputHTMLAttributes } from 'react'

import { cn, cva, type VariantProps } from '@/lib/cva'

import { box } from './box'
import { Label } from './label'

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'color'>,
    VariantProps<typeof checkboxVariants> {
  label?: React.ReactNode
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { className, color, id, label, ...rest } = props

  const onKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      event.currentTarget.click()
    }
  }, [])

  const InputBase = (
    <input
      className={cn(checkboxVariants({ className, color }))}
      id={id}
      onKeyDown={onKeyDown}
      ref={ref}
      {...rest}
      type="checkbox"
    />
  )

  return label ? (
    <box.flex align="center">
      {InputBase}
      <Label className="ml-2" htmlFor={id}>
        {label}
      </Label>
    </box.flex>
  ) : (
    InputBase
  )
})

export const checkboxVariants = cva(
  [
    [
      'w-4',
      'h-4',
      'bg-gray-100',
      'border-gray-300',
      'ring-offset-1',
      'outline-none',
      'border',
      'rounded-sm',
      'cursor-pointer',
    ],
    ['focus:ring-2', 'active:outline-1', 'active:ring-offset-0'],
    ['dark:ring-offset-gray-800', 'dark:bg-gray-700', 'dark:border-gray-600'],
  ],
  {
    defaultVariants: {
      color: 'primary',
    },
    variants: {
      color: {
        base: ['text-gray-900', 'focus:ring-gray-300', 'dark:focus:ring-gray-600'],
        danger: ['text-red-600', 'focus:ring-red-500', 'dark:focus:ring-red-600'],
        info: ['text-blue-600', 'focus:ring-blue-500', 'dark:focus:ring-blue-600'],
        primary: ['text-primary', 'focus:ring-primary-light', 'dark:focus:ring-primary'],
        secondary: ['text-sky-600', 'focus:ring-sky-600', 'dark:focus:ring-sky-600'],
        success: ['text-green-600', 'focus:ring-green-500', 'dark:focus:ring-green-600'],
        warning: ['text-yellow-400', 'focus:ring-yellow-500', 'dark:focus:ring-yellow-600'],
      },
    },
  },
)
