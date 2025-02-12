'use client'

import { useState } from 'react'

import { Divider, IconBookText, IconChevronDown, IconHouse, IconPackageSearch, Input, Sidebar } from '@/components/ui/tooltip'
import { cn, focusRing } from '@/lib/cva'

import { Logo } from './logo'
import { UserProfile } from './user-profile'

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

export const AppSidebar = (props: React.ComponentProps<typeof Sidebar>) => {
  const [openMenus, setOpenMenus] = useState<string[]>([navigation2[0].name, navigation2[1].name])

  const toggleMenu = (name: string) => {
    setOpenMenus((prev: string[]) => (prev.includes(name) ? prev.filter((item: string) => item !== name) : [...prev, name]))
  }

  return (
    <Sidebar {...props} className="dark:bg-gray-925 bg-gray-50">
      <Sidebar.Header className="px-3 py-4">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-md bg-white p-1.5 ring-1 shadow-sm ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
            <Logo className="size-6 text-blue-500 dark:text-blue-500" />
          </span>
          <div>
            <span className="block text-sm font-semibold text-gray-900 dark:text-gray-50">{'Innovex Systems'}</span>
            <span className="block text-xs text-gray-900 dark:text-gray-50">{'Premium Starter Plan'}</span>
          </div>
        </div>
      </Sidebar.Header>
      <Sidebar.Content>
        <Sidebar.Group>
          <Sidebar.GroupContent>
            <Input className="[&>input]:sm:py-1.5" placeholder="Search items..." type="search" />
          </Sidebar.GroupContent>
        </Sidebar.Group>
        <Sidebar.Group className="pt-0">
          <Sidebar.GroupContent>
            <Sidebar.Menu className="space-y-1">
              {navigation.map(item => (
                <Sidebar.MenuItem key={item.name}>
                  <Sidebar.Link href="#" icon={item.icon} isActive={item.active} notifications={item.notifications}>
                    {item.name}
                  </Sidebar.Link>
                </Sidebar.MenuItem>
              ))}
            </Sidebar.Menu>
          </Sidebar.GroupContent>
        </Sidebar.Group>
        <div className="px-3">
          <Divider className="my-0 py-0" />
        </div>
        <Sidebar.Group>
          <Sidebar.GroupContent>
            <Sidebar.Menu className="space-y-4">
              {navigation2.map(item => (
                <Sidebar.MenuItem key={item.name}>
                  <button
                    className={cn(
                      'flex w-full items-center justify-between gap-x-2.5 rounded-md p-2 text-base text-gray-900 transition hover:bg-gray-200/50 sm:text-sm dark:text-gray-400 hover:dark:bg-gray-900 hover:dark:text-gray-50',
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
                    <Sidebar.MenuSub>
                      <div className="absolute inset-y-0 left-4 w-px bg-gray-300 dark:bg-gray-800" />
                      {item.children.map(child => (
                        <Sidebar.MenuItem key={child.name}>
                          <Sidebar.SubLink href={child.href} isActive={child.active}>
                            {child.name}
                          </Sidebar.SubLink>
                        </Sidebar.MenuItem>
                      ))}
                    </Sidebar.MenuSub>
                  )}
                </Sidebar.MenuItem>
              ))}
            </Sidebar.Menu>
          </Sidebar.GroupContent>
        </Sidebar.Group>
      </Sidebar.Content>
      <Sidebar.Footer>
        <div className="border-t border-gray-200 dark:border-gray-800" />
        <UserProfile />
      </Sidebar.Footer>
    </Sidebar>
  )
}
