import { forwardRef } from 'react'

import { Title, type DialogTitleProps } from '@radix-ui/react-dialog'

import { displayName } from '@/lib/utils'
import { css, cx } from 'styled-system/css'

interface DrawerTitleProps extends DialogTitleProps {}

const DrawerTitle = forwardRef<React.ComponentRef<typeof Title>, DrawerTitleProps>((props, forwardedRef) => {
  const { className, ...rest } = props
  return <Title className={cx(drawerTitle, className)} ref={forwardedRef} {...rest} />
})
DrawerTitle.displayName = displayName('DrawerTitle')

const drawerTitle = css({
  textStyle: 'base',
  fontWeight: 'semibold',
  color: 'gray.900',
  __dark: {
    color: 'gray.50',
  },
})

export { DrawerTitle, drawerTitle, type DrawerTitleProps }
