import { Portal, type DialogPortalProps } from '@radix-ui/react-dialog'

import { displayName } from '@/lib/utils'

interface DrawerPortalProps extends DialogPortalProps {}

const DrawerPortal = (props: DrawerPortalProps) => <Portal {...props} />
DrawerPortal.displayName = displayName('DrawerPortal')

export { DrawerPortal, type DrawerPortalProps }
