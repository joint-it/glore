import { type BlockquoteHTMLAttributes } from 'react'

import { cn, cva, type VariantProps } from '@/lib/cva'

export interface BlockquoteProps
  extends BlockquoteHTMLAttributes<HTMLElement>,
    VariantProps<typeof blockquoteVariants> {}

export const Blockquote = ({ className, ...props }: BlockquoteProps) => (
  <blockquote className={cn(blockquoteVariants({ className }))} {...props} />
)

export const blockquoteVariants = cva('mt-6 border-l-2 pl-6 italic')
