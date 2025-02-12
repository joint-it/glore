'use client'

import { Env } from '@/lib/env'
import { type Database } from '@/services/db'
import { createBrowserClient } from '@supabase/ssr'

export const useDB = () => createBrowserClient<Database>(Env.SUPABASE_URL, Env.SUPABASE_ANON_KEY)
