'use client'

import { css, sva } from 'styled-system/css'

export const sidebar = sva({
  slots: ['main', 'wrapper', 'container', 'inner'],
  base: {
    main: {
      display: {
        base: 'none',
        md: 'block',
      },
    },
    wrapper: {
      position: 'relative',
      height: 'svh',
      width: 'var(--sidebar-width)',
      background: 'transparent',
      transitionProperty: 'width',
      transitionTimingFunction: 'in-out',
      transitionDuration: 'fast',
      willChange: 'transform',
    },
    container: {
      position: 'fixed',
      insetY: '0',
      zIndex: '10',
      display: {
        base: 'none',
        md: 'flex',
      },
      height: 'svh',
      width: 'var(--sidebar-width)',
      transitionProperty: 'left, right, width',
      transitionTimingFunction: 'in-out',
      transitionDuration: 'fast',
      willChange: 'transform',
      left: '0',
      borderRightWidth: '1',
      borderRightColor: {
        base: 'gray.200',
        __dark: 'gray.800',
      },
    },
    inner: {
      // background: 'sidebar',
      display: 'flex',
      height: 'full',
      width: 'full',
      flexDirection: 'column',
    },
  },
  variants: {
    collapsed: {
      true: {
        wrapper: { width: '0' },
        container: { left: '[calc(var(--sidebar-width) * -1)]' },
      },
    },
  },
})

export const sidebarMobile = {
  content: css({
    background: 'gray.50',
    padding: '0',
    color: 'gray.900',
  }),
  closeWrapper: css({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    height: 'full',
    width: 'full',
  }),
  closeDrawer: css({
    position: 'absolute',
    top: '4',
    right: '4',
  }),
  closeButton: css({
    padding: '2!',
    color: {
      base: 'gray.700',
      __dark: 'gray.300',
    },
    _hover: {
      color: {
        base: 'gray.900',
        __dark: 'gray.50',
      },
    },
  }),
  closeIcon: css({
    size: '5',
    flexShrink: '0',
  }),
}

export const sidebarFooter = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '3',
  padding: '3',
  borderTopWidth: '1',
  borderTopColor: {
    base: 'gray.200',
    __dark: 'gray.800',
  },
  background: {
    base: 'white',
    __dark: 'gray.900',
  },
})

export const sidebarMenu = css({
  display: 'flex',
  flexDirection: 'column',
  minWidth: '0',
  gap: '1',
})

export const sidebarMenuSub = css({
  position: 'relative',
  spaceY: '1',
  borderLeftWidth: '0',
  borderLeftColor: 'transparent',
})

export const sidebarProvider = css({
  display: 'flex',
  minHeight: 'svh',
  width: 'full',
})

export const sidebarTrigger = {
  icon: css({
    size: '[18px]',
    flexShrink: '0',
    color: {
      base: 'gray.700',
      __dark: 'gray.300',
    },
  }),
}
