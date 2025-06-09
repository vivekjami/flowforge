export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

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
          onboarding_completed: boolean
          subscription_tier: string
          metadata: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          company?: string | null
          role?: string | null
          onboarding_completed?: boolean
          subscription_tier?: string
          metadata?: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          company?: string | null
          role?: string | null
          onboarding_completed?: boolean
          subscription_tier?: string
          metadata?: Json
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
          ai_insights: Json
          metadata: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          description?: string | null
          status?: string
          ai_insights?: Json
          metadata?: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          description?: string | null
          status?: string
          ai_insights?: Json
          metadata?: Json
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
          metadata: Json
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
          metadata?: Json
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
          metadata?: Json
          last_sync?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      workflow_events: {
        Row: {
          id: string
          workflow_id: string
          event_type: string
          event_data: Json
          timestamp: string
        }
        Insert: {
          id?: string
          workflow_id: string
          event_type: string
          event_data?: Json
          timestamp?: string
        }
        Update: {
          id?: string
          workflow_id?: string
          event_type?: string
          event_data?: Json
          timestamp?: string
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
          metadata: Json
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
          metadata?: Json
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
          metadata?: Json
          created_at?: string
        }
      }
    }
    Views: {
      workflow_analytics: {
        Row: {
          id: string | null
          name: string | null
          status: string | null
          health_score: string | null
          total_events: number | null
          events_last_24h: number | null
          last_activity: string | null
          created_at: string | null
          updated_at: string | null
        }
      }
      user_dashboard_stats: {
        Row: {
          user_id: string | null
          email: string | null
          total_workflows: number | null
          active_workflows: number | null
          connected_integrations: number | null
          pending_recommendations: number | null
          total_events: number | null
          events_last_week: number | null
        }
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}