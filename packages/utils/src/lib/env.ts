/**
 * Error thrown when an environment variable is not defined.
 */
export class EnvError extends Error {
  constructor(key: string) {
    super(`Environment variable ${key} is not defined`)
    this.name = 'EnvError'
  }
}

/**
 * Get the value of an environment variable or throw an error if not defined.
 */
export const env = (key: string, defaultValue?: any): string => {
  const value = process.env[key] || (defaultValue as string)
  if (!value) throw new EnvError(key)
  return String(value)
}

/**
 * Checks if the current environment is production.
 */
export const isProduction = process.env.NODE_ENV === 'production'
