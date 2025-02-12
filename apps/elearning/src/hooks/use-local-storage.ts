'use client'

import { useCallback, useMemo, type Dispatch } from 'react'

import { isServer } from '@joint-it/utils'

import { type LocalStorageItem } from '@/lib/storage'
import { slug } from 'config/app.json'

export const useLocalStorage = <T>(
  item: LocalStorageItem,
  initialValue?: T,
  options = {
    prefix: slug,
  },
): [T | undefined, Dispatch<T>, () => void] => {
  const key = useMemo(() => (options?.prefix ? `${options.prefix}:${item}` : item), [item, options?.prefix])

  const storedValue = useMemo(() => {
    if (isServer()) return initialValue
    const raw = window.localStorage.getItem(key)
    if (!raw) return initialValue
    return JSON.parse(raw) as T
  }, [key, initialValue])

  const setValue = useCallback(
    (value: T) => {
      if (isServer()) return
      window.localStorage.setItem(key, JSON.stringify(value))
    },
    [key],
  )

  const removeValue = useCallback(() => {
    if (isServer()) return
    window.localStorage.removeItem(key)
  }, [key])

  return [storedValue, setValue, removeValue]
}
