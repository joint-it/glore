import { forwardRef } from 'react'

import { slotCss, type SlotStyles } from '@/lib/theme'
import { SubTrigger, type DropdownMenuSubTriggerProps } from '@radix-ui/react-dropdown-menu'

import { IconChevronRight } from '@/components/ui/icon'
import { displayName } from '@/lib/utils'
import { cx } from 'styled-system/css'

const DropdownMenuSubTrigger = forwardRef<React.ComponentRef<typeof SubTrigger>, DropdownMenuSubTriggerProps>(
  ({ children, className, ...props }, ref) => (
    <SubTrigger className={cx(styles.root, className)} ref={ref} {...props}>
      {children}
      <IconChevronRight aria-hidden="true" className={styles.icon} />
    </SubTrigger>
  ),
)
DropdownMenuSubTrigger.displayName = displayName('DropdownMenuSubTrigger')

const dropdownMenuSubTrigger: SlotStyles = {
  root: {
    rounded: 'sm',
    position: 'relative',
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    py: '1.5',
    pr: '1',
    pl: '2',
    transition: 'colors',
    outline: 'none',
    userSelect: 'none',
    color: {
      base: 'gray.900',
      __dark: 'gray.50',
    },
    sm: {
      fontSize: 'sm',
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
    '&[data-state=open]': {
      bg: {
        base: 'gray.100',
        __dark: 'gray.900',
      },
    },
  },
  icon: {
    ml: 'auto',
    size: '4',
    flexShrink: '0',
    color: {
      __dark: 'gray.500',
    },
  },
}
const styles = slotCss(dropdownMenuSubTrigger)

export { DropdownMenuSubTrigger, dropdownMenuSubTrigger, type DropdownMenuSubTriggerProps }
