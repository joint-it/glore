'use client'

import { forwardRef, useCallback, useMemo, useRef, useState } from 'react'

import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import { IconEye, IconEyeClosed } from '@/components/ui/icon'
import { displayName } from '@/lib/utils'
import { type VariantProps } from '@/theme/types'
import { cn, cva } from '@/theme/utils'
import { fullWidth } from '@/theme/variants'

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'color' | 'size'>, VariantProps<typeof input> {
  label?: string | React.ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, color, fullWidth, size, type = 'text', ...props }, ref) => {
  const [inputType, setInputType] = useState(type)

  const styles = useMemo(() => input({ color, fullWidth, size }), [color, fullWidth, size])

  const InputBase = useMemo(
    () =>
      forwardRef<HTMLInputElement, InputProps>(({ type }, ref) => (
        <input className={cn(styles, className)} formNoValidate ref={ref} type={type} />
      )),
    [className, styles],
  )

  const passwordRef = useRef<HTMLInputElement>(null)
  const isPassword = useMemo(() => type === 'password', [type])
  const PasswordIcon = useMemo(() => (inputType === 'password' ? IconEyeClosed : IconEye), [inputType])

  const toggleVisibility = useCallback(() => {
    setInputType(inputType === 'password' ? 'text' : 'password')
    passwordRef.current?.focus()
  }, [inputType])

  if (isPassword) {
    return (
      <Box relative>
        <InputBase ref={passwordRef} type={inputType} {...props} />
        <Button
          className="absolute top-[50%] right-2 -translate-y-1/2 transform active:shadow-none hover:bg-transparent"
          onClick={toggleVisibility}
          size="xs"
          variant="ghost"
        >
          <PasswordIcon className="size-5" />
        </Button>
      </Box>
    )
  }

  return <InputBase ref={ref} type={type} {...props} />
})
Input.displayName = displayName('Input')

const input = cva(
  `
    block w-full rounded-lg border border-gray-300 bg-gray-50 text-base text-gray-900 transition-all
    dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400
    focus:ring-[1.2px] focus:outline-0
  `,
  {
    defaultVariants: {
      color: 'info',
      fullWidth: false,
      size: 'md',
    },
    variants: {
      fullWidth,
      color: {
        base: 'focus:border-gray-600 focus:ring-gray-500',
        primary: 'focus:border-blue-600 focus:ring-blue-500',
        secondary: 'focus:border-sky-600 focus:ring-sky-600',
        info: 'focus:border-blue-600 focus:ring-blue-500',
        success: `
          border-green-500 bg-green-50 text-green-900 placeholder-green-300
          dark:border-green-500 dark:bg-gray-700 dark:text-green-400 dark:placeholder-green-500
          focus:border-green-500 focus:ring-green-500
        `,
        warning: 'focus:border-yellow-500 focus:ring-yellow-500',
        danger: `
          border-red-500 bg-red-50 text-red-900 placeholder-red-300
          dark:border-red-500 dark:bg-gray-800 dark:text-red-400 dark:placeholder-red-400
          focus:border-red-500 focus:ring-red-500
        `,
      },
      size: {
        xs: 'p-1 ps-2 pe-2',
        sm: 'p-1 ps-2 pe-2',
        md: 'p-2',
        lg: 'p-4 ps-5 pe-5',
        xl: 'p-5 ps-6 pe-6',
      },
    },
  },
)

export { Input, type InputProps }
