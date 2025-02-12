import { forwardRef, useMemo } from 'react'

import { type LayoutColor, type SemanticColor, type Sizing } from '@/theme/enums'
import { colorToken } from '@/theme/utils'
import { css, cx } from 'styled-system/css'

interface VariantPropsP {
  color?: LayoutColor | SemanticColor
  size?: Sizing
}

interface PProps extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'color'>, VariantPropsP {}

const P = forwardRef<HTMLParagraphElement, PProps>(({ className, color, size, ...props }, ref) => {
  const styles = useMemo(() => p({ color, size }), [color, size])

  return <p className={cx(styles, className)} ref={ref} {...props} />
})

const p = ({ color, size }: VariantPropsP) =>
  css({
    color: color ? colorToken(color) : undefined,
    textStyle: size ?? undefined,
  })

export { P, type PProps }
