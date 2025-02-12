import { forwardRef, useMemo } from 'react'

import { Slot } from '@radix-ui/react-slot'

import { IconLoader } from '@/components/ui/icon'
import { displayName } from '@/lib/utils'
import type { VariantProps } from '@/theme/types'
import { cn, cva } from '@/theme/utils'
import { fontWeight, fullWidth } from '@/theme/variants'

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>, VariantProps<typeof button> {
  asChild?: boolean
  loading?: boolean
  loadingText?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, children, className, color, disabled, fullWidth, loading, loadingText, size, variant, ...props }, ref) => {
    const Component = useMemo(() => (asChild ? Slot : 'button'), [asChild])
    const isDisabled = useMemo(() => disabled || loading, [disabled, loading])
    const styles = useMemo(() => button({ color, fullWidth, size, variant }), [color, fullWidth, size, variant])

    return (
      <Component className={cn(styles, className)} disabled={isDisabled} ref={ref} {...props}>
        {loading ? (
          <span className="flex items-center gap-1.5">
            <IconLoader className="pointer-events-none size-4 shrink-0 animate-spin" />
            {loadingText ? loadingText : children}
          </span>
        ) : (
          children
        )}
      </Component>
    )
  },
)
Button.displayName = displayName('Button')

const button = cva(
  `
    inline-flex cursor-pointer items-center justify-center rounded-lg text-white transition-colors
    active:ring-3
    disabled:pointer-events-none disabled:opacity-50
    focus:ring-2 focus:outline-none
  `,
  {
    defaultVariants: {
      color: 'info',
      fullWidth: false,
      size: 'md',
      variant: 'solid',
    },
    variants: {
      fontWeight,
      fullWidth,
      color: {
        base: 'dark:focus:ring-gray-800 focus:ring-gray-300',
        primary: 'dark:focus:ring-blue-800 focus:ring-blue-300',
        secondary: 'dark:focus:ring-sky-800 focus:ring-sky-300',
        info: 'dark:focus:ring-blue-800 focus:ring-blue-300',
        success: 'dark:focus:ring-green-800 focus:ring-green-300',
        warning: 'dark:focus:ring-yellow-900 focus:ring-yellow-300',
        danger: 'dark:focus:ring-red-900 focus:ring-red-300',
      },
      size: {
        xs: 'px-3 py-2 text-xs',
        sm: 'px-3 py-2 text-sm',
        md: 'px-5 py-2.5 text-sm',
        lg: 'px-5 py-3 text-base',
        xl: 'px-6 py-3.5 text-base',
        icon: 'p-2',
      },
      variant: {
        gradient: 'bg-gradient-to-r hover:bg-gradient-to-br',
        solid: null,
        ghost: `
          border-transparent bg-transparent text-gray-900 shadow-none
          dark:text-gray-50 dark:hover:bg-gray-800/80
          disabled:text-gray-400 disabled:dark:text-gray-600
          hover:bg-gray-100
        `,
      },
    },
    compoundVariants: [
      {
        className: 'bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 hover:bg-red-800',
        color: 'danger',
        variant: 'solid',
      },
      {
        className: 'from-red-400 via-red-500 to-red-600',
        color: 'danger',
        variant: 'gradient',
      },
      {
        className: 'bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 hover:bg-blue-800',
        color: 'info',
        variant: 'solid',
      },
      {
        className: 'from-blue-500 via-blue-600 to-blue-700 dark:from-blue-600 dark:via-blue-700 dark:to-blue-800',
        color: 'info',
        variant: 'gradient',
      },
      {
        className: 'bg-sky-500 dark:bg-sky-400 dark:hover:bg-sky-500 hover:bg-sky-600',
        color: 'secondary',
        variant: 'solid',
      },
      {
        className: 'from-sky-400 via-sky-500 to-sky-600',
        color: 'secondary',
        variant: 'gradient',
      },
      {
        className: 'bg-green-600 dark:bg-green-500 dark:hover:bg-green-600 hover:bg-green-700',
        color: 'success',
        variant: 'solid',
      },
      {
        className: 'from-green-400 via-green-500 to-green-600',
        color: 'success',
        variant: 'gradient',
      },
      {
        className: 'bg-yellow-400 dark:bg-yellow-300 dark:hover:bg-yellow-400 hover:bg-yellow-500',
        color: 'warning',
        variant: 'solid',
      },
      {
        className: 'from-yellow-400 via-yellow-500 to-yellow-600',
        color: 'warning',
        variant: 'gradient',
      },
    ],
  },
)

export { Button, type ButtonProps }
