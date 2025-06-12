import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import type { Database } from '@/lib/types/database'

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const supabase = createRouteHandlerClient<Database>({ cookies })
    
    try {
      const { data, error } = await supabase.auth.exchangeCodeForSession(code)
      
      if (error) {
        console.error('Auth callback error:', error)
        return NextResponse.redirect(`${requestUrl.origin}/auth/login?error=auth_error`)
      }

      if (data.user) {
        // Check if user profile exists, create if not
        const { data: profile, error: profileError } = await supabase
          .from('user_profiles')
          .select('id, onboarding_completed')
          .eq('id', data.user.id)
          .single()

        if (profileError && profileError.code === 'PGRST116') {
          // Profile doesn't exist, create it
          const { error: createError } = await supabase
            .from('user_profiles')
            .insert({
              id: data.user.id,
              email: data.user.email || '',
              full_name: data.user.user_metadata?.full_name || data.user.user_metadata?.name || null,
              avatar_url: data.user.user_metadata?.avatar_url || null,
            })

          if (createError) {
            console.error('Error creating user profile:', createError)
          }
          
          // Redirect to onboarding for new users
          return NextResponse.redirect(`${requestUrl.origin}/onboarding`)
        } else if (profile && !profile.onboarding_completed) {
          // Existing user who hasn't completed onboarding
          return NextResponse.redirect(`${requestUrl.origin}/onboarding`)
        }
      }
    } catch (error) {
      console.error('Unexpected auth callback error:', error)
      return NextResponse.redirect(`${requestUrl.origin}/auth/login?error=callback_error`)
    }
  }

  // Redirect to dashboard on successful auth
  return NextResponse.redirect(`${requestUrl.origin}/dashboard`)
}