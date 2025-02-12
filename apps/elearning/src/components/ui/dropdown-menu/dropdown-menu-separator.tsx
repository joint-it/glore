import { forwardRef } from 'react'

import { type Styles } from '@/lib/theme'
import { Separator, type DropdownMenuSeparatorProps } from '@radix-ui/react-dropdown-menu'

import { displayName } from '@/lib/utils'
import { css, cx } from 'styled-system/css'

const DropdownMenuSeparator = forwardRef<React.ComponentRef<typeof Separator>, DropdownMenuSeparatorProps>(
  ({ className, ...props }, ref) => <Separator className={cx(styles, className)} ref={ref} {...props} />,
)
DropdownMenuSeparator.displayName = displayName('DropdownMenuSeparator')

const dropdownMenuSeparator: Styles = {
  mx: '-1',
  my: '1',
  // h: 'px',
  borderTopWidth: '1px',
  borderColor: {
    base: 'gray.200',
    __dark: 'gray.800',
  },
}
const styles = css(dropdownMenuSeparator)

export { DropdownMenuSeparator, dropdownMenuSeparator, type DropdownMenuSeparatorProps }
