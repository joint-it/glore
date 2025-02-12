import { type Profile } from '@/services/db'
import { type Locale } from '@/services/i18n'

export enum Cookie {
  Locale = 'NEXT_LOCALE',
  SidebarOpen = 'SIDEBAR_OPEN',
}

export interface Cookies {
  [Cookie.Locale]: Locale
  [Cookie.SidebarOpen]: boolean
}

export enum LocalStorageItem {
  Profile = 'profile',
}

export interface LocalStorage {
  [LocalStorageItem.Profile]: Profile
}
