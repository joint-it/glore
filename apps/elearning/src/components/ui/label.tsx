import { forwardRef } from 'react'

import * as LabelPrimitive from '@radix-ui/react-label'

import { SemanticColor, SemanticShade, type Sizing } from '@/theme/enums'
import { type VariantProps } from '@/theme/types'
import { semanticVariant } from '@/theme/utils'
import { css, cva, cx } from 'styled-system/css'

interface LabelProps
  extends Omit<React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>, 'color'>,
    VariantProps<typeof label> {
  size?: Sizing
}

const Label = forwardRef<React.ComponentRef<typeof LabelPrimitive.Root>, LabelProps>(
  ({ className, color, size, ...props }, ref) => (
    <LabelPrimitive.Root className={cx(css({ textStyle: size }), label({ color }), className)} ref={ref} {...props} />
  ),
)

const label = cva({
  base: {
    display: 'inline-block',
    cursor: 'pointer',
    lineHeight: 'none',
    _peerDisabled: {
      cursor: 'not-allowed',
      opacity: 0.7,
    },
  },
  defaultVariants: {
    color: SemanticColor.Base,
  },
  variants: {
    color: semanticVariant(color => ({
      color: color(SemanticShade.Dark),
    })),
  },
})

export { Label, type LabelProps }
