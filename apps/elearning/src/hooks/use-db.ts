'use client'

import { createBrowserClient } from '@supabase/ssr'

import { env } from '@/lib/env'
import { type Database } from '@/services/db'

export const useDB = () => createBrowserClient<Database>(env.SUPABASE_URL, env.SUPABASE_ANON_KEY)
