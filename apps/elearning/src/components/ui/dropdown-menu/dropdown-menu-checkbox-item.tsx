import { forwardRef } from 'react'

import { extendSlotStyles, slotCss } from '@/lib/theme'
import { CheckboxItem, ItemIndicator, type DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'

import { IconCheck } from '@/components/ui/icon'
import { displayName } from '@/lib/utils'
import { cx } from 'styled-system/css'

import { dropdownMenuItem } from './dropdown-menu-item'

const DropdownMenuCheckboxItem = forwardRef<
  React.ComponentRef<typeof CheckboxItem>,
  DropdownMenuCheckboxItemProps & {
    shortcut?: string
    hint?: string
  }
>(({ checked, children, className, hint, shortcut, ...props }, ref) => (
  <CheckboxItem checked={checked} className={cx(styles.root, className)} ref={ref} {...props}>
    <span className={styles.iconWrapper}>
      <ItemIndicator>
        <IconCheck aria-hidden="true" className={styles.icon} />
      </ItemIndicator>
    </span>
    {children}
    {hint && <span className={styles.label}>{hint}</span>}
    {shortcut && <span className={styles.label}>{shortcut}</span>}
  </CheckboxItem>
))
DropdownMenuCheckboxItem.displayName = displayName('DropdownMenuCheckboxItem')

const dropdownMenuCheckboxItem = extendSlotStyles(dropdownMenuItem, {
  icon: {
    color: {
      base: 'gray.800',
      __dark: 'gray.200',
    },
  },
})
const styles = slotCss(dropdownMenuCheckboxItem)

export { DropdownMenuCheckboxItem, dropdownMenuCheckboxItem, type DropdownMenuCheckboxItemProps }
