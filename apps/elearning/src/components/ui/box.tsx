import { useMemo } from 'react'

import { displayName } from '@/lib/utils'
import type { VariantProps } from '@/theme/types'
import { cn, cva } from '@/theme/utils'
import { absolute, fullWidth, gap, relative } from '@/theme/variants'

interface BoxProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof box> {}

const Box = (props: BoxProps) => {
  const { absolute, className, fullWidth, gap, relative, ...rest } = props
  const styles = useMemo(() => box({ absolute, fullWidth, gap, relative }), [absolute, fullWidth, gap, relative])

  return <div className={cn(styles, className)} {...rest} />
}
Box.displayName = displayName('Box')

const box = cva('block', {
  variants: {
    absolute,
    fullWidth,
    gap,
    relative,
  },
})

export { Box, type BoxProps }
