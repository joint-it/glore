import { forwardRef } from 'react'

import { css, cx } from 'styled-system/css'

interface H4Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const H4 = forwardRef<HTMLHeadingElement, H4Props>(({ className, ...props }, ref) => (
  <h4 className={cx(styles, className)} ref={ref} {...props} />
))

const styles = css({
  fontSize: 'xl',
  fontWeight: 'semibold',
  letterSpacing: 'tight',
})

export { H4, type H4Props }
