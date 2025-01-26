import { forwardRef, type InputHTMLAttributes } from 'react'

import cva, { cn, type VariantProps } from '@/lib/cva'

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'color'>,
    VariantProps<typeof checkboxVariants> {}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ className, color, ...props }, ref) => (
  <input className={cn(checkboxVariants({ className, color }))} ref={ref} {...props} type="checkbox" />
))
export default Checkbox

const checkboxVariants = cva(
  [
    ['w-4', 'h-4', 'bg-gray-100', 'border-gray-300', 'ring-offset-1', 'border', 'rounded-sm', 'cursor-pointer'],
    ['focus:ring-2', 'active:outline-1', 'active:ring-offset-0'],
    ['dark:ring-offset-gray-800', 'dark:bg-gray-700', 'dark:border-gray-600'],
  ],
  {
    defaultVariants: {
      color: 'primary',
    },
    variants: {
      color: {
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
