'use client'

import { useMemo } from 'react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { useNavigation } from '@/hooks/use-navigation'

export const AppHeader = () => {
  const { page, subPage } = useNavigation()

  const pageUrl = useMemo(() => (subPage ? page?.path : undefined), [page, subPage])

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator className="mr-2 h-4" orientation="vertical" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              {subPage ? (
                <BreadcrumbLink href={pageUrl}>{page?.title}</BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{page?.title}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {subPage ? (
              <>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>{subPage.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            ) : null}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  )
}
