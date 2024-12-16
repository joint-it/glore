// eslint-disable-next-line no-restricted-imports
import type en from '../../translations/en.json'

type Messages = typeof en

declare global {
  interface IntlMessages extends Messages {}
}

export interface AnyObject {
  [key: string]: any
}

export type SetDifference<A, B> = A extends B ? never : A

export type Diff<T extends object, U extends object> = Pick<T, SetDifference<keyof T, keyof U>>
