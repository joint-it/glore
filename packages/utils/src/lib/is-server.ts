/**
 * Checks if the code is running on the server.
 */
export const isServer = () => typeof window === 'undefined'
