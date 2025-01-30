export interface AnyFunction {
  (...args: any): any
}

export interface AnyObject {
  [key: string]: any
}

export type StringToBoolean<T> = T extends 'true' | 'false' ? boolean : T
