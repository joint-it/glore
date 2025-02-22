export type OrArray<T> = T | T[]

export type AnyFunction = (...args: any) => any

export type AnyObject = Record<string, any>

export type AnyKey = string | number | symbol

export type NonNullablePartial<T> = Partial<{
  [K in keyof T]: NonNullable<T[K]>
}>

export type NullToUndefined<T> = {
  [K in keyof T]: null extends T[K] ? NonNullable<T[K]> | undefined : T[K]
}

export interface Recursive<T> {
  [key: string]: Recursive<T> | T
}

export type StringOrNumber = string | number

export type StringToBoolean<T> = T extends 'true' | 'false' ? boolean : T

export type ToString<T> = T extends string ? T : string
