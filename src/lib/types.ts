
// src/lib/supabase/types.ts
export interface Database {
  public: {
    Tables: {
      user_profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          company: string | null
          role: string | null
          avatar_url: string | null
          onboarding_completed: boolean
          subscription_tier: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          company?: string | null
          role?: string | null
          avatar_url?: string | null
          onboarding_completed?: boolean
          subscription_tier?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          company?: string | null
          role?: string | null
          avatar_url?: string | null
          onboarding_completed?: boolean
          subscription_tier?: string
          created_at?: string
          updated_at?: string
        }
      }
      workflows: {
        Row: {
          id: string
          user_id: string
          name: string
          description: string | null
          status: string
          ai_insights: Record<string, unknown>
          metadata: Record<string, unknown>
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          description?: string | null
          status?: string
          ai_insights?: Record<string, unknown>
          metadata?: Record<string, unknown>
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          description?: string | null
          status?: string
          ai_insights?: Record<string, unknown>
          metadata?: Record<string, unknown>
          created_at?: string
          updated_at?: string
        }
      }
      integrations: {
        Row: {
          id: string
          user_id: string
          platform: string
          status: string
          access_token: string | null
          refresh_token: string | null
          metadata: Record<string, unknown>
          last_sync: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          platform: string
          status?: string
          access_token?: string | null
          refresh_token?: string | null
          metadata?: Record<string, unknown>
          last_sync?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          platform?: string
          status?: string
          access_token?: string | null
          refresh_token?: string | null
          metadata?: Record<string, unknown>
          last_sync?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      ai_recommendations: {
        Row: {
          id: string
          user_id: string
          workflow_id: string | null
          recommendation_type: string
          title: string
          description: string
          confidence_score: number | null
          status: string
          metadata: Record<string, unknown>
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          workflow_id?: string | null
          recommendation_type: string
          title: string
          description: string
          confidence_score?: number | null
          status?: string
          metadata?: Record<string, unknown>
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          workflow_id?: string | null
          recommendation_type?: string
          title?: string
          description?: string
          confidence_score?: number | null
          status?: string
          metadata?: Record<string, unknown>
          created_at?: string
        }
      }
    }
  }
}