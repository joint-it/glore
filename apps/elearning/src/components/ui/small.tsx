import { forwardRef } from 'react'

import { css, cx } from 'styled-system/css'

interface SmallProps extends React.HTMLAttributes<HTMLElement> {}

const Small = forwardRef<HTMLElement, SmallProps>(({ className, ...props }, ref) => (
  <small className={cx(styles, className)} ref={ref} {...props} />
))

const styles = css({
  fontWeight: 'medium',
  lineHeight: 'none',
  textStyle: 'sm',
})

export { Small, type SmallProps }
