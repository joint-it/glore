import { forwardRef } from 'react'

import { Content, type DialogContentProps } from '@radix-ui/react-dialog'

import { displayName } from '@/lib/utils'
import { css, cx } from 'styled-system/css'

import { DrawerOverlay } from './drawer-overlay'
import { DrawerPortal } from './drawer-portal'

interface DrawerContentProps extends DialogContentProps {}

const DrawerContent = forwardRef<React.ComponentRef<typeof Content>, DrawerContentProps>((props, forwardedRef) => {
  const { className, ...rest } = props

  return (
    <DrawerPortal>
      <DrawerOverlay>
        <Content className={cx(drawerContent, className)} ref={forwardedRef} {...rest} />
      </DrawerOverlay>
    </DrawerPortal>
  )
})
DrawerContent.displayName = displayName('DrawerContent')

const drawerContent = css({
  position: 'fixed',
  insetY: '2',
  mx: 'auto',
  w: '[95vw]',
  p: '4',
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
  overflowY: 'auto',
  borderRadius: 'md',
  borderWidth: '1',
  shadow: 'lg',
  borderColor: 'gray.200',
  bg: 'white',
  _focus: {
    outline: 'none',
    boxShadow: 'ring.1',
  },
  __dark: {
    borderColor: 'gray.900',
    bg: '[#090E1A]',
  },
  smDown: {
    insetX: '2',
    insetY: '2',
    right: '2',
    maxWidth: 'lg',
    p: '6',
  },
  '&[data-state=closed]': {
    // animation: 'drawerSlideRightAndFade',
  },
  '&[data-state=open]': {
    // animation: 'drawerSlideLeftAndFade',
  },
})

export { DrawerContent, drawerContent, type DrawerContentProps }
