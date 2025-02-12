import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import { forwardRef } from 'react'

import { css, cx } from 'styled-system/css'

interface LinkProps extends React.PropsWithChildren<NextLinkProps> {
  className?: string
}

const Link = forwardRef<typeof NextLink, LinkProps>(({ className, ...props }) => (
  <NextLink className={cx(styles, className)} {...props} />
))

interface ExternalLinkProps extends React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>> {}

const ExternalLink = (props: ExternalLinkProps) => {
  const { className, ...rest } = props
  return <a className={cx(styles, className)} {...rest} />
}

const styles = css({
  fontSize: 'sm',
  textUnderlineOffset: '4',
  _hover: {
    textDecoration: 'underline',
  },
  _focusVisible: {
    textDecoration: 'underline',
    outline: 'none',
  },
})

export { Link, ExternalLink, type LinkProps, type ExternalLinkProps }
