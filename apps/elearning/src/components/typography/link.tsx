import NextLink, { type LinkProps as NextLinkProps } from 'next/link'

import { cn } from '@/lib/utils'

export interface LinkProps extends React.PropsWithChildren<NextLinkProps> {
  className?: string
}

export const Link = ({ className, ...props }: LinkProps) => (
  <NextLink className={cn('text-sm underline-offset-4 hover:underline', className)} {...props} />
)

export interface ExternalLinkProps extends React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>> {}

export const ExternalLink = ({ children, ...props }: ExternalLinkProps) => (
  <a className="text-sm underline-offset-4 hover:underline" {...props}>
    {children}
  </a>
)
