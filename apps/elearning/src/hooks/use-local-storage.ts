'use client'

import { useCallback, useMemo, type Dispatch } from 'react'

import { type Profile } from '@/services/db'
import app from '#/config/app.json'

declare interface AppStorage {
  user_profile: Profile
}

export interface UseLocalStorageOptions {
  prefix?: string
}

const IS_SERVER = typeof window === 'undefined'

export const useLocalStorage = <T>(
  key: string,
  initialValue?: T,
  options?: UseLocalStorageOptions,
): [T | undefined, Dispatch<T>, () => void] => {
  key = useMemo(() => (options?.prefix ? `${options.prefix}:${key}` : key), [key, options?.prefix])

  const storedValue = useMemo(() => {
    if (IS_SERVER) return initialValue
    const raw = window.localStorage.getItem(key)
    if (!raw) return initialValue
    return JSON.parse(raw) as T
  }, [key, initialValue])

  const setValue = useCallback(
    (value: T) => {
      if (IS_SERVER) return
      window.localStorage.setItem(key, JSON.stringify(value))
    },
    [key],
  )

  const removeValue = useCallback(() => {
    if (IS_SERVER) return
    window.localStorage.removeItem(key)
  }, [key])

  return [storedValue, setValue, removeValue]
}

export const useAppStorage = <T>(key: keyof AppStorage, initialValue?: T) =>
  useLocalStorage(key, initialValue, { prefix: app.id })
