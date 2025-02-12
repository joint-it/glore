const NODE_ENV = process.env.NODE_ENV

/**
 * Application environment.
 */
export const Env = {
  SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL!,
  isAnalyze: process.env.ANALYZE === 'true',
  isDevelopment: NODE_ENV === 'development',
  isProduction: NODE_ENV === 'production',
} as const
