'use client'

import { UserProfileDropdown } from '@/components/blocks/user-profile-dropdown'
import { Button } from '@/components/ui/button'
import { IconChevronsUpDown } from '@/components/ui/icon'
import { displayName } from '@/lib/utils'
import { focusRing } from '@/theme/styles'
import { cn } from '@/theme/utils'

interface UserProfileProps {}

const UserProfile = () => (
  <UserProfileDropdown>
    <Button
      aria-label="User settings"
      className={cn(
        `
          group flex w-full items-center justify-between rounded-md px-1 py-2 text-sm font-medium text-gray-900
          data-[state=open]:bg-gray-200/50 data-[state=open]:dark:bg-gray-900
          hover:bg-gray-200/50 hover:dark:bg-gray-800/50
        `,
        focusRing,
      )}
      variant="ghost"
    >
      <span className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className={`
            flex size-8 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white text-xs text-gray-700
            dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300
          `}
        >
          {'ES'}
        </span>
        <span>{'Emma Stone'}</span>
      </span>
      <IconChevronsUpDown
        aria-hidden="true"
        className="size-4 shrink-0 text-gray-500 group-hover:text-gray-700 group-hover:dark:text-gray-400"
      />
    </Button>
  </UserProfileDropdown>
)
UserProfile.displayName = displayName('UserProfile')

export { UserProfile, type UserProfileProps }
