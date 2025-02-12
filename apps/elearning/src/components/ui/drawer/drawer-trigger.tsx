import { forwardRef } from 'react'

import { Trigger, type DialogTriggerProps } from '@radix-ui/react-dialog'

import { displayName } from '@/lib/utils'

interface DrawerTriggerProps extends DialogTriggerProps {}

const DrawerTrigger = forwardRef<React.ComponentRef<typeof Trigger>, DrawerTriggerProps>((props, ref) => (
  <Trigger ref={ref} {...props} />
))
DrawerTrigger.displayName = displayName('DrawerTrigger')
