'use client'

import { createBrowserClient } from '@supabase/ssr'

import Env from '@/lib/env'
import { type Database } from '@/services/db/types'

export const useDB = () => createBrowserClient<Database>(Env.SUPABASE_URL, Env.SUPABASE_ANON_KEY)
