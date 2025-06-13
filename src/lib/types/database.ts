// src/lib/types/database.ts
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
          avatar_url: string | null
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
          avatar_url?: string | null
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
          avatar_url?: string | null
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
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}