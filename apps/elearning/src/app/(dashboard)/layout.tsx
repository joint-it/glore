import { AppHeader } from '@/components/blocks/app-header'
import { AppSidebar } from '@/components/blocks/app-sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { getDB } from '@/services/db'

export default async ({ children }: React.PropsWithChildren) => {
  const { auth } = await getDB()
  const { data } = await auth.getUser()

  return (
    <SidebarProvider>
      <AppSidebar user={data.user} />
      <SidebarInset>
        <AppHeader />
        <main>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">{children}</div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
