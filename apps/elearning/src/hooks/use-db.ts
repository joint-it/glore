import { browserClient, serverClient } from '@/db/client'

export const useDB = async (environment: 'browser' | 'server' = 'server') =>
  await (environment === 'browser' ? browserClient() : serverClient())
