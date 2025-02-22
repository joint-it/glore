'use client'

import Link from 'next/link'

import { ChevronRightIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar'
import { type Page } from '@/hooks/use-navigation'

interface NavLearnProps {
  items: Page[]
}

const NavLearnItem = ({ icon: Icon, isActive, items, path, title }: Page) => {
  const t = useTranslations()

  return (
    <Collapsible asChild className="group/collapsible" defaultOpen={isActive} key={title}>
      <SidebarMenuItem>
        <SidebarMenuButton asChild tooltip={title}>
          <Link href={path}>
            {Icon && <Icon />}
            <span>{title}</span>
          </Link>
        </SidebarMenuButton>
        {items?.length ? (
          <>
            <CollapsibleTrigger asChild>
              <SidebarMenuAction className="cursor-pointer data-[state=open]:rotate-90">
                <ChevronRightIcon />
                <span className="sr-only">{t('Common.toggle')}</span>
              </SidebarMenuAction>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {items?.map(subItem => (
                  <SidebarMenuSubItem key={subItem.title}>
                    <SidebarMenuSubButton asChild>
                      <Link href={subItem.path}>
                        <span>{subItem.title}</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          </>
        ) : null}
      </SidebarMenuItem>
    </Collapsible>
  )
}

export const NavLearn = ({ items }: NavLearnProps) => (
  <SidebarGroup>
    <SidebarGroupLabel>{'Platform'}</SidebarGroupLabel>
    <SidebarMenu>
      {items.map(item => (
        <NavLearnItem key={item.title} {...item} />
      ))}
    </SidebarMenu>
  </SidebarGroup>
)
