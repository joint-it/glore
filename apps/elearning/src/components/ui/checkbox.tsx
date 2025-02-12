import { forwardRef, useCallback, useMemo, type InputHTMLAttributes } from 'react'

import { Flex } from '@/components/ui/flex'
import { Label } from '@/components/ui/label'
import { displayName } from '@/lib/utils'
import type { VariantProps } from '@/theme/types'
import { cn, cva } from '@/theme/utils'

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'color'>, VariantProps<typeof checkbox> {
  label?: React.ReactNode
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ className, color, id, label, ...props }, ref) => {
  const input = useMemo(() => checkbox({ color }), [color])

  const onKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      event.currentTarget.click()
    }
  }, [])

  const InputBase = useMemo(
    () => <input className={cn(input, className)} id={id} onKeyDown={onKeyDown} ref={ref} {...props} type="checkbox" />,
    [className, id, onKeyDown, props, ref, input],
  )

  return label ? (
    <Flex align="center">
      {InputBase}
      <Label className="ml-2" htmlFor={id}>
        {label}
      </Label>
    </Flex>
  ) : (
    InputBase
  )
})
Checkbox.displayName = displayName('Checkbox')

const checkbox = cva(
  `
    h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-gray-100 ring-offset-1 outline-none
    active:ring-offset-0 active:outline-1
    dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800
  `,
  {
    defaultVariants: {
      color: 'primary',
    },
    variants: {
      color: {
        base: 'text-gray-900 dark:focus:ring-gray-600 focus:ring-gray-300',
        danger: 'text-red-600 dark:focus:ring-red-600 focus:ring-red-500',
        info: 'text-blue-600 dark:focus:ring-blue-600 focus:ring-blue-500',
        primary: 'text-primary focus:ring-primary',
        secondary: 'text-sky-600 dark:focus:ring-sky-600 focus:ring-sky-600',
        success: 'text-green-600 dark:focus:ring-green-600 focus:ring-green-500',
        warning: 'text-yellow-400 dark:focus:ring-yellow-600 focus:ring-yellow-500',
      },
    },
  },
)

export { Checkbox, type CheckboxProps }
