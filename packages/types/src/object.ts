export type AnyObject = Record<string, any>

export type AnyKey = string | number | symbol

export interface Recursive<T> {
  [key: string]: Recursive<T> | T
}
