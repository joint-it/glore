import { createBrowserClient } from '@supabase/ssr'

import Env from '@/lib/env'

export const createClient = () => createBrowserClient(Env.SUPABASE_URL, Env.SUPABASE_ANON_KEY)
