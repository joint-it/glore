import { forwardRef } from 'react'

import { extendSlotStyles, slotCss } from '@/lib/theme'
import { RadioItem, type DropdownMenuRadioItemProps } from '@radix-ui/react-dropdown-menu'

import { IconCheck, IconCircle } from '@/components/ui/icon'
import { displayName } from '@/lib/utils'
import { cx } from 'styled-system/css'

import { dropdownMenuItem } from './dropdown-menu-item'

const DropdownMenuRadioItem = forwardRef<
  React.ComponentRef<typeof RadioItem>,
  DropdownMenuRadioItemProps & {
    hint?: string
    iconType?: 'check' | 'radio'
    shortcut?: string
  }
>(({ children, className, hint, iconType = 'radio', shortcut, ...props }, ref) => (
  <RadioItem className={cx(styles.root, className)} ref={ref} {...props}>
    {iconType === 'radio' ? (
      <span className={styles.iconWrapper}>
        <IconCircle aria-hidden="true" className={styles.icon} />
        <IconCircle aria-hidden="true" className={styles.icon} />
      </span>
    ) : iconType === 'check' ? (
      <span className={styles.iconWrapper}>
        <IconCheck aria-hidden="true" className={styles.icon} />
      </span>
    ) : null}
    {children}
    {hint && <span className={styles.label}>{hint}</span>}
    {shortcut && <span className={styles.label}>{shortcut}</span>}
  </RadioItem>
))
DropdownMenuRadioItem.displayName = displayName('DropdownMenuRadioItem')

const dropdownMenuRadioItem = extendSlotStyles(dropdownMenuItem)
const styles = slotCss(dropdownMenuRadioItem)

export { DropdownMenuRadioItem, dropdownMenuRadioItem, type DropdownMenuRadioItemProps }
