import { forwardRef } from 'react'

import { slotCss, type SlotStyles } from '@/lib/theme'
import { Item, type DropdownMenuItemProps } from '@radix-ui/react-dropdown-menu'

import { displayName } from '@/lib/utils'
import { cx } from 'styled-system/css'

const DropdownMenuItem = forwardRef<
  React.ComponentRef<typeof Item>,
  DropdownMenuItemProps & {
    shortcut?: string
    hint?: string
  }
>(({ children, className, hint, shortcut, ...props }, ref) => (
  <Item className={cx(styles.root, className)} ref={ref} {...props}>
    {children}
    {hint && <span className={styles.label}>{hint}</span>}
    {shortcut && <span className={styles.label}>{shortcut}</span>}
  </Item>
))
DropdownMenuItem.displayName = displayName('DropdownMenuItem')

const dropdownMenuItem: SlotStyles = {
  root: {
    rounded: 'sm',
    position: 'relative',
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    gapX: '2',
    py: '1.5',
    pr: '1',
    pl: '8',
    transition: 'colors',
    outline: 'none',
    userSelect: 'none',
    color: {
      base: 'gray.900',
      __dark: 'gray.50',
    },
    _hover: {
      bg: {
        base: 'gray.100',
        __dark: 'gray.900',
      },
    },
    _focusVisible: {
      bg: {
        base: 'gray.100',
        __dark: 'gray.900',
      },
    },
    _disabled: {
      pointerEvents: 'none',
      color: {
        base: 'gray.400',
        __dark: 'gray.600',
      },
      _hover: {
        bg: 'none',
      },
    },
    _checked: {
      fontWeight: 'semibold',
    },
    smOnly: {
      fontSize: 'sm',
    },
  },
  iconWrapper: {
    position: 'absolute',
    left: '2',
    display: 'flex',
    size: '4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    // size-full shrink-0 text-blue-500 group-data-[state=checked]/DropdownMenuRadioItem:flex group-data-[state=unchecked]/DropdownMenuRadioItem:hidden dark:text-blue-500
    size: 'full',
    flexShrink: '0',
  },
  label: {
    ml: 'auto',
    pl: '2',
    fontSize: 'sm',
    fontWeight: 'normal',
    color: {
      base: 'gray.400',
      __dark: 'gray.600',
    },
  },
}
const styles = slotCss(dropdownMenuItem)

export { DropdownMenuItem, dropdownMenuItem, type DropdownMenuItemProps }
