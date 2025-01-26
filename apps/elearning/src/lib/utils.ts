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
 * Returns the RGB values as a normalized array.
 */
export const rgb = (r: number, g: number, b: number): [number, number, number] => [r / 255, g / 255, b / 255]
