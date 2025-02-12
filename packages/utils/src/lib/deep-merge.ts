import type { AnyObject } from '@/types'

/**
 * Deep merges a target object with one or more source objects.
 */
export const deepMerge = <P extends AnyObject>(target: P, ...sources: P[]): P => {
  if (!sources.length) return target

  for (const [key, value] of Object.entries(sources.shift() ?? [])) {
    if (!value) continue

    if (!target[key]) {
      Object.assign(target, { [key]: {} })
      continue
    }
    if (value.constructor === Object || (value.constructor === Array && value.find(v => v.constructor === Object))) {
      deepMerge(target[key], value)
      continue
    }
    if (value.constructor === Array) {
      Object.assign(target, {
        [key]: value.find(v => v.constructor === Array) ? target[key].concat(value) : [...new Set([...target[key], ...value])],
      })
      continue
    }

    Object.assign(target, { [key]: value })
  }

  return target
}
