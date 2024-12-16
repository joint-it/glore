import { type BlockquoteHTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

export interface BlockquoteProps extends BlockquoteHTMLAttributes<HTMLElement> {}

export const Blockquote = ({ className, ...props }: BlockquoteProps) => (
  <blockquote className={cn('mt-6 border-l-2 pl-6 italic', className)} {...props} />
)
