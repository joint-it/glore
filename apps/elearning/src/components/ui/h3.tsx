import { forwardRef } from 'react'

import { css, cx } from 'styled-system/css'

interface H3Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const H3 = forwardRef<HTMLHeadingElement, H3Props>(({ className, ...props }, ref) => (
  <h3 className={cx(styles, className)} ref={ref} {...props} />
))

const styles = css({
  fontSize: '3xl',
  fontWeight: 'bold',
})

export { H3, type H3Props }
