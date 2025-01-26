import NextLink, { type LinkProps as NextLinkProps } from 'next/link'

import cva, { cn, type VariantProps } from '@/lib/cva'

export interface LinkProps extends React.PropsWithChildren<NextLinkProps>, VariantProps<typeof linkVariants> {
  className?: string
}

const Link = (props: LinkProps) => {
  const { className, ...rest } = props
  return <NextLink className={cn(linkVariants({ className }))} {...rest} />
}
export default Link

export interface ExternalLinkProps
  extends React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>,
    VariantProps<typeof linkVariants> {}

export const ExternalLink = (props: ExternalLinkProps) => {
  const { className, ...rest } = props
  return <a className={cn(linkVariants({ className }))} {...rest} />
}

const linkVariants = cva(
  'text-sm underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none',
)
