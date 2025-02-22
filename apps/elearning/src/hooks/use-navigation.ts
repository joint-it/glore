import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

import { BookCheckIcon, BookOpenIcon, LayoutDashboardIcon, ShieldCheckIcon, type LucideIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

export interface Page {
  icon?: LucideIcon
  isActive?: boolean
  items?: {
    title: string
    path: string
    isActive?: boolean
  }[]
  path: string
  title: string
}

export const useNavigation = () => {
  const pathname = usePathname()
  const t = useTranslations('Navigation')

  const pages: Page[] = useMemo(
    () =>
      [
        {
          title: t('dashboard'),
          path: '/',
          icon: LayoutDashboardIcon,
        },
        {
          title: t('modules'),
          path: '/modules',
          icon: BookCheckIcon,
          items: [
            {
              title: t('modulesInProgress'),
              path: '/modules/in-progress',
            },
            {
              title: t('modulesNotStarted'),
              path: '/modules/new',
            },
            {
              title: t('modulesCompleted'),
              path: '/modules/completed',
            },
            {
              title: t('modulesAll'),
              path: '/modules/all',
            },
          ],
        },
        {
          title: t('certificates'),
          path: '/certificates',
          icon: ShieldCheckIcon,
          items: [
            {
              title: t('certificatesMy'),
              path: '/certificates/list',
            },
            {
              title: t('certificatesUnderReview'),
              path: '/certificates/under-review',
            },
            {
              title: t('certificatesNew'),
              path: '/certificates/new',
            },
          ],
        },
        {
          title: 'Documentation',
          path: '/docs',
          icon: BookOpenIcon,
          items: [
            {
              title: t('documentationIntro'),
              path: '/docs/intro',
            },
            {
              title: t('documentationGetStarted'),
              path: '/docs/get-started',
            },
            {
              title: t('documentationTutorials'),
              path: '/docs/tutorials',
            },
            {
              title: t('documentationChangelog'),
              path: '/docs/changelog',
            },
          ],
        },
      ].map(item => ({
        ...item,
        isActive: pathname === item.path || item.items?.some(subItem => pathname === subItem.path),
        items: item.items?.map(subItem => ({
          ...subItem,
          isActive: pathname === subItem.path,
        })),
      })),
    [pathname, t],
  )

  const page = pages.find(item => item.isActive)
  const subPage = page?.items?.find(subItem => subItem.isActive)

  return { pages, pathname, page, subPage }
}
