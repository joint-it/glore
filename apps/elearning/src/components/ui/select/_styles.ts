import { sizingVariant } from '@/theme/utils'
import { css, cva, sva } from 'styled-system/css'

export const selectContent = sva({
  slots: ['root', 'viewport'],
  base: {
    root: {
      position: 'relative',
      zIndex: '50',
      maxHeight: '96',
      minWidth: '[8rem]',
      overflow: 'hidden',
      borderRadius: 'md',
      borderWidth: '[1px]',
      background: 'amber.100', // popover
      color: 'blue.900', // popover.foreground
      shadow: 'md',
      // data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95
      '&[data-side=bottom]': {
        transform: 'translateY(1)',
      },
      '&[data-side=left]': {
        transform: 'translateX(-1)',
      },
      '&[data-side=right]': {
        transform: 'translateX(1)',
      },
      '&[data-side=top]': {
        transform: 'translateY(-1)',
      },
      '&[data-state=closed]': {
        animation: 'bounce', // out
        opacity: 0,
        transform: 'scale(0.95)',
      },
      '&[data-state=open]': {
        animation: 'bounce', // in
        opacity: 0,
        transform: 'scale(0.95)',
      },
    },
    viewport: {
      padding: '1',
    },
  },
  defaultVariants: {
    position: 'popper',
  },
  variants: {
    position: {
      'item-aligned': {},
      popper: {
        root: {
          '&[data-side=bottom]': {
            transform: 'translateY(1)',
          },
          '&[data-side=left]': {
            transform: 'translateX(-1)',
          },
          '&[data-side=right]': {
            transform: 'translateX(1)',
          },
          '&[data-side=top]': {
            transform: 'translateY(-1)',
          },
        },
        viewport: {
          height: '[var(--radix-select-trigger-height)]',
          width: 'full',
          minWidth: '[var(--radix-select-trigger-width)]',
        },
      },
    },
  },
})

export const selectIcon = cva({
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: sizingVariant({
      xs: {
        height: '1.5',
        width: '1.5',
      },
      sm: {
        height: '2',
        width: '2',
      },
      md: {
        height: '4',
        width: '4',
      },
      lg: {
        height: '6',
        width: '6',
      },
      xl: {
        height: '8',
        width: '8',
      },
    }),
  },
})

export const selectItem = css({
  position: 'relative',
  display: 'flex',
  width: 'full',
  cursor: 'default',
  alignItems: 'center',
  borderRadius: 'sm',
  paddingY: '1.5',
  paddingRight: '8',
  paddingLeft: '2',
  fontSize: 'sm',
  outline: 'none',
  userSelect: 'none',
  '& > span': {
    position: 'absolute',
    right: '2',
    display: 'flex',
    height: '3.5',
    width: '3.5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '& svg': {
    height: '4',
    width: '4',
  },
  _focus: {
    backgroundColor: 'primary',
    color: 'text.dark',
  },
  _disabled: {
    pointerEvents: 'none',
    opacity: '50',
  },
})

export const selectLabel = css({
  paddingX: '2',
  paddingY: '1.5',
  fontSize: 'sm',
  fontWeight: 'semibold',
})

export const selectScroll = css({
  display: 'flex',
  cursor: 'default',
  alignItems: 'center',
  justifyContent: 'center',
  paddingY: '1',
})

export const selectSeparator = css({
  marginX: '-1',
  marginY: '1',
  height: '1',
  background: 'background.muted',
})

export const selectTrigger = css({
  display: 'flex',
  height: '9',
  width: 'full',
  alignItems: 'center',
  justifyContent: 'between',
  borderWidth: '',
  borderRadius: 'md',
  background: 'transparent',
  paddingX: '3',
  paddingY: '2',
  fontSize: 'sm',
  whiteSpace: 'nowrap',
  shadow: 'xs',
  ringOffset: '1', // background
  _placeholder: {
    color: 'text.muted',
  },
  _focus: {
    outline: 'none',
  },
  _disabled: {
    cursor: 'not-allowed',
    opacity: '50',
  },
  _icon: {
    opacity: '50',
  },
  '& > span': {
    lineClamp: '1',
  },
})
