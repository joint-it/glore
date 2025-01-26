import { type BlockquoteHTMLAttributes } from 'react'

import cva, { cn, type VariantProps } from '@/lib/cva'

export interface BlockquoteProps
  extends BlockquoteHTMLAttributes<HTMLElement>,
    VariantProps<typeof blockquoteVariants> {}

const Blockquote = ({ className, ...props }: BlockquoteProps) => (
  <blockquote className={cn(blockquoteVariants({ className }))} {...props} />
)
export default Blockquote

const blockquoteVariants = cva('mt-6 border-l-2 pl-6 italic')
