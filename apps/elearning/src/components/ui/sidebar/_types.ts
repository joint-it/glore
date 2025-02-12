import { type DrawerProps } from '@/components/ui/drawer'
import { type LinkProps } from '@/components/ui/link'
import { type FlexProps } from 'styled-system/jsx'

export interface SidebarProps extends DrawerProps {}

export interface SidebarContentProps extends FlexProps {}

export interface SidebarContextProps {
  isMobile: boolean
  open: boolean
  openMobile: boolean
  setOpen: (open: boolean) => void
  setOpenMobile: (open: boolean) => void
  state: 'expanded' | 'collapsed'
  toggleSidebar: () => void
}

export interface SidebarLinkProps extends LinkProps {
  active?: boolean
  Icon?: React.ElementType
  notifications?: number | boolean
}

export interface SidebarLinkSubProps extends LinkProps {
  active?: boolean
}

export interface SidebarProviderProps extends React.ComponentProps<'div'> {
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  open?: boolean
}
