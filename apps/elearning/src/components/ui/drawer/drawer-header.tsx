import { forwardRef } from 'react'

import { csva } from '@/lib/theme'

import { Box, type BoxProps } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import { IconX } from '@/components/ui/icon'
import { displayName } from '@/lib/utils'
import { cx } from 'styled-system/css'

import { DrawerClose } from './drawer-close'

interface DrawerHeaderProps extends BoxProps {}

const DrawerHeader = forwardRef<HTMLDivElement, DrawerHeaderProps>((props, ref) => {
  const { children, className, ...rest } = props

  return (
    <Box className={cx(drawerHeader.root, className)} ref={ref} {...rest}>
      <Box className={drawerHeader.container}>{children}</Box>
      <DrawerClose asChild>
        <Button className={drawerHeader.close}>
          <IconX />
        </Button>
      </DrawerClose>
    </Box>
  )
})
DrawerHeader.displayName = displayName('DrawerHeader')

const drawerHeader = csva({
  root: {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'between',
    spaceX: '4',
    borderBottomWidth: '1',
    borderBottomColor: 'gray.200',
    pb: '4',
    __dark: {
      borderBottomColor: 'gray.900',
    },
  },
  container: {
    mt: '1',
    display: 'flex',
    flexDirection: 'column',
    gapY: '1',
  },
  close: {
    aspectRatio: 'square',
    p: '1',
    _hover: {
      bg: 'gray.100',
      __dark: {
        bg: 'gray.400/10',
      },
    },
    '& svg': {
      size: '6',
    },
  },
})

export { DrawerHeader, drawerHeader, type DrawerHeaderProps }
