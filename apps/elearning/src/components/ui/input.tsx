'use client'

import { forwardRef, useCallback, useMemo, useRef, useState } from 'react'

import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import { IconEye, IconEyeClosed } from '@/components/ui/icon'
import { SemanticColor, SemanticShade, Sizing } from '@/theme/enums'
import { type VariantProps } from '@/theme/types'
import { semanticSlotVariant, sizingSlotVariant, slotVariant } from '@/theme/utils'
import { fullWidth } from '@/theme/variants'
import { cx, sva } from 'styled-system/css'

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'color' | 'size'>, VariantProps<typeof input> {
  label?: string | React.ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, color, fullWidth, size, type = 'text', ...props }, ref) => {
  const [inputType, setInputType] = useState(type)

  const styles = useMemo(() => input({ color, fullWidth, size }), [color, fullWidth, size])
  const InputBase = useMemo(
    () =>
      forwardRef<HTMLInputElement, InputProps>(({ type }, ref) => (
        <input className={cx(styles.input, className)} formNoValidate ref={ref} type={type} />
      )),
    [styles, className],
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
        <Button className={styles.password} onClick={toggleVisibility} size="xs">
          <PasswordIcon />
        </Button>
      </Box>
    )
  }

  return <InputBase ref={ref} type={type} {...props} />
})

const input = sva({
  slots: ['input', 'password'],
  base: {
    input: {
      display: 'block',
      color: 'text',
      borderWidth: '1',
      borderColor: 'gray.300',
      borderRadius: 'md',
      bg: 'gray.50',
      transition: 'all',
      _focus: {
        outline: 'none',
        boxShadow: 'ring.1',
      },
      __dark: {
        bg: 'gray.800',
        borderColor: 'gray.600',
        color: 'white',
        _placeholder: {
          color: 'gray.400',
        },
      },
    },
    password: {
      color: 'gray.500',
      position: 'absolute',
      top: '[50%]',
      right: '2',
      transform: '-translate-y-1/2',
      '&:svg': {
        size: '[5px]',
        flexShrink: '0',
      },
    },
  },
  defaultVariants: {
    color: SemanticColor.Info,
    size: Sizing.Md,
  },
  variants: {
    fullWidth: slotVariant(fullWidth, ['input']),
    color: semanticSlotVariant(color => ({
      input: {
        backgroundColor: color(SemanticShade.Lightest),
        borderColor: color(),
        color: color(SemanticShade.Darkest),
        _placeholder: {
          color: color(SemanticShade.Light),
        },
        _focus: {
          borderColor: color(),
          boxShadowColor: color(),
        },
        __dark: {
          backgroundColor: color(SemanticShade.Dark),
          borderColor: color(),
          color: color(SemanticShade.Lighter),
          _placeholder: {
            color: color(),
          },
        },
      },
    })),
    size: sizingSlotVariant({
      xs: {
        input: {
          padding: '1',
          ps: '2',
          pe: '2',
        },
      },
      sm: {
        input: {
          padding: '1',
          ps: '2',
          pe: '2',
        },
      },
      md: {
        input: {
          padding: '2',
        },
      },
      lg: {
        input: {
          padding: '4',
          ps: '5',
          pe: '5',
        },
      },
      xl: {
        input: {
          padding: '5',
          ps: '6',
          pe: '6',
        },
      },
    }),
  },
})

export { Input, type InputProps }
