import { forwardRef } from 'react'

import { Overlay, type DialogOverlayProps } from '@radix-ui/react-dialog'

import { displayName } from '@/lib/utils'
import { css, cx } from 'styled-system/css'

interface DrawerOverlayProps extends DialogOverlayProps {}

const DrawerOverlay = forwardRef<React.ComponentRef<typeof Overlay>, DrawerOverlayProps>((props, forwardedRef) => {
  const { className, ...rest } = props
  return <Overlay className={cx(drawerOverlay, className)} ref={forwardedRef} {...rest} />
})
DrawerOverlay.displayName = displayName('DrawerOverlay')

const drawerOverlay = css({
  position: 'fixed',
  inset: '0',
  zIndex: '50',
  overflowY: 'auto',
  backgroundColor: {
    base: 'black/30',
    __dark: 'black/70',
  },
  transitionDuration: 'slower',
  animationFillMode: 'backwards',
  '&[data-state=open]': {
    // animationName: 'dialogOverlayShow',
  },
  '&[data-state=closed]': {
    // animationName: 'hide',
  },
})

export { DrawerOverlay, drawerOverlay, type DrawerOverlayProps }
