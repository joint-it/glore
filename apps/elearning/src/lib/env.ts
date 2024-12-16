/**
 * Default values of the application.
 */
export const Defaults = {
  PORT: 3333,
}

const HOST = process.env.NEXT_PUBLIC_HOST || 'localhost'
const PORT = process.env.NEXT_PUBLIC_PORT || Defaults.PORT
const NODE_ENV = process.env.NODE_ENV
const PROTOCOL = NODE_ENV === 'production' ? 'https' : 'http'

/**
 * Environment variables of the application.
 */
const Env = {
  HOST,
  NODE_ENV,
  PORT,
  SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL!,
  URL: `${PROTOCOL}://${HOST}:${PORT}`,
}

export default Env
