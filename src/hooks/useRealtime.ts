// src/hooks/useRealtime.ts
'use client'

import { useEffect, useRef } from 'react'
import { createBrowserClient } from '@/lib/supabase/client'
import { useAuth } from './useAuth'
import type { RealtimeChannel } from '@supabase/supabase-js'

export function useRealtime() {
  const { user } = useAuth()
  const supabase = createBrowserClient()
  const channelsRef = useRef<RealtimeChannel[]>([])

  useEffect(() => {
    return () => {
      // Cleanup all channels on unmount
      channelsRef.current.forEach(channel => {
        supabase.removeChannel(channel)
      })
      channelsRef.current = []
    }
  }, [])

  const subscribeToWorkflows = (callback: (payload: unknown) => void) => {
    if (!user) return null

    const channel = supabase
      .channel('workflows')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'workflows',
          filter: `user_id=eq.${user.id}`
        },
        callback
      )
      .subscribe()

    channelsRef.current.push(channel)
    return channel
  }

  const subscribeToIntegrations = (callback: (payload: unknown) => void) => {
    if (!user) return null

    const channel = supabase
      .channel('integrations')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'integrations',
          filter: `user_id=eq.${user.id}`
        },
        callback
      )
      .subscribe()

    channelsRef.current.push(channel)
    return channel
  }

  const subscribeToRecommendations = (callback: (payload: unknown) => void) => {
    if (!user) return null

    const channel = supabase
      .channel('ai_recommendations')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'ai_recommendations',
          filter: `user_id=eq.${user.id}`
        },
        callback
      )
      .subscribe()

    channelsRef.current.push(channel)
    return channel
  }

  const unsubscribe = (channel: RealtimeChannel) => {
    supabase.removeChannel(channel)
    channelsRef.current = channelsRef.current.filter(c => c !== channel)
  }

  return {
    subscribeToWorkflows,
    subscribeToIntegrations,
    subscribeToRecommendations,
    unsubscribe
  }
}