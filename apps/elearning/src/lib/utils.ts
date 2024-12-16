import { redirect } from 'next/navigation'

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge class names with Tailwind CSS and clsx.
 */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

/**
 * Redirects to a specified path with an encoded message as a query parameter.
 */
export const encodedRedirect = (type: 'error' | 'success', path: string, message: string) =>
  redirect(`${path}?${type}=${encodeURIComponent(message)}`)

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
