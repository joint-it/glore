import { forwardRef } from 'react'

import { extendStyles } from '@/lib/theme'
import { Portal, SubContent, type DropdownMenuSubContentProps } from '@radix-ui/react-dropdown-menu'

import { displayName } from '@/lib/utils'
import { css, cx } from 'styled-system/css'

import { dropdownMenuContent } from './dropdown-menu-content'

const DropdownMenuSubContent = forwardRef<React.ComponentRef<typeof SubContent>, DropdownMenuSubContentProps>(
  ({ className, collisionPadding = 8, ...props }, ref) => (
    <Portal>
      <SubContent className={cx(styles, className)} collisionPadding={collisionPadding} ref={ref} {...props} />
    </Portal>
  ),
)
DropdownMenuSubContent.displayName = displayName('DropdownMenuSubContent')

const dropdownMenuSubContent = extendStyles(dropdownMenuContent, {
  minWidth: '32',
})
const styles = css(dropdownMenuSubContent)

export { DropdownMenuSubContent, dropdownMenuSubContent, type DropdownMenuSubContentProps }
