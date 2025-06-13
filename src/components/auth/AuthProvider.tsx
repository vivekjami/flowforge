// src/components/auth/AuthProvider.tsx
'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import { UserProfile } from '@/lib/types'

interface AuthContextType {
  user: User | null
  profile: UserProfile | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error: unknown }>
  signUp: (email: string, password: string, fullName: string, company?: string, role?: string) => Promise<{ error: unknown }>
  signInWithGoogle: () => Promise<{ error: unknown }>
  signInWithGitHub: () => Promise<{ error: unknown }>
  signInWithMicrosoft: () => Promise<{ error: unknown }>
  signOut: () => Promise<void>
  updateProfile: (updates: Partial<UserProfile>) => Promise<{ error: unknown}>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  // Check if Supabase is properly configured
  const isSupabaseConfigured = process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  useEffect(() => {
    if (!isSupabaseConfigured) {
      console.warn('Supabase not configured. Authentication features will be disabled.')
      setLoading(false)
      return
    }

    // Only initialize Supabase if properly configured
    const initializeAuth = async () => {
      try {
        const { createBrowserClient } = await import('@/lib/supabase/client')
        const supabase = createBrowserClient()

        // Get initial session
        const { data: { session } } = await supabase.auth.getSession()
        setUser(session?.user ?? null)
        
        if (session?.user) {
          await fetchUserProfile(session.user.id)
        }
        
        setLoading(false)

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
          async (event, session) => {
            setUser(session?.user ?? null)
            
            if (session?.user) {
              await fetchUserProfile(session.user.id)
            } else {
              setProfile(null)
            }
            
            setLoading(false)
          }
        )

        return () => subscription.unsubscribe()
      } catch (error) {
        console.error('Failed to initialize auth:', error)
        setLoading(false)
      }
    }

    initializeAuth()
  }, [isSupabaseConfigured])

  const fetchUserProfile = async (userId: string) => {
    if (!isSupabaseConfigured) return

    try {
      const { createBrowserClient } = await import('@/lib/supabase/client')
      const supabase = createBrowserClient()
      
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', userId)
        .single()

      if (error) {
        console.error('Error fetching user profile:', error)
        return
      }

      setProfile(data)
    } catch (error) {
      console.error('Error fetching user profile:', error)
    }
  }

  const signIn = async (email: string, password: string) => {
    if (!isSupabaseConfigured) {
      return { error: 'Supabase not configured' }
    }

    try {
      const { createBrowserClient } = await import('@/lib/supabase/client')
      const supabase = createBrowserClient()
      
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      return { error }
    } catch (error) {
      return { error }
    }
  }

  const signUp = async (email: string, password: string, fullName: string, company?: string, role?: string) => {
    if (!isSupabaseConfigured) {
      return { error: 'Supabase not configured' }
    }

    try {
      const { createBrowserClient } = await import('@/lib/supabase/client')
      const supabase = createBrowserClient()
      
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            company,
            role,
          },
        },
      })
      return { error }
    } catch (error) {
      return { error }
    }
  }

  const signInWithGoogle = async () => {
    if (!isSupabaseConfigured) {
      return { error: 'Supabase not configured' }
    }

    try {
      const { createBrowserClient } = await import('@/lib/supabase/client')
      const supabase = createBrowserClient()
      
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })
      return { error }
    } catch (error) {
      return { error }
    }
  }

  const signInWithGitHub = async () => {
    if (!isSupabaseConfigured) {
      return { error: 'Supabase not configured' }
    }

    try {
      const { createBrowserClient } = await import('@/lib/supabase/client')
      const supabase = createBrowserClient()
      
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })
      return { error }
    } catch (error) {
      return { error }
    }
  }

  const signInWithMicrosoft = async () => {
    if (!isSupabaseConfigured) {
      return { error: 'Supabase not configured' }
    }

    try {
      const { createBrowserClient } = await import('@/lib/supabase/client')
      const supabase = createBrowserClient()
      
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'azure',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })
      return { error }
    } catch (error) {
      return { error }
    }
  }

  const signOut = async () => {
    if (!isSupabaseConfigured) return

    try {
      const { createBrowserClient } = await import('@/lib/supabase/client')
      const supabase = createBrowserClient()
      
      await supabase.auth.signOut()
      setUser(null)
      setProfile(null)
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!user || !isSupabaseConfigured) return { error: 'No user logged in or Supabase not configured' }

    try {
      const { createBrowserClient } = await import('@/lib/supabase/client')
      const supabase = createBrowserClient()
      
      const { error } = await supabase
        .from('user_profiles')
        .update(updates)
        .eq('id', user.id)

      if (!error) {
        setProfile(prev => prev ? { ...prev, ...updates } : null)
      }

      return { error }
    } catch (error) {
      return { error }
    }
  }

  // Show a message if Supabase is not configured
  if (!isSupabaseConfigured) {
    return (
      <AuthContext.Provider value={{
        user: null,
        profile: null,
        loading: false,
        signIn: async () => ({ error: 'Supabase not configured' }),
        signUp: async () => ({ error: 'Supabase not configured' }),
        signInWithGoogle: async () => ({ error: 'Supabase not configured' }),
        signInWithGitHub: async () => ({ error: 'Supabase not configured' }),
        signInWithMicrosoft: async () => ({ error: 'Supabase not configured' }),
        signOut: async () => {},
        updateProfile: async () => ({ error: 'Supabase not configured' }),
      }}>
        {children}
      </AuthContext.Provider>
    )
  }

  const value = {
    user,
    profile,
    loading,
    signIn,
    signUp,
    signInWithGoogle,
    signInWithGitHub,
    signInWithMicrosoft,
    signOut,
    updateProfile,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}