import { forwardRef } from 'react'

import * as LabelPrimitive from '@radix-ui/react-label'

import cva, { cn, type VariantProps } from '@/lib/cva'

export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {}

const Label = forwardRef<React.ComponentRef<typeof LabelPrimitive.Root>, LabelProps>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root className={cn(labelVariants({ className }))} ref={ref} {...props} />
))
export default Label

const labelVariants = cva(
  'cursor-pointer text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
)
