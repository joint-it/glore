'use client'

import React, { createContext, forwardRef, useCallback, useContext, useMemo, useState } from 'react'

import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

import { Button, type ButtonProps } from '@/components/ui/button'
import { Drawer, DrawerClose, DrawerContent, DrawerTitle } from '@/components/ui/drawer'
import { IconPanelLeft, IconX } from '@/components/ui/icon'
import { Link } from '@/components/ui/link'
import { List, ListItem, type ListItemProps, type ListProps } from '@/components/ui/list'
import { Span } from '@/components/ui/span'
import { useIsMobile } from '@/hooks/use-is-mobile'
import { Cookie } from '@/lib/storage'
import { cx } from 'styled-system/css'
import { Box, Flex, type BoxProps, type FlexProps } from 'styled-system/jsx'

import { sidebar, sidebarMenu, sidebarMenuSub, sidebarMobile, sidebarProvider, sidebarTrigger } from './_styles'
import type { SidebarContextProps, SidebarLinkProps, SidebarLinkSubProps, SidebarProps, SidebarProviderProps } from './_types'

const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = '16rem'

const SidebarContext = createContext<SidebarContextProps | null>(null)

const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (!context) throw new Error('useSidebar must be used within a SidebarProvider.')
  return context
}

const SidebarProvider = forwardRef<HTMLDivElement, SidebarProviderProps>(
  ({ children, className, defaultOpen = true, onOpenChange: setOpenProp, open: openProp, style, ...props }, ref) => {
    const isMobile = useIsMobile()
    const [openMobile, setOpenMobile] = useState(false)
    const [_open, _setOpen] = useState(defaultOpen)
    const open = openProp ?? _open

    const setOpen = useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === 'function' ? value(open) : value
        setOpenProp ? setOpenProp(openState) : _setOpen(openState)
        document.cookie = `${Cookie.SidebarOpen}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
      },
      [setOpenProp, open],
    )

    const toggleSidebar = useCallback(() => {
      if (isMobile) {
        setOpenMobile(open => !open)
        return
      }
      setOpen(open => !open)
    }, [isMobile, setOpen, setOpenMobile])

    const state = open ? 'expanded' : 'collapsed'

    const contextValue = useMemo<SidebarContextProps>(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar],
    )

    return (
      <SidebarContext.Provider value={contextValue}>
        <div
          className={cx(sidebarProvider, className)}
          ref={ref}
          style={
            {
              '--sidebar-width': SIDEBAR_WIDTH,
              ...style,
            } as React.CSSProperties
          }
          {...props}
        >
          {children}
        </div>
      </SidebarContext.Provider>
    )
  },
)

const Sidebar = (props: SidebarProps) => {
  const { children, className, ...rest } = props
  const { isMobile, openMobile, setOpenMobile, state } = useSidebar()
  const isCollapsed = useMemo(() => state === 'collapsed', [state])
  const styles = useMemo(() => sidebar({ collapsed: isCollapsed }), [isCollapsed])

  if (isMobile) {
    return (
      <Drawer onOpenChange={setOpenMobile} open={openMobile} {...rest}>
        <DrawerContent className={sidebarMobile.content}>
          <VisuallyHidden>
            <DrawerTitle>{'Sidebar'}</DrawerTitle>
          </VisuallyHidden>
          <div className={sidebarMobile.closeWrapper}>
            <DrawerClose asChild className={sidebarMobile.closeDrawer}>
              <Button className={sidebarMobile.closeButton}>
                <IconX aria-hidden="true" className={sidebarMobile.closeIcon} />
              </Button>
            </DrawerClose>
            {children}
          </div>
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <div className={styles.main} data-collapsible={isCollapsed} data-state={state} {...rest}>
      <div className={styles.wrapper} />
      <div className={cx(styles.container, className)} {...props}>
        <div className={styles.inner} data-sidebar="sidebar">
          {children}
        </div>
      </div>
    </div>
  )
}

const SidebarContent = forwardRef<React.ComponentRef<typeof Flex>, FlexProps>((props, ref) => (
  <Flex direction="column" gap="2" grow="1" minH="0" overflow="auto" ref={ref} {...props} />
))

const SidebarFooter = forwardRef<React.ComponentRef<typeof Flex>, FlexProps>((props, ref) => (
  <Flex direction="column" gap="2" p="3" ref={ref} {...props} />
))

const SidebarGroup = forwardRef<React.ComponentRef<typeof Flex>, FlexProps>((props, ref) => (
  <Flex direction="column" minW="0" p="3" pos="relative" ref={ref} w="full" {...props} />
))

const SidebarGroupContent = forwardRef<React.ComponentRef<typeof Box>, BoxProps>((props, ref) => (
  <Box fontSize="sm" ref={ref} w="full" {...props} />
))

const SidebarHeader = forwardRef<React.ComponentRef<typeof Flex>, FlexProps>((props, ref) => (
  <Flex direction="column" gap="2" p="2" ref={ref} {...props} />
))

const SidebarLink = forwardRef<React.ComponentRef<typeof Link>, SidebarLinkProps>(
  ({ Icon, active, children, className, notifications, ...props }, ref) => (
    <Link
      aria-current={active ? 'page' : undefined}
      className={cx(
        'flex items-center justify-between rounded-md p-2 text-base transition hover:bg-gray-200/50 sm:text-sm hover:dark:bg-gray-900',
        'text-gray-900 dark:text-gray-400 hover:dark:text-gray-50',
        'data-[active=true]:text-blue-600 data-[active=true]:dark:text-blue-500',
        // focusRing,
        className,
      )}
      data-active={active}
      ref={ref}
      {...props}
    >
      <Span alignItems="center" d="flex" gapX="2.5">
        {Icon && <Icon aria-hidden="true" className="size-[18px] shrink-0" />}
        {children}
      </Span>
      {notifications && (
        <span className="rounded inline-flex size-5 items-center justify-center bg-blue-100 text-sm font-medium text-blue-600 sm:text-xs dark:bg-blue-500/10 dark:text-blue-500">
          {notifications}
        </span>
      )}
    </Link>
  ),
)

const SidebarLinkSub = forwardRef<React.ComponentRef<typeof Link>, SidebarLinkSubProps>(
  ({ active, children, className, ...props }, ref) => (
    <Link
      aria-current={active ? 'page' : undefined}
      className={cx(
        'relative flex gap-2 rounded-md py-1.5 pr-3 pl-9 text-base transition sm:text-sm',
        'text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50',
        'data-[active=true]:rounded data-[active=true]:bg-white data-[active=true]:text-blue-600 data-[active=true]:ring-1 data-[active=true]:shadow data-[active=true]:ring-gray-200 data-[active=true]:dark:bg-gray-900 data-[active=true]:dark:text-blue-500 data-[active=true]:dark:ring-gray-800',
        // focusRing,
        className,
      )}
      data-active={active}
      ref={ref}
      {...props}
    >
      {active && (
        <div aria-hidden="true" className="absolute top-1/2 left-4 h-5 w-px -translate-y-1/2 bg-blue-500 dark:bg-blue-500" />
      )}
      {children}
    </Link>
  ),
)

const SidebarMenu = forwardRef<React.ComponentRef<typeof List>, ListProps>(({ className, ...props }, ref) => (
  <List className={cx(sidebarMenu, className)} ref={ref} {...props} />
))

const SidebarMenuItem = forwardRef<React.ComponentRef<typeof ListItem>, ListItemProps>((props, ref) => (
  <ListItem ref={ref} {...props} />
))

const SidebarMenuSub = forwardRef<React.ComponentRef<typeof List>, ListProps>(({ className, ...props }, ref) => (
  <List className={cx(sidebarMenuSub, className)} ref={ref} {...props} />
))

const SidebarTrigger = forwardRef<React.ComponentRef<typeof Button>, ButtonProps>(({ onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      onClick={event => {
        onClick?.(event)
        toggleSidebar()
      }}
      ref={ref}
      {...props}
    >
      <IconPanelLeft aria-hidden="true" className={sidebarTrigger.icon} />
    </Button>
  )
})

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarLink,
  SidebarLinkSub,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarProvider,
  SidebarTrigger,
}
