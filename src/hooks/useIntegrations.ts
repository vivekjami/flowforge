// src/hooks/useIntegrations.ts
'use client'

import { useState, useEffect } from 'react'
import { createBrowserClient } from '@/lib/supabase/client'
import { useAuth } from './useAuth'
import type { Integration } from '@/lib/types'

export function useIntegrations() {
  const [integrations, setIntegrations] = useState<Integration[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { user } = useAuth()
  const supabase = createBrowserClient()

  useEffect(() => {
    if (user) {
      fetchIntegrations()
    }
  }, [user])

  const fetchIntegrations = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('integrations')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false })

      if (error) throw error
      setIntegrations(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch integrations')
    } finally {
      setLoading(false)
    }
  }

  const getIntegrationByPlatform = (platform: string) => {
    return integrations.find(integration => integration.platform === platform)
  }

  const isConnected = (platform: string) => {
    const integration = getIntegrationByPlatform(platform)
    return integration?.status === 'connected'
  }

  const updateIntegrationStatus = async (platform: string, status: string) => {
    try {
      const { data, error } = await supabase
        .from('integrations')
        .update({ status })
        .eq('user_id', user?.id)
        .eq('platform', platform)
        .select()
        .single()

      if (error) throw error
      setIntegrations(prev => 
        prev.map(integration => 
          integration.platform === platform ? data : integration
        )
      )
      return { data, error: null }
    } catch (err) {
      const error = err instanceof Error ? err.message : 'Failed to update integration'
      return { data: null, error }
    }
  }

  const disconnectIntegration = async (platform: string) => {
    return updateIntegrationStatus(platform, 'disconnected')
  }

  const reconnectIntegration = async (platform: string) => {
    return updateIntegrationStatus(platform, 'connected')
  }

  return {
    integrations,
    loading,
    error,
    getIntegrationByPlatform,
    isConnected,
    updateIntegrationStatus,
    disconnectIntegration,
    reconnectIntegration,
    refetch: fetchIntegrations
  }
}