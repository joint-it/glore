'use client'

import { forwardRef, useMemo } from 'react'

import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

import { Button } from '@/components/ui/button'
import { Drawer, DrawerClose, DrawerContent, DrawerTitle, type DrawerProps } from '@/components/ui/drawer'
import { IconPanelLeft, IconX, type IconComponent } from '@/components/ui/icon'
import { Link, type LinkProps } from '@/components/ui/link'
import { useSidebar } from '@/hooks/use-sidebar'
import { displayName } from '@/lib/utils'
import { focusRing } from '@/theme/styles'
import { cn } from '@/theme/utils'

interface SidebarProps extends DrawerProps {}

interface SidebarContentProps extends React.ComponentProps<'div'> {}

interface SidebarFooterProps extends React.ComponentProps<'div'> {}

interface SidebarGroupProps extends React.ComponentProps<'div'> {}

interface SidebarGroupContentProps extends React.ComponentProps<'div'> {}

interface SidebarHeaderProps extends React.ComponentProps<'div'> {}

interface SidebarLinkProps extends LinkProps {
  active?: boolean
  icon?: IconComponent
  notifications?: number | boolean
}

interface SidebarSubLinkProps extends LinkProps {
  active?: boolean
}

interface SidebarMenuProps extends React.ComponentProps<'ul'> {}

interface SidebarMenuItemProps extends React.ComponentProps<'li'> {}

interface SidebarSubMenuProps extends React.ComponentProps<'ul'> {}

interface SidebarTriggerProps extends React.ComponentPropsWithRef<'button'> {}

const Sidebar = (props: SidebarProps) => {
  const { children, className, ...rest } = props
  const { isMobile, openMobile, setOpenMobile, state } = useSidebar()
  const isCollapsed = useMemo(() => state === 'collapsed', [state])

  if (isMobile) {
    return (
      <Drawer onOpenChange={setOpenMobile} open={openMobile} {...rest}>
        <DrawerContent className="bg-gray-50 p-0 text-gray-900">
          <VisuallyHidden>
            <DrawerTitle>{'Sidebar'}</DrawerTitle>
          </VisuallyHidden>
          <div className="relative flex h-full w-full flex-col">
            <DrawerClose asChild className="absolute top-4 right-4">
              <Button
                className="!p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 hover:dark:text-gray-50"
                variant="ghost"
              >
                <IconX aria-hidden="true" className="size-5 shrink-0" />
              </Button>
            </DrawerClose>
            {children}
          </div>
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <div className="group peer hidden md:block" data-collapsible={isCollapsed} data-state={state} {...rest}>
      <div
        className={`
          relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-150 ease-in-out will-change-transform
          group-data-[collapsible=true]:w-0
        `}
      />
      <div
        className={cn(
          `
            fixed inset-y-0 left-0 z-10 hidden h-svh w-[--sidebar-width] border-r border-gray-200 transition-[left,right,width]
            duration-150 ease-in-out will-change-transform
            dark:border-gray-800
            group-data-[collapsible=true]:left-[calc(var(--sidebar-width)*-1)]
            md:flex
          `,
          className,
        )}
        {...props}
      >
        <div className="bg-sidebar flex h-full w-full flex-col" data-sidebar="sidebar">
          {children}
        </div>
      </div>
    </div>
  )
}
Sidebar.displayName = displayName('Sidebar')

const SidebarContent = forwardRef<HTMLDivElement, SidebarContentProps>(({ className, ...props }, ref) => (
  <div
    className={cn('flex min-h-0 flex-1 flex-col gap-2 overflow-auto', className)}
    data-sidebar="content"
    ref={ref}
    {...props}
  />
))
SidebarContent.displayName = displayName('SidebarContent')

const SidebarFooter = forwardRef<HTMLDivElement, SidebarFooterProps>(({ className, ...props }, ref) => (
  <div className={cn('flex flex-col gap-2 p-3', className)} data-sidebar="footer" ref={ref} {...props} />
))
SidebarFooter.displayName = displayName('SidebarFooter')

const SidebarGroup = forwardRef<HTMLDivElement, SidebarGroupProps>(({ className, ...props }, ref) => (
  <div className={cn('relative flex w-full min-w-0 flex-col p-3', className)} data-sidebar="group" ref={ref} {...props} />
))
SidebarGroup.displayName = displayName('SidebarGroup')

const SidebarGroupContent = forwardRef<HTMLDivElement, SidebarGroupContentProps>(({ className, ...props }, ref) => (
  <div className={cn('w-full text-sm', className)} data-sidebar="group-content" ref={ref} {...props} />
))
SidebarGroupContent.displayName = displayName('SidebarGroupContent')

const SidebarHeader = forwardRef<HTMLDivElement, SidebarHeaderProps>(({ className, ...props }, ref) => (
  <div className={cn('flex flex-col gap-2 p-2', className)} data-sidebar="header" ref={ref} {...props} />
))
SidebarHeader.displayName = displayName('SidebarHeader')

const SidebarLink = (props: SidebarLinkProps) => {
  const { active, children, className, icon: Icon, notifications, ...rest } = props
  const current = useMemo(() => (active ? 'page' : undefined), [active])

  return (
    <Link
      aria-current={current}
      className={cn(
        `
          flex items-center justify-between rounded-md p-2 text-base text-gray-900 transition
          dark:text-gray-400
          data-[active=true]:text-blue-600 data-[active=true]:dark:text-blue-500
          hover:bg-gray-200/50 hover:dark:bg-gray-900 hover:dark:text-gray-50
          sm:text-sm
        `,
        focusRing,
        className,
      )}
      data-active={active}
      {...rest}
    >
      <span className="flex items-center gap-x-2.5">
        {Icon && <Icon aria-hidden="true" className="size-[18px] shrink-0" />}
        {children}
      </span>
      {notifications && (
        <span
          className={`
            inline-flex size-5 items-center justify-center rounded bg-blue-100 text-sm font-medium text-blue-600
            dark:bg-blue-500/10 dark:text-blue-500
            sm:text-xs
          `}
        >
          {notifications}
        </span>
      )}
    </Link>
  )
}
SidebarLink.displayName = displayName('SidebarLink')

const SidebarSubLink = (props: SidebarSubLinkProps) => {
  const { active, children, className, ...rest } = props

  return (
    <Link
      aria-current={active ? 'page' : undefined}
      className={cn(
        `
          relative flex gap-2 rounded-md py-1.5 pr-3 pl-9 text-base text-gray-700 transition
          dark:text-gray-400 dark:hover:text-gray-50
          data-[active=true]:rounded data-[active=true]:bg-white data-[active=true]:text-blue-600 data-[active=true]:ring-1
          data-[active=true]:shadow data-[active=true]:ring-gray-200 data-[active=true]:dark:bg-gray-900
          data-[active=true]:dark:text-blue-500 data-[active=true]:dark:ring-gray-800
          hover:text-gray-900
          sm:text-sm
        `,
        focusRing,
        className,
      )}
      data-active={active}
      {...rest}
    >
      {active && (
        <div aria-hidden="true" className="absolute top-1/2 left-4 h-5 w-px -translate-y-1/2 bg-blue-500 dark:bg-blue-500" />
      )}
      {children}
    </Link>
  )
}
SidebarSubLink.displayName = displayName('SidebarSubLink')

const SidebarMenu = forwardRef<HTMLUListElement, SidebarMenuProps>(({ className, ...props }, ref) => (
  <ul className={cn('flex w-full min-w-0 flex-col gap-1', className)} data-sidebar="menu" ref={ref} {...props} />
))
SidebarMenu.displayName = displayName('SidebarMenu')

const SidebarMenuItem = forwardRef<HTMLLIElement, SidebarMenuItemProps>((props, ref) => <li ref={ref} {...props} />)
SidebarMenuItem.displayName = displayName('SidebarMenuItem')

const SidebarSubMenu = forwardRef<HTMLUListElement, SidebarSubMenuProps>(({ className, ...props }, ref) => (
  <ul className={cn('relative space-y-1 border-l border-transparent', className)} data-sidebar="menu-sub" ref={ref} {...props} />
))
SidebarSubMenu.displayName = displayName('SidebarSubMenu')

const SidebarTrigger = forwardRef<HTMLButtonElement, SidebarTriggerProps>(({ onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      className={cn('group inline-flex rounded-md p-1.5 hover:bg-gray-200/50 hover:dark:bg-gray-900', focusRing)}
      data-sidebar="trigger"
      onClick={event => {
        onClick?.(event)
        toggleSidebar()
      }}
      ref={ref}
      {...props}
    >
      <IconPanelLeft aria-hidden="true" className="size-[18px] shrink-0 text-gray-700 dark:text-gray-300" />
      <span className="sr-only">{'Toggle Sidebar'}</span>
    </button>
  )
})
SidebarTrigger.displayName = displayName('SidebarTrigger')

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarLink,
  SidebarSubLink,
  SidebarMenu,
  SidebarMenuItem,
  SidebarSubMenu,
  SidebarTrigger,
  type SidebarProps,
  type SidebarContentProps,
  type SidebarFooterProps,
  type SidebarGroupProps,
  type SidebarGroupContentProps,
  type SidebarHeaderProps,
  type SidebarLinkProps,
  type SidebarSubLinkProps,
  type SidebarMenuProps,
  type SidebarMenuItemProps,
  type SidebarSubMenuProps,
  type SidebarTriggerProps,
}
