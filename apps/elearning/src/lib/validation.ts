/**
 * Check if the email is valid.
 */
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

/**
 * Check if the username is containing only lowercase letters and non-consecutive dots.
 */
export const isUsername = (username: string) => /^[a-z]+(\.[a-z]+)*$/.test(username)

/**
 * Check if the password is valid.
 */
export const isPassword = (password: string) =>
  password.length >= 8 &&
  password.length <= 20 &&
  /[a-z]/.test(password) &&
  /[A-Z]/.test(password) &&
  /[0-9]/.test(password) &&
  /[^a-zA-Z0-9]/.test(password)
