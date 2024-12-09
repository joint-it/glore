import { redirect } from 'next/navigation'

/**
 * Redirects to a specified path with an encoded message as a query parameter.
 *
 * @param {('error' | 'success')} type - The type of message, either 'error' or 'success'.
 * @param {string} path - The path to redirect to.
 * @param {string} message - The message to be encoded and added as a query parameter.
 * @returns {never} This function doesn't return as it triggers a redirect.
 */
export const encodedRedirect = (type: 'error' | 'success', path: string, message: string) =>
  redirect(`${path}?${type}=${encodeURIComponent(message)}`)

/**
 * Parses a value as a string if it is a string or a number, otherwise returns "0".
 */
export const normalizeSpacing = (value: any) => {
  if (typeof value === 'string' || typeof value === 'number') return String(value)
  return '0'
}
