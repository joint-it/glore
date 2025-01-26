import { forwardRef, type ButtonHTMLAttributes } from 'react'

import { Slot } from '@radix-ui/react-slot'

import cva, { baseVariants, cn, type VariantProps } from '@/lib/cva'

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, color, fullWidth, size, variant, ...props }, ref) => {
    const Component = asChild ? Slot : 'button'
    return (
      <Component className={cn(buttonVariants({ className, color, fullWidth, size, variant }))} ref={ref} {...props} />
    )
  },
)
export default Button

const buttonVariants = cva(
  [
    ['inline-flex', 'cursor-pointer', 'items-center', 'justify-center', 'rounded-lg', 'transition-colors'],
    ['focus:outline-none', 'focus:ring-2', 'active:ring-3'],
    ['disabled:pointer-events-none', 'disabled:opacity-50'],
    ['[&_svg]:pointer-events-none', '[&_svg]:size-4', '[&_svg]:shrink-0'],
  ],
  {
    compoundVariants: [
      {
        className: [
          ['bg-red-700', 'hover:bg-red-800'],
          ['dark:bg-red-600', 'dark:hover:bg-red-700'],
        ],
        color: 'danger',
        variant: 'solid',
      },
      {
        className: ['from-red-400', 'via-red-500', 'to-red-600'],
        color: 'danger',
        variant: 'gradient',
      },
      {
        className: [
          ['bg-blue-700', 'hover:bg-blue-800'],
          ['dark:bg-blue-600', 'dark:hover:bg-blue-700'],
        ],
        color: 'info',
        variant: 'solid',
      },
      {
        className: [
          ['from-blue-500', 'via-blue-600', 'to-blue-700'],
          ['dark:from-blue-600', 'dark:via-blue-700', 'dark:to-blue-800'],
        ],
        color: 'info',
        variant: 'gradient',
      },
      {
        className: [
          ['bg-sky-500', 'hover:bg-sky-600'],
          ['dark:bg-sky-400', 'dark:hover:bg-sky-500'],
        ],
        color: 'secondary',
        variant: 'solid',
      },
      {
        className: ['from-sky-400', 'via-sky-500', 'to-sky-600'],
        color: 'secondary',
        variant: 'gradient',
      },
      {
        className: [
          ['bg-green-600', 'hover:bg-green-700'],
          ['dark:bg-green-500', 'dark:hover:bg-green-600'],
        ],
        color: 'success',
        variant: 'solid',
      },
      {
        className: ['from-green-400', 'via-green-500', 'to-green-600'],
        color: 'success',
        variant: 'gradient',
      },
      {
        className: [
          ['bg-yellow-400', 'hover:bg-yellow-500'],
          ['dark:bg-yellow-300', 'dark:hover:bg-yellow-400'],
        ],
        color: 'warning',
        variant: 'solid',
      },
      {
        className: ['from-yellow-400', 'via-yellow-500', 'to-yellow-600'],
        color: 'warning',
        variant: 'gradient',
      },
    ],
    defaultVariants: {
      color: 'info',
      fullWidth: false,
      size: 'md',
      variant: 'solid',
    },
    variants: {
      ...baseVariants(['fullWidth']),
      color: {
        danger: ['text-white', 'focus:ring-red-300', 'dark:focus:ring-red-900'],
        info: ['text-white', 'focus:ring-blue-300', 'dark:focus:ring-blue-800'],
        primary: ['text-white', 'focus:ring-blue-300', 'dark:focus:ring-blue-800'],
        secondary: ['text-white', 'focus:ring-sky-300', 'dark:focus:ring-sky-800'],
        success: ['text-white', 'focus:ring-green-300', 'dark:focus:ring-green-800'],
        warning: ['text-white', 'focus:ring-yellow-300', 'dark:focus:ring-yellow-900'],
      },
      size: {
        icon: ['p-2'],
        lg: ['px-5 py-3', 'text-base'],
        md: ['px-5 py-2.5', 'text-sm'],
        sm: ['px-3 py-2', 'text-sm'],
        xl: ['px-6 py-3.5', 'text-base'],
        xs: ['px-3 py-2', 'text-xs'],
      },
      variant: {
        gradient: ['bg-gradient-to-r', 'hover:bg-gradient-to-br'],
        solid: null,
        transparent: ['bg-transparent', 'focus:ring-0', 'active:ring-0'],
      },
    },
  },
)
