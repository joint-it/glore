import { forwardRef } from 'react'

import { Description, type DialogDescriptionProps } from '@radix-ui/react-dialog'

import { displayName } from '@/lib/utils'
import { css, cx } from 'styled-system/css'

interface DrawerDescriptionProps extends DialogDescriptionProps {}

const DrawerDescription = forwardRef<React.ComponentRef<typeof Description>, DrawerDescriptionProps>(
  ({ className, ...props }, forwardedRef) => (
    <Description className={cx(drawerDescription, className)} ref={forwardedRef} {...props} />
  ),
)
DrawerDescription.displayName = displayName('DrawerDescription')

const drawerDescription = css({
  color: 'gray.500',
})

export { DrawerDescription, drawerDescription, type DrawerDescriptionProps }
