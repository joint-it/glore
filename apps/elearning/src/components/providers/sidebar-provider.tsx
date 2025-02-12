'use client'

import React, { createContext, forwardRef, useCallback, useMemo, useState } from 'react'

import { useIsMobile } from '@/hooks/use-is-mobile'
import { Cookie } from '@/lib/storage'
import { displayName } from '@/lib/utils'
import { cn } from '@/theme/utils'

const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = '16rem'

interface SidebarContextProps {
  isMobile: boolean
  open: boolean
  openMobile: boolean
  setOpen: (open: boolean) => void
  setOpenMobile: (open: boolean) => void
  state: 'expanded' | 'collapsed'
  toggleSidebar: () => void
}

interface SidebarProviderProps extends React.ComponentProps<'div'> {
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  open?: boolean
}

const SidebarContext = createContext<SidebarContextProps | null>(null)
SidebarContext.displayName = displayName('SidebarContext')

const SidebarProvider = forwardRef<HTMLDivElement, SidebarProviderProps>(
  ({ children, className, defaultOpen = true, onOpenChange: setOpenProp, open: openProp, style, ...props }, ref) => {
    const isMobile = useIsMobile()
    const [openMobile, setOpenMobile] = useState(false)
    const [sidebarOpen, setSiderbarOpen] = useState(defaultOpen)
    const open = openProp ?? sidebarOpen
    const state = open ? 'expanded' : 'collapsed'

    const setOpenFn = useMemo(() => setOpenProp ?? setSiderbarOpen, [setOpenProp])

    const setOpen = useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === 'function' ? value(open) : value
        setOpenFn(openState)
        document.cookie = `${Cookie.SidebarOpen}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
      },
      [open, setOpenFn],
    )

    const toggleSidebar = useCallback(() => {
      if (isMobile) {
        setOpenMobile(open => !open)
        return
      }
      setOpen(open => !open)
    }, [isMobile, setOpen, setOpenMobile])

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
          className={cn('flex min-h-svh w-full', className)}
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
SidebarProvider.displayName = displayName('SidebarProvider')

export { SidebarContext, SidebarProvider, type SidebarContextProps, type SidebarProviderProps }
