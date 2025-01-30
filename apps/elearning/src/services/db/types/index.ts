import type { Database as SupabaseDatabase, Tables } from './database.types'

export interface Database extends SupabaseDatabase {}

export interface Profile extends Tables<'profiles'> {}
