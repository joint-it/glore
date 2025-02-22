import NextLink, { type LinkProps as NextLinkProps } from 'next/link'

import { cn } from '@/theme/utils'

interface LinkProps extends React.PropsWithChildren<NextLinkProps> {
  className?: string
}

interface ExternalLinkProps extends React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>> {}

const Link = (props: LinkProps) => {
  const { className, ...rest } = props
  return (
    <NextLink
      className={cn('text-sm underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none', className)}
      {...rest}
    />
  )
}

const ExternalLink = (props: ExternalLinkProps) => {
  const { className, ...rest } = props
  return (
    <a
      className={cn('text-sm underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none', className)}
      {...rest}
    />
  )
}

export { Link, ExternalLink, type LinkProps, type ExternalLinkProps }
