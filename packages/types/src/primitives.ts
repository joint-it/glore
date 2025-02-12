export type StringOrNumber = string | number

export type StringToBoolean<T> = T extends 'true' | 'false' ? boolean : T

export type ToString<T> = T extends string ? T : string
