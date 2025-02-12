import { forwardRef } from 'react'

import { displayName } from '@/lib/utils'
import { css, cx } from 'styled-system/css'

interface DrawerBodyProps extends React.ComponentPropsWithoutRef<'div'> {}

const DrawerBody = forwardRef<HTMLDivElement, DrawerBodyProps>((props, ref) => {
  const { className, ...rest } = props
  return <div className={cx(drawerBody, className)} ref={ref} {...rest} />
})
DrawerBody.displayName = displayName('DrawerBody')

const drawerBody = css({
  flexGrow: 1,
  py: '4',
})

export { DrawerBody, drawerBody, type DrawerBodyProps }
