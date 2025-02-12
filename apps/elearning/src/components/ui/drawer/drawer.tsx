import { Dialog, type DialogProps } from '@radix-ui/react-dialog'

interface DrawerProps extends DialogProps {
  className?: string
}

const Drawer = (props: DrawerProps) => <Dialog {...props} />

export { Drawer, type DrawerProps }
