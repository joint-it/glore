export interface AnyFunction {
  (...args: any): any
}

export interface AnyObject {
  [key: string]: any
}

export type StringToBoolean<T> = T extends 'true' | 'false' ? boolean : T

export type SizeBase = 'sm' | 'md' | 'lg'
export type Size = 'xs' | SizeBase | 'xl'
