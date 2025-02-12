import { forwardRef } from 'react'

import { css, cx } from 'styled-system/css'

interface LargeProps extends React.HTMLAttributes<HTMLDivElement> {}

const Large = forwardRef<HTMLDivElement, LargeProps>(({ className, ...props }, ref) => (
  <div className={cx(styles, className)} ref={ref} {...props} />
))

const styles = css({
  fontSize: 'xl',
  fontWeight: 'semibold',
})

export { Large, type LargeProps }
