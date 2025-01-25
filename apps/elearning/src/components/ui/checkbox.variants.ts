import { cva } from 'class-variance-authority'

export const checkboxVariants = cva(
  [
    'w-4',
    'h-4',
    'bg-gray-100',
    'border-gray-300',
    'rounded-sm',
    'cursor-pointer',
    'dark:ring-offset-gray-800',
    'focus:ring-2',
    'dark:bg-gray-700',
    'dark:border-gray-600',
    'ring-offset-1',
    'border',
    'active:outline-1',
    'active:ring-offset-0',
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
        secondary: ['text-secondary', 'focus:ring-secondary-light', 'dark:focus:ring-secondary'],
        success: ['text-green-600', 'focus:ring-green-500', 'dark:focus:ring-green-600'],
        warning: ['text-yellow-400', 'focus:ring-yellow-500', 'dark:focus:ring-yellow-600'],
      },
    },
  },
)
