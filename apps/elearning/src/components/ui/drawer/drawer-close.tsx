import { forwardRef } from 'react'

import { Close, type DialogCloseProps } from '@radix-ui/react-dialog'

import { displayName } from '@/lib/utils'

interface DrawerCloseProps extends DialogCloseProps {}

const DrawerClose = forwardRef<React.ComponentRef<typeof Close>, DrawerCloseProps>((props, ref) => {
  return <Close ref={ref} {...props} />
})
DrawerClose.displayName = displayName('DrawerClose')

export { DrawerClose, type DrawerCloseProps }
