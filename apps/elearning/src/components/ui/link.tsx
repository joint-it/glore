import NextLink, { type LinkProps as NextLinkProps } from 'next/link'

import { cn, cva, type VariantProps } from '@/lib/cva'

export interface LinkProps extends React.PropsWithChildren<NextLinkProps>, VariantProps<typeof linkVariants> {
  className?: string
}

export const Link = (props: LinkProps) => {
  const { className, ...rest } = props
  return <NextLink className={cn(linkVariants({ className }))} {...rest} />
}

export interface ExternalLinkProps
  extends React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>,
    VariantProps<typeof linkVariants> {}

export const ExternalLink = (props: ExternalLinkProps) => {
  const { className, ...rest } = props
  return <a className={cn(linkVariants({ className }))} {...rest} />
}

export const linkVariants = cva(
  'text-sm underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none',
)
