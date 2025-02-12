import { forwardRef } from 'react'

import { type Styles } from '@/lib/theme'
import { Content, Portal, type DropdownMenuContentProps } from '@radix-ui/react-dropdown-menu'

import { displayName } from '@/lib/utils'
import { css, cx } from 'styled-system/css'

const DropdownMenuContent = forwardRef<React.ComponentRef<typeof Content>, DropdownMenuContentProps>(
  ({ align = 'center', className, collisionPadding = 8, loop = true, sideOffset = 8, ...props }, ref) => (
    <Portal>
      <Content
        align={align}
        className={cx(styles, className)}
        collisionPadding={collisionPadding}
        loop={loop}
        ref={ref}
        sideOffset={sideOffset}
        {...props}
      />
    </Portal>
  ),
)
DropdownMenuContent.displayName = displayName('DropdownMenuContent')

const dropdownMenuContent: Styles = {
  position: 'relative',
  zIndex: 50,
  overflow: 'hidden',
  rounded: 'md',
  borderWidth: '1',
  p: '1',
  shadow: 'xl',
  // shadowBlack: '[2.5%]',
  minWidth: '48',
  maxHeight: '[var(--radix-popper-available-height)]',
  bg: {
    base: 'white',
    __dark: '[#090E1A]',
  },
  color: {
    base: 'gray.900',
    __dark: 'gray.50',
  },
  borderColor: {
    base: 'gray.200',
    __dark: 'gray.800',
  },
  willChange: ['transform', 'opacity'],
  '&[data-state=open]': {
    // animation: 'slideDownAndFade',
  },
  '&[data-state=closed]': {
    // animation: 'hide',
  },
  '&[data-side=bottom]': {
    // animation: 'slideDownAndFade',
  },
  '&[data-side=left]': {
    // animation: 'slideLeftAndFade',
  },
  '&[data-side=right]': {
    // animation: 'slideRightAndFade',
  },
  '&[data-side=top]': {
    // animation: 'slideUpAndFade',
  },
}
const styles = css(dropdownMenuContent)

export { DropdownMenuContent, dropdownMenuContent, type DropdownMenuContentProps }
