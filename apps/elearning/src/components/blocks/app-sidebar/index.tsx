'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'

import { AudioWaveformIcon, CommandIcon, GalleryVerticalEndIcon } from 'lucide-react'

import { OrgSwitcher } from '@/components/blocks/app-sidebar/org-switcher'
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/components/ui/sidebar'
import { useDB } from '@/hooks/use-db'
import { useNavigation } from '@/hooks/use-navigation'
import { type Profile, type User } from '@/services/db'

import { NavLearn } from './nav-learn'
import { NavUser } from './nav-user'

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  user: User | null
}

export const AppSidebar = ({ user, ...props }: AppSidebarProps) => {
  const { pages } = useNavigation()
  const db = useDB()

  const [profile, setProfile] = useState<Profile | undefined>(undefined)

  const orgs = useMemo(
    () => [
      {
        name: 'Acme Inc',
        logo: GalleryVerticalEndIcon,
        role: 'Learner',
      },
      {
        name: 'Acme Corp.',
        logo: AudioWaveformIcon,
        role: 'Tutor',
      },
      {
        name: 'Evil Corp.',
        logo: CommandIcon,
        role: 'Admin',
      },
    ],
    [],
  )

  const setUserProfile = useCallback(async () => {
    if (!user?.id) return

    const { data, error, status } = await db.from('profiles').select().eq('id', user.id).single()

    if (error && status !== 406) {
      console.error(error)
      throw error
    }

    if (data) {
      setProfile({
        ...data,
        name: `${data.first_name} ${data.last_name}`,
      })
    }
  }, [db, user?.id])

  useEffect(() => {
    void setUserProfile()
  }, [setUserProfile])

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <OrgSwitcher orgs={orgs} />
      </SidebarHeader>
      <SidebarContent>
        <NavLearn items={pages} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser auth={db.auth} profile={profile} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
