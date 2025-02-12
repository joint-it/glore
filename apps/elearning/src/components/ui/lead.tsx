import { forwardRef } from 'react'

import { css, cx } from 'styled-system/css'

interface LeadProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const Lead = forwardRef<HTMLParagraphElement, LeadProps>(({ className, ...props }, ref) => (
  <p className={cx(styles, className)} ref={ref} {...props} />
))

const styles = css({
  fontSize: 'xl',
  color: 'text.muted',
})

export { Lead, type LeadProps }
