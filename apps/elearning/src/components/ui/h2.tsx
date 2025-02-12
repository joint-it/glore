import { forwardRef } from 'react'

import { css, cx } from 'styled-system/css'

interface H2Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const H2 = forwardRef<HTMLHeadingElement, H2Props>(({ className, ...props }, ref) => (
  <h2 className={cx(styles, className)} ref={ref} {...props} />
))

const styles = css({
  fontSize: '4xl',
  fontWeight: 'bold',
})

export { H2, type H2Props }
