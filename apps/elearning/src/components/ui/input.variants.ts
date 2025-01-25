import { cva } from 'class-variance-authority'

export const inputVariants = cva(
  [
    'block',
    'text-gray-900',
    'border',
    'border-gray-300',
    'rounded-lg',
    'bg-gray-50',
    'text-base',
    'dark:bg-gray-800',
    'dark:border-gray-600',
    'dark:placeholder-gray-400',
    'dark:text-white',
    'focus:outline-0',
    'focus:ring-1',
  ],
  {
    defaultVariants: {
      fullWidth: false,
      size: 'md',
      variant: 'info',
    },
    variants: {
      fullWidth: {
        false: null,
        true: 'w-full',
      },
      size: {
        lg: 'p-4 ps-5 pe-5',
        md: 'p-2 ps-3 pe-3',
        sm: 'p-1 ps-2 pe-2',
      },
      variant: {
        danger: ['focus:ring-red-500', 'focus-visible:border-red-500', 'focus:border-red-500'],
        info: ['focus:ring-blue-500', 'focus:border-blue-600'],
        primary: ['focus:ring-primary', 'focus:border-primary'],
        secondary: ['focus:ring-secondary', 'focus:border-secondary'],
        success: ['focus:ring-green-500', 'focus:border-green-500'],
        warning: ['focus:ring-yellow-500', 'focus:border-yellow-500'],
      },
    },
  },
)
