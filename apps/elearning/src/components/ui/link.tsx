import NextLink, { type LinkProps as NextLinkProps } from 'next/link'

import { displayName } from '@/lib/utils'
import { cn } from '@/theme/utils'

interface LinkProps extends React.PropsWithChildren<NextLinkProps> {
  className?: string
}

interface ExternalLinkProps extends React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>> {}

const Link = (props: LinkProps) => {
  const { className, ...rest } = props
  return (
    <NextLink
      className={cn('text-sm underline-offset-4 focus-visible:underline focus-visible:outline-none hover:underline', className)}
      {...rest}
    />
  )
}
Link.displayName = displayName('Link')

const ExternalLink = (props: ExternalLinkProps) => {
  const { className, ...rest } = props
  return (
    <a
      className={cn('text-sm underline-offset-4 focus-visible:underline focus-visible:outline-none hover:underline', className)}
      {...rest}
    />
  )
}
ExternalLink.displayName = displayName('ExternalLink')

export { Link, ExternalLink, type LinkProps, type ExternalLinkProps }
