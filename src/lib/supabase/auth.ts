// src/lib/supabase/auth.ts
import { createClient, createServerClient } from './client'
import { redirect } from 'next/navigation'

export async function getCurrentUser() {
  const supabase = createClient()
  const { data: { user }, error } = await supabase.auth.getUser()
  
  if (error) {
    console.error('Error getting current user:', error)
    return null
  }
  
  return user
}

export async function getCurrentUserServer() {
  const supabase = createServerClient()
  
  try {
    const { data: { user }, error } = await supabase.auth.getUser()
    
    if (error) {
      console.error('Error getting current user on server:', error)
      return null
    }
    
    return user
  } catch (error) {
    console.error('Error in getCurrentUserServer:', error)
    return null
  }
}

export async function getUserProfile(userId: string) {
  const supabase = createClient()
  
  const { data: profile, error } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', userId)
    .single()
  
  if (error) {
    console.error('Error fetching user profile:', error)
    return null
  }
  
  return profile
}

export async function updateUserProfile(userId: string, updates: Record<string, unknown>) {
  const supabase = createClient()
  
  const { data, error } = await supabase
    .from('user_profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single()
  
  if (error) {
    console.error('Error updating user profile:', error)
    throw error
  }
  
  return data
}

export async function signInWithGoogle() {
  const supabase = createClient()
  
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  })
  
  if (error) {
    console.error('Error signing in with Google:', error)
    throw error
  }
  
  return data
}

export async function signInWithGitHub() {
  const supabase = createClient()
  
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  })
  
  if (error) {
    console.error('Error signing in with GitHub:', error)
    throw error
  }
  
  return data
}

export async function signOut() {
  const supabase = createClient()
  
  const { error } = await supabase.auth.signOut()
  
  if (error) {
    console.error('Error signing out:', error)
    throw error
  }
  
  // Redirect to home page
  window.location.href = '/'
}

export async function requireAuth() {
  const user = await getCurrentUserServer()
  
  if (!user) {
    redirect('/auth/login')
  }
  
  return user
}

// Check if user has completed onboarding
export async function checkOnboardingStatus(userId: string) {
  const profile = await getUserProfile(userId)
  return profile?.onboarding_completed || false
}