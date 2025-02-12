import { displayName } from '@/lib/utils'
import { css, cx } from 'styled-system/css'

interface DrawerFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const DrawerFooter = (props: DrawerFooterProps) => {
  const { className, ...rest } = props
  return <div className={cx(drawerFooter, className)} {...rest} />
}
DrawerFooter.displayName = displayName('DrawerFooter')

const drawerFooter = css({
  display: 'flex',
  flexDirection: 'column-reverse',
  borderTopWidth: '1',
  borderTopColor: 'gray.200',
  pt: '4',
  smDown: {
    flexDirection: 'row',
    justifyContent: 'end',
    spaceX: '2',
  },
  __dark: {
    borderTopColor: 'gray.900',
  },
})

export { DrawerFooter, drawerFooter, type DrawerFooterProps }
