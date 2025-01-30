'use client'

import { forwardRef, useCallback, useMemo, useRef, useState } from 'react'

import { baseVariants, cn, cva, type VariantProps } from '@/lib/cva'

import { box } from './box'
import { Button } from './button'
import { EyeClosedIcon, EyeIcon } from './icons'

export const InputBase = forwardRef<HTMLInputElement, InputProps>(
  ({ className, color, fullWidth, size, ...props }, ref) => (
    <input className={cn(inputVariants({ className, color, fullWidth, size }))} formNoValidate ref={ref} {...props} />
  ),
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'color' | 'size'>,
    VariantProps<typeof inputVariants> {
  label?: string | React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
  const { type = 'text', ...rest } = props

  const passwordRef = useRef<HTMLInputElement>(null)
  const [inputType, setInputType] = useState(type)

  const isPassword = useMemo(() => type === 'password', [type])

  const PasswordIcon = useMemo(() => (inputType === 'password' ? EyeClosedIcon : EyeIcon), [inputType])

  const toggleVisibility = useCallback(() => {
    setInputType(inputType === 'password' ? 'text' : 'password')
    passwordRef.current?.focus()
  }, [inputType])

  if (isPassword) {
    return (
      <box.div relative>
        <InputBase ref={passwordRef} type={inputType} {...rest} />
        <Button
          className="text-gray absolute top-[50%] right-2 -translate-y-1/2 transform"
          onClick={toggleVisibility}
          size="icon"
          variant="transparent"
        >
          <PasswordIcon className="size-5 shrink-0" />
        </Button>
      </box.div>
    )
  }

  return <InputBase ref={ref} type={type} {...rest} />
})

export const inputVariants = cva(
  [
    [
      'block',
      'w-full',
      'text-gray-900',
      'border',
      'border-gray-300',
      'rounded-lg',
      'bg-gray-50',
      'text-base',
      'transition-all',
    ],
    ['focus:outline-0', 'focus:ring-[1.2px]'],
    ['dark:bg-gray-800', 'dark:border-gray-600', 'dark:placeholder-gray-400', 'dark:text-white'],
  ],
  {
    defaultVariants: {
      color: 'info',
      fullWidth: false,
      size: 'md',
    },
    variants: {
      ...baseVariants(['fullWidth']),
      color: {
        base: ['focus:ring-gray-500', 'focus:border-gray-600'],
        primary: ['focus:ring-blue-500', 'focus:border-blue-600'],
        secondary: ['focus:ring-sky-600', 'focus:border-sky-600'],
        info: ['focus:ring-blue-500', 'focus:border-blue-600'],
        success: [
          ['bg-green-50', 'border-green-500', 'text-green-900', 'placeholder-green-300'],
          ['focus:ring-green-500', 'focus:border-green-500'],
          ['dark:bg-gray-700', 'dark:text-green-400', 'dark:placeholder-green-500', 'dark:border-green-500'],
        ],
        warning: ['focus:ring-yellow-500', 'focus:border-yellow-500'],
        danger: [
          ['bg-red-50', 'border-red-500', 'text-red-900', 'placeholder-red-300'],
          ['focus:ring-red-500', 'focus:border-red-500'],
          ['dark:bg-gray-800', 'dark:text-red-400', 'dark:placeholder-red-400', 'dark:border-red-500'],
        ],
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
