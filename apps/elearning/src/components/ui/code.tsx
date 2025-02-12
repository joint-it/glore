import { forwardRef } from 'react'

import { css, cx } from 'styled-system/css'

interface CodeProps extends React.HTMLAttributes<HTMLElement> {}

const Code = forwardRef<HTMLElement, CodeProps>(({ className, ...props }, ref) => (
  <code className={cx(styles, className)} ref={ref} {...props} />
))

const styles = css({
  borderRadius: 'sm',
  position: 'relative',
  px: '1',
  py: '0.5',
  fontFamily: 'mono',
  fontSize: 'sm',
  fontWeight: 'semibold',
})

export { Code, type CodeProps }
