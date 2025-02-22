'use client'

import { redirect } from 'next/navigation'
import { useCallback, useMemo } from 'react'

import { BadgeCheckIcon, BellIcon, ChevronsUpDownIcon, CreditCardIcon, LogOutIcon, SparklesIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar'
import { type AuthClient, type Profile } from '@/services/db'

interface NavUserProps {
  auth: AuthClient
  profile?: Profile
}

export const NavUser = ({ auth, profile }: NavUserProps) => {
  const t = useTranslations('Navigation')
  const { isMobile } = useSidebar()

  const initials = useMemo(() => {
    if (!profile?.name) return ''
    return profile.name
      .split(' ')
      .map(name => name[0])
      .join('')
  }, [profile])

  const avatarUrl = useMemo(() => profile?.avatar_url || undefined, [profile?.avatar_url])

  const logOutUser = useCallback(async () => {
    await auth.signOut()
    redirect('/login')
  }, [auth])

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              size="lg"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage alt={profile?.name} src={avatarUrl} />
                <AvatarFallback className="rounded-lg">{'CN'}</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{profile?.name}</span>
                <span className="truncate text-xs">{profile?.email}</span>
              </div>
              <ChevronsUpDownIcon className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? 'bottom' : 'right'}
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage alt={profile?.name} src={avatarUrl} />
                  <AvatarFallback className="rounded-lg">{initials}</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{profile?.name}</span>
                  <span className="truncate text-xs">{profile?.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <SparklesIcon />
                {'Upgrade to Pro'}
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheckIcon />
                {'Account'}
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCardIcon />
                {'Billing'}
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BellIcon />
                {'Notifications'}
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logOutUser}>
              <LogOutIcon />
              {t('logout')}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
