// src/lib/supabase/client.ts
import { createClientComponentClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from './types'

// Client-side Supabase client
export const createClient = () => createClientComponentClient<Database>()

// Server-side Supabase client
export const createServerClient = () => {
  const cookieStore = cookies()
  return createServerComponentClient<Database>({ cookies: () => cookieStore })
}