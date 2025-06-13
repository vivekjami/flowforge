// src/app/(auth)/callback/page.tsx
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@/lib/supabase/client'
import { Loader2 } from 'lucide-react'

export default function AuthCallbackPage() {
  const router = useRouter()
  const supabase = createBrowserClient()

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { data, error } = await supabase.auth.getSession()
        
        if (error) {
          console.error('Auth callback error:', error)
          router.push('/auth/login?error=auth_error')
          return
        }

        if (data.session) {
          // Check if user profile exists
          const { data: profile, error: profileError } = await supabase
            .from('user_profiles')
            .select('id, onboarding_completed')
            .eq('id', data.session.user.id)
            .single()

          if (profileError && profileError.code === 'PGRST116') {
            // Profile doesn't exist, create it
            const { error: createError } = await supabase
              .from('user_profiles')
              .insert({
                id: data.session.user.id,
                email: data.session.user.email || '',
                full_name: data.session.user.user_metadata?.full_name || 
                          data.session.user.user_metadata?.name || null,
                avatar_url: data.session.user.user_metadata?.avatar_url || null,
              })

            if (createError) {
              console.error('Error creating user profile:', createError)
            }
            
            // Redirect to onboarding for new users
            router.push('/onboarding')
            return
          }

          if (profile && !profile.onboarding_completed) {
            // Existing user who hasn't completed onboarding
            router.push('/onboarding')
            return
          }

          // User exists and has completed onboarding
          router.push('/dashboard')
        } else {
          // No session, redirect to login
          router.push('/auth/login')
        }
      } catch (error) {
        console.error('Unexpected auth callback error:', error)
        router.push('/auth/login?error=callback_error')
      }
    }

    handleAuthCallback()
  }, [router, supabase])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
      <div className="text-center space-y-4">
        <Loader2 className="h-8 w-8 animate-spin mx-auto text-indigo-600" />
        <h2 className="text-xl font-semibold text-gray-900">
          Completing sign in...
        </h2>
        <p className="text-gray-600">
          Please wait while we set up your account.
        </p>
      </div>
    </div>
  )
}