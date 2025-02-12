import { AppSidebar } from '@/components/blocks/app-sidebar'
import { SidebarProvider } from '@/components/providers/sidebar-provider'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { withCookies } from '@/hooks/with-cookies'
import { Cookie } from '@/lib/storage'

export default async ({ children }: React.PropsWithChildren) => {
  const { getCookie } = withCookies()
  const defaultOpen = await getCookie<boolean>(Cookie.SidebarOpen, false)

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <div className="w-full">
        <header
          className={`
            sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b border-gray-200 bg-white px-4
            dark:border-gray-800 dark:bg-gray-950
          `}
        >
          <SidebarTrigger className="-ml-1" />
        </header>
        <main>{children}</main>
      </div>
    </SidebarProvider>
  )
}
