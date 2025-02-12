'use client'

import { useState } from 'react'

import { UserProfile } from '@/components/blocks/user-profile'
import { Divider } from '@/components/ui/divider'
import { IconBookText, IconChevronDown, IconHouse, IconPackageSearch } from '@/components/ui/icon'
import { Input } from '@/components/ui/input'
import { Logo } from '@/components/ui/logo'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarLink,
  SidebarMenu,
  SidebarMenuItem,
  SidebarSubLink,
  SidebarSubMenu,
  type SidebarProps,
} from '@/components/ui/sidebar'
import { displayName } from '@/lib/utils'
import { focusRing } from '@/theme/styles'
import { cn } from '@/theme/utils'

interface AppSidebarProps extends SidebarProps {}

const navigation = [
  {
    name: 'Home',
    href: '#',
    icon: IconHouse,
    notifications: false,
    active: false,
  },
  {
    name: 'Inbox',
    href: '#',
    icon: IconPackageSearch,
    notifications: 2,
    active: false,
  },
] as const

const navigation2 = [
  {
    name: 'Sales',
    href: '#',
    icon: IconBookText,
    children: [
      {
        name: 'Quotes',
        href: '#',
        active: true,
      },
      {
        name: 'Orders',
        href: '#',
        active: false,
      },
      {
        name: 'Insights & Reports',
        href: '#',
        active: false,
      },
    ],
  },
  {
    name: 'Products',
    href: '#',
    icon: IconPackageSearch,
    children: [
      {
        name: 'Items',
        href: '#',
        active: false,
      },
      {
        name: 'Variants',
        href: '#',
        active: false,
      },
      {
        name: 'Suppliers',
        href: '#',
        active: false,
      },
    ],
  },
] as const

const AppSidebar = (props: AppSidebarProps) => {
  const [openMenus, setOpenMenus] = useState<string[]>([navigation2[0].name, navigation2[1].name])

  const toggleMenu = (name: string) => {
    setOpenMenus((prev: string[]) => (prev.includes(name) ? prev.filter((item: string) => item !== name) : [...prev, name]))
  }

  return (
    <Sidebar {...props} className="bg-gray-50 dark:bg-gray-925">
      <SidebarHeader className="px-3 py-4">
        <div className="flex items-center gap-3">
          <span
            className={`
              flex size-9 items-center justify-center rounded-md bg-white p-1.5 ring-1 shadow-sm ring-gray-200
              dark:bg-gray-900 dark:ring-gray-800
            `}
          >
            <Logo className="size-6 text-blue-500 dark:text-blue-500" />
          </span>
          <div>
            <span className="block text-sm font-semibold text-gray-900 dark:text-gray-50">{'Innovex Systems'}</span>
            <span className="block text-xs text-gray-900 dark:text-gray-50">{'Premium Starter Plan'}</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <Input className="[&>input]:sm:py-1.5" placeholder="Search items..." type="search" />
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="pt-0">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigation.map(item => (
                <SidebarMenuItem key={item.name}>
                  <SidebarLink active={item.active} href="#" icon={item.icon} notifications={item.notifications}>
                    {item.name}
                  </SidebarLink>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <div className="px-3">
          <Divider className="my-0 py-0" />
        </div>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-4">
              {navigation2.map(item => (
                <SidebarMenuItem key={item.name}>
                  <button
                    className={cn(
                      `
                        flex w-full items-center justify-between gap-x-2.5 rounded-md p-2 text-base text-gray-900 transition
                        dark:text-gray-400
                        hover:bg-gray-200/50 hover:dark:bg-gray-900 hover:dark:text-gray-50
                        sm:text-sm
                      `,
                      focusRing,
                    )}
                    onClick={() => {
                      toggleMenu(item.name)
                    }}
                  >
                    <div className="flex items-center gap-2.5">
                      <item.icon aria-hidden="true" className="size-[18px] shrink-0" />
                      {item.name}
                    </div>
                    <IconChevronDown
                      aria-hidden="true"
                      className={cn(
                        openMenus.includes(item.name) ? 'rotate-0' : '-rotate-90',
                        'size-5 shrink-0 transform text-gray-400 transition-transform duration-150 ease-in-out dark:text-gray-600',
                      )}
                    />
                  </button>
                  {openMenus.includes(item.name) && (
                    <SidebarSubMenu>
                      <div className="absolute inset-y-0 left-4 w-px bg-gray-300 dark:bg-gray-800" />
                      {item.children.map(child => (
                        <SidebarMenuItem key={child.name}>
                          <SidebarSubLink active={child.active} href={child.href}>
                            {child.name}
                          </SidebarSubLink>
                        </SidebarMenuItem>
                      ))}
                    </SidebarSubMenu>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="border-t border-gray-200 dark:border-gray-800" />
        <UserProfile />
      </SidebarFooter>
    </Sidebar>
  )
}
AppSidebar.displayName = displayName('AppSidebar')

export { AppSidebar, type AppSidebarProps }
