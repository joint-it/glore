import { forwardRef, type BlockquoteHTMLAttributes } from 'react'

import { css, cx } from 'styled-system/css'

interface BlockquoteProps extends BlockquoteHTMLAttributes<HTMLElement> {}

const Blockquote = forwardRef<React.ComponentRef<'blockquote'>, BlockquoteProps>(({ className, ...props }, ref) => (
  <blockquote className={cx(styles, className)} ref={ref} {...props} />
))

const styles = css({
  borderLeftWidth: '2',
  fontStyle: 'italic',
  marginTop: '6',
  paddingLeft: '6',
})

export { Blockquote, type BlockquoteProps }
