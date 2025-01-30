import { baseVariants, cn, cva, type VariantProps } from '@/lib/cva'

export interface DivProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof divVariants> {}

export const Div = (props: DivProps) => {
  const { absolute, className, fullWidth, gap, relative, ...rest } = props
  return <div className={cn(divVariants({ absolute, gap, className, fullWidth, relative }))} {...rest} />
}

export const divVariants = cva('', {
  variants: {
    ...baseVariants(['absolute', 'fullWidth', 'gap', 'relative']),
  },
})
