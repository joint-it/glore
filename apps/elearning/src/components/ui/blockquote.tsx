import { forwardRef, type BlockquoteHTMLAttributes } from 'react'

import { displayName } from '@/lib/utils'
import { cn } from '@/theme/utils'

interface BlockquoteProps extends BlockquoteHTMLAttributes<HTMLElement> {}

const Blockquote = forwardRef<React.ComponentRef<'blockquote'>, BlockquoteProps>(({ className, ...props }, ref) => (
  <blockquote className={cn('mt-6 border-l-2 pl-6 italic', className)} ref={ref} {...props} />
))
Blockquote.displayName = displayName('Blockquote')

export { Blockquote, type BlockquoteProps }
