import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind CSS class names.
 */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

/**
 * Check if the email is valid.
 */
export const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

/**
 * Check if the password is valid.
 */
export const isValidPassword = (password: string) =>
  password.length >= 8 &&
  password.length <= 20 &&
  /[a-z]/.test(password) &&
  /[A-Z]/.test(password) &&
  /[0-9]/.test(password) &&
  /[^a-zA-Z0-9]/.test(password)

/**
 * Parses a value as a string if it is a string or a number, otherwise returns "0".
 */
export const normalizeSpacing = (value: any) => {
  if (typeof value === 'string' || typeof value === 'number') return String(value)
  return '0'
}

/**
 * Returns the RGB values as a normalized array.
 */
export const rgb = (r: number, g: number, b: number): [number, number, number] => [r / 255, g / 255, b / 255]
