import { forwardRef, useMemo } from 'react'

import { Slot } from '@radix-ui/react-slot'

import { IconLoader } from '@/components/ui/icon'
import { Span } from '@/components/ui/span'
import { SemanticColor, SemanticShade } from '@/theme/enums'
import type { VariantProps } from '@/theme/types'
import { colorToken, semanticVariant, slotVariant } from '@/theme/utils'
import { fullWidth } from '@/theme/variants'
import { cva, cx } from 'styled-system/css'
import { styled } from 'styled-system/jsx'

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>, VariantProps<typeof button> {
  asChild?: boolean
  loadingText?: string
}

const Spinner = styled(IconLoader)

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, children, className, color, disabled, fullWidth, loading, loadingText, size, variant, ...props }, ref) => {
    const Component = useMemo(() => (asChild ? Slot : 'button'), [asChild])
    const isDisabled = useMemo(() => disabled || loading, [disabled, loading])
    const styles = useMemo(() => button({ color, fullWidth, size, variant }), [color, fullWidth, size, variant])

    return (
      <Component className={cx(styles, className)} disabled={isDisabled} ref={ref} {...props}>
        {loading ? (
          <Span d="flex" flexShrink="0" gap="1.5" placeItems="center center">
            <Spinner animation="spin" flex="none" h="1" pointerEvents="none" w="1" />
            {loadingText ? loadingText : children}
          </Span>
        ) : (
          children
        )}
      </Component>
    )
  },
)

const button = cva({
  base: {
    display: 'inline-flex',
    placeItems: 'center center',
    gap: '2',
    whiteSpace: 'nowrap',
    rounded: 'md',
    fontSize: 'sm',
    fontWeight: 'medium',
    transition: 'colors',
    cursor: 'pointer',
    _focusVisible: {
      ring: 'none',
      shadow: 'ring.2',
    },
    _active: {
      shadow: 'ring.3',
    },
    _disabled: {
      pointerEvents: 'none',
      opacity: 0.5,
    },
  },
  defaultVariants: {
    color: SemanticColor.Base,
    size: 'md',
    variant: 'solid',
  },
  variants: {
    fullWidth: slotVariant(fullWidth, ['root']),
    color: semanticVariant((color, name) => ({
      color: colorToken(['base', 'warning'].includes(name) ? 'text' : 'white'),
      _focus: {
        boxShadowColor: color(SemanticShade.Light),
      },
      __dark: {
        _focus: {
          boxShadowColor: color(SemanticShade.Darker),
        },
      },
    })),
    size: {
      xs: {
        font: 'xs',
        px: '2',
        py: '1',
      },
      sm: {
        font: 'sm',
        px: '3',
        py: '2',
      },
      md: {
        font: 'base',
        px: '5',
        py: '2.5',
      },
      lg: {
        font: 'lg',
        py: '6',
        px: '3',
      },
    },
    variant: {
      gradient: {
        bgGradient: 'to-r',
        _active: {
          bgGradient: 'to-l',
        },
      },
      outline: {
        borderWidth: '1',
        borderColor: 'colorPalette',
        color: 'text',
        _hover: {
          bg: 'gray.100',
        },
        _active: {
          bg: 'gray.200',
        },
      },
      solid: {},
      transparent: {
        bg: 'transparent',
        color: 'text',
        _hover: {
          bg: 'gray.100',
        },
        _active: {
          bg: 'gray.200',
        },
      },
    },
    loading: {
      true: {
        cursor: 'wait',
      },
    },
  },
})

export { Button, type ButtonProps }
