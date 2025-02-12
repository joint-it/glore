import { Box, type BoxProps } from '@/components/ui/box'
import { displayName } from '@/lib/utils'
import { type VariantProps } from '@/theme/types'
import { cn, cva } from '@/theme/utils'

interface FlexProps extends BoxProps, VariantProps<typeof flex> {}

const Flex = (props: FlexProps) => {
  const { align, className, direction, grow, justify, ...rest } = props
  return <Box className={cn(flex({ align, className, direction, grow, justify }))} {...rest} />
}
Flex.displayName = displayName('Flex')

const flex = cva('flex', {
  variants: {
    align: {
      baseline: 'items-baseline',
      center: 'items-center',
      end: 'items-end',
      start: 'items-start',
      stretch: 'items-stretch',
    },
    center: {
      true: 'items-center justify-center',
    },
    direction: {
      col: 'flex-col',
      'col-reverse': 'flex-col-reverse',
      row: 'flex-row',
      'row-reverse': 'flex-row-reverse',
    },
    grow: {
      false: 'grow-0',
      true: 'grow',
    },
    justify: {
      around: 'justify-around',
      between: 'justify-between',
      center: 'justify-center',
      evenly: 'justify-evenly',
      normal: 'justify-normal',
      start: 'justify-start',
      stretch: 'justify-stretch',
    },
  },
})

export { Flex, type FlexProps }
