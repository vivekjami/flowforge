// src/hooks/useWorkflows.ts
'use client'

import { useState, useEffect } from 'react'
import { createBrowserClient } from '@/lib/supabase/client'
import { useAuth } from './useAuth'
import type { Workflow } from '@/lib/types'

export function useWorkflows() {
  const [workflows, setWorkflows] = useState<Workflow[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { user } = useAuth()
  const supabase = createBrowserClient()

  useEffect(() => {
    if (user) {
      fetchWorkflows()
    }
  }, [user])

  const fetchWorkflows = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('workflows')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false })

      if (error) throw error
      setWorkflows(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch workflows')
    } finally {
      setLoading(false)
    }
  }

  const createWorkflow = async (workflow: Omit<Workflow, 'id' | 'user_id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('workflows')
        .insert({
          ...workflow,
          user_id: user?.id
        })
        .select()
        .single()

      if (error) throw error
      setWorkflows(prev => [data, ...prev])
      return { data, error: null }
    } catch (err) {
      const error = err instanceof Error ? err.message : 'Failed to create workflow'
      return { data: null, error }
    }
  }

  const updateWorkflow = async (id: string, updates: Partial<Workflow>) => {
    try {
      const { data, error } = await supabase
        .from('workflows')
        .update(updates)
        .eq('id', id)
        .eq('user_id', user?.id)
        .select()
        .single()

      if (error) throw error
      setWorkflows(prev => prev.map(w => w.id === id ? data : w))
      return { data, error: null }
    } catch (err) {
      const error = err instanceof Error ? err.message : 'Failed to update workflow'
      return { data: null, error }
    }
  }

  const deleteWorkflow = async (id: string) => {
    try {
      const { error } = await supabase
        .from('workflows')
        .delete()
        .eq('id', id)
        .eq('user_id', user?.id)

      if (error) throw error
      setWorkflows(prev => prev.filter(w => w.id !== id))
      return { error: null }
    } catch (err) {
      const error = err instanceof Error ? err.message : 'Failed to delete workflow'
      return { error }
    }
  }

  return {
    workflows,
    loading,
    error,
    createWorkflow,
    updateWorkflow,
    deleteWorkflow,
    refetch: fetchWorkflows
  }
}