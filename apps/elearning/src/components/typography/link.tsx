import { cva } from 'class-variance-authority'
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'

import { cn } from '@/lib/utils'

export const linkVariants = cva(
  'text-sm underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none',
)

export interface LinkProps extends React.PropsWithChildren<NextLinkProps> {
  className?: string
}

export const Link = ({ className, ...props }: LinkProps) => (
  <NextLink className={cn(linkVariants({ className }))} {...props} />
)

export interface ExternalLinkProps extends React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>> {}

export const ExternalLink = ({ children, className, ...props }: ExternalLinkProps) => (
  <a className={cn(linkVariants({ className }))} {...props}>
    {children}
  </a>
)
