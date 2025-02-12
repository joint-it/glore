import { forwardRef } from 'react'

import { type Styles } from '@/lib/theme'
import { Label, type DropdownMenuLabelProps } from '@radix-ui/react-dropdown-menu'

import { displayName } from '@/lib/utils'
import { css, cx } from 'styled-system/css'

const DropdownMenuLabel = forwardRef<React.ComponentRef<typeof Label>, DropdownMenuLabelProps>(({ className, ...props }, red) => (
  <Label className={cx(styles, className)} ref={red} {...props} />
))
DropdownMenuLabel.displayName = displayName('DropdownMenuLabel')

const dropdownMenuLabel: Styles = {
  px: '2',
  py: '2',
  fontSize: 'xs',
  fontWeight: 'medium',
  letterSpacing: 'wide',
  color: 'gray.500',
}
const styles = css(dropdownMenuLabel)

export { DropdownMenuLabel, dropdownMenuLabel, type DropdownMenuLabelProps }
