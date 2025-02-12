'use client'

import { useEffect, useState } from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { IconArrowUpRight, IconMonitor, IconMoon, IconSun } from '@/components/ui/icon'
import { useTheme } from '@/hooks/use-theme'
import { displayName } from '@/lib/utils'
import { type Theme } from '@/theme/enums'

interface UserProfileDropdownProps extends React.PropsWithChildren {
  align?: 'start' | 'center' | 'end'
}

const UserProfileDropdown = ({ align = 'start', children }: UserProfileDropdownProps) => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
        <DropdownMenuContent align={align} className="!min-w-[calc(var(--radix-dropdown-menu-trigger-width))]">
          <DropdownMenuLabel>{'emma.stone@acme.com'}</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>{'Theme'}</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuRadioGroup
                  onValueChange={value => {
                    setTheme(value as Theme)
                  }}
                  value={theme}
                >
                  <DropdownMenuRadioItem aria-label="Switch to Light Mode" iconType="check" value="light">
                    <IconSun aria-hidden="true" className="size-4 shrink-0" />
                    {'Light'}
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem aria-label="Switch to Dark Mode" iconType="check" value="dark">
                    <IconMoon aria-hidden="true" className="size-4 shrink-0" />
                    {'Dark'}
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem aria-label="Switch to System Mode" iconType="check" value="system">
                    <IconMonitor aria-hidden="true" className="size-4 shrink-0" />
                    {'System'}
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              {'Changelog'}
              <IconArrowUpRight aria-hidden="true" className="mb-1 ml-1 size-3 shrink-0 text-gray-500 dark:text-gray-500" />
            </DropdownMenuItem>
            <DropdownMenuItem>
              {'Documentation'}
              <IconArrowUpRight aria-hidden="true" className="mb-1 ml-1 size-3 shrink-0 text-gray-500" />
            </DropdownMenuItem>
            <DropdownMenuItem>
              {'Join Slack community'}
              <IconArrowUpRight aria-hidden="true" className="mb-1 ml-1 size-3 shrink-0 text-gray-500" />
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <a className="w-full" href="/sign-out">
                {'Sign out'}
              </a>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
UserProfileDropdown.displayName = displayName('UserProfileDropdown')

export { UserProfileDropdown, type UserProfileDropdownProps }
