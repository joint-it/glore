import { AppSidebar } from '@/components/blocks'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/tooltip'
import { getCookie } from '@/hooks/server'

export default async ({ children }: React.PropsWithChildren) => {
  const defaultSidebarOpen = await getCookie('sidebarOpen', false)

  return (
    <SidebarProvider defaultOpen={defaultSidebarOpen}>
      <AppSidebar />
      <div className="w-full">
        <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b border-gray-200 bg-white px-4 dark:border-gray-800 dark:bg-gray-950">
          <SidebarTrigger className="-ml-1" />
        </header>
        <main>{children}</main>
      </div>
    </SidebarProvider>
  )
}
