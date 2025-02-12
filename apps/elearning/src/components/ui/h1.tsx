import { forwardRef } from 'react'

import { css, cx } from 'styled-system/css'

interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const H1 = forwardRef<HTMLHeadingElement, H1Props>(({ className, ...props }, ref) => (
  <h1 className={cx(styles, className)} ref={ref} {...props} />
))

const styles = css({
  fontSize: '5xl',
  fontWeight: 'extrabold',
})

export { H1, type H1Props }
