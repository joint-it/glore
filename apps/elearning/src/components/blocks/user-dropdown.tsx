'use client'

import { useEffect, useState } from 'react'

import { DropdownMenu, IconArrowUpRight, IconMonitor, IconMoon, IconSun } from '@/components/ui/tooltip'
import { useTheme } from '@/hooks'

import { type Theme } from '@/theme/config'

export interface DropdownUserProfileProps {
  align?: 'center' | 'start' | 'end'
  children: React.ReactNode
}

export const DropdownUserProfile = ({ align = 'start', children }: DropdownUserProfileProps) => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <DropdownMenu>
        <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>
        <DropdownMenu.Content align={align} className="!min-w-[calc(var(--radix-dropdown-menu-trigger-width))]">
          <DropdownMenu.Label>{'emma.stone@acme.com'}</DropdownMenu.Label>
          <DropdownMenu.Group>
            <DropdownMenu.SubMenu>
              <DropdownMenu.SubMenuTrigger>{'Theme'}</DropdownMenu.SubMenuTrigger>
              <DropdownMenu.SubMenuContent>
                <DropdownMenu.RadioGroup
                  onValueChange={value => {
                    setTheme(value as Theme)
                  }}
                  value={theme}
                >
                  <DropdownMenu.RadioItem aria-label="Switch to Light Mode" iconType="check" value="light">
                    <IconSun aria-hidden="true" className="size-4 shrink-0" />
                    {'Light'}
                  </DropdownMenu.RadioItem>
                  <DropdownMenu.RadioItem aria-label="Switch to Dark Mode" iconType="check" value="dark">
                    <IconMoon aria-hidden="true" className="size-4 shrink-0" />
                    {'Dark'}
                  </DropdownMenu.RadioItem>
                  <DropdownMenu.RadioItem aria-label="Switch to System Mode" iconType="check" value="system">
                    <IconMonitor aria-hidden="true" className="size-4 shrink-0" />
                    {'System'}
                  </DropdownMenu.RadioItem>
                </DropdownMenu.RadioGroup>
              </DropdownMenu.SubMenuContent>
            </DropdownMenu.SubMenu>
          </DropdownMenu.Group>
          <DropdownMenu.Separator />
          <DropdownMenu.Group>
            <DropdownMenu.Item>
              {'Changelog'}
              <IconArrowUpRight aria-hidden="true" className="mb-1 ml-1 size-3 shrink-0 text-gray-500 dark:text-gray-500" />
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              {'Documentation'}
              <IconArrowUpRight aria-hidden="true" className="mb-1 ml-1 size-3 shrink-0 text-gray-500" />
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              {'Join Slack community'}
              <IconArrowUpRight aria-hidden="true" className="mb-1 ml-1 size-3 shrink-0 text-gray-500" />
            </DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator />
          <DropdownMenu.Group>
            <DropdownMenu.Item>
              <a className="w-full" href="/sign-out">
                {'Sign out'}
              </a>
            </DropdownMenu.Item>
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu>
    </>
  )
}
