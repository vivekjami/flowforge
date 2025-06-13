// src/lib/types.ts

// Database schema types
export interface Database {
  public: {
    Tables: {
      user_profiles: {
        Row: UserProfile
        Insert: Omit<UserProfile, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<UserProfile, 'id' | 'created_at'>>
      }
      workflows: {
        Row: Workflow
        Insert: Omit<Workflow, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Workflow, 'id' | 'created_at'>>
      }
      integrations: {
        Row: Integration
        Insert: Omit<Integration, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Integration, 'id' | 'created_at'>>
      }
      workflow_events: {
        Row: WorkflowEvent
        Insert: Omit<WorkflowEvent, 'id' | 'timestamp'>
        Update: Partial<Omit<WorkflowEvent, 'id'>>
      }
      ai_recommendations: {
        Row: AIRecommendation
        Insert: Omit<AIRecommendation, 'id' | 'created_at'>
        Update: Partial<Omit<AIRecommendation, 'id'>>
      }
    }
  }
}

// Core entity types
export interface UserProfile {
  id: string
  email: string
  full_name: string | null
  company: string | null
  role: string | null
  onboarding_completed: boolean
  subscription_tier: 'free' | 'pro' | 'enterprise'
  avatar_url: string | null
  created_at: string
  updated_at: string
}

export interface Workflow {
  id: string
  user_id: string
  name: string
  description: string | null
  status: 'active' | 'inactive' | 'archived'
  ai_insights: WorkflowInsights
  metadata: Record<string, unknown>
  created_at: string
  updated_at: string
}

export interface Integration {
  id: string
  user_id: string
  platform: IntegrationType
  status: 'connected' | 'disconnected' | 'error' | 'pending'
  access_token: string | null
  refresh_token: string | null
  metadata: IntegrationMetadata
  last_sync: string | null
  created_at: string
  updated_at: string
}

export interface WorkflowEvent {
  id: string
  workflow_id: string
  event_type: string
  event_data: Record<string, unknown>
  timestamp: string
}

export interface AIRecommendation {
  id: string
  user_id: string
  workflow_id: string | null
  recommendation_type: 'optimization' | 'integration' | 'automation' | 'alert'
  title: string
  description: string
  confidence_score: number
  status: 'pending' | 'accepted' | 'dismissed' | 'implemented'
  metadata: Record<string, unknown>
  created_at: string
}

// Integration types
export type IntegrationType = 'slack' | 'github' | 'notion'

export interface IntegrationMetadata {
  slack?: {
    team_id: string
    team_name: string
    user_id: string
    channels?: SlackChannel[]
  }
  github?: {
    login: string
    id: number
    repositories?: GitHubRepository[]
    organizations?: GitHubOrganization[]
  }
  notion?: {
    workspace_id: string
    workspace_name: string
    databases?: NotionDatabase[]
  }
}

// Slack types
export interface SlackChannel {
  id: string
  name: string
  is_private: boolean
  is_member: boolean
  topic?: string
  purpose?: string
}

export interface SlackMessage {
  ts: string
  user: string
  text: string
  channel: string
  timestamp: string
}

// GitHub types
export interface GitHubRepository {
  id: number
  name: string
  full_name: string
  private: boolean
  description: string | null
  language: string | null
  default_branch: string
  updated_at: string
}

export interface GitHubOrganization {
  id: number
  login: string
  description: string | null
  avatar_url: string
}

export interface GitHubPullRequest {
  id: number
  number: number
  title: string
  state: 'open' | 'closed' | 'merged'
  created_at: string
  updated_at: string
  merged_at: string | null
  user: {
    login: string
    avatar_url: string
  }
  base: {
    ref: string
  }
  head: {
    ref: string
  }
}

// Notion types
export interface NotionDatabase {
  id: string
  title: string
  description: string | null
  properties: Record<string, unknown>
  created_time: string
  last_edited_time: string
}

export interface NotionPage {
  id: string
  title: string
  created_time: string
  last_edited_time: string
  properties: Record<string, unknown>
}

// AI and workflow analysis types
export interface WorkflowInsights {
  efficiency_score?: number
  bottlenecks?: string[]
  recommendations?: string[]
  patterns?: WorkflowPattern[]
  last_analyzed?: string
}

export interface WorkflowPattern {
  type: 'communication' | 'code' | 'documentation' | 'meetings'
  frequency: number
  description: string
  confidence: number
}

export interface WorkflowAnalysis {
  user_id: string
  connected_tools: IntegrationType[]
  patterns: WorkflowPattern[]
  recommendations: AIRecommendation[]
  efficiency_metrics: {
    overall_score: number
    communication_score: number
    productivity_score: number
    collaboration_score: number
  }
  bottlenecks: {
    type: string
    description: string
    impact: 'low' | 'medium' | 'high'
    suggested_actions: string[]
  }[]
}

// Authentication types
export interface AuthUser {
  id: string
  email: string
  user_metadata: {
    full_name?: string
    avatar_url?: string
  }
}

// API response types
export interface ApiResponse<T = unknown> {
  data?: T
  error?: string
  message?: string
  success: boolean
}

// Form types
export interface LoginFormData {
  email: string
  password: string
}

export interface SignupFormData {
  email: string
  password: string
  full_name: string
  company?: string
  role?: string
}

export interface OnboardingData {
  company: string
  role: string
  team_size: string
  primary_goals: string[]
  current_tools: IntegrationType[]
}

// Dashboard types
export interface DashboardStats {
  total_workflows: number
  active_integrations: number
  efficiency_score: number
  recommendations_count: number
  recent_activity: ActivityItem[]
}

export interface ActivityItem {
  id: string
  type: 'workflow_created' | 'integration_connected' | 'recommendation_generated' | 'insight_discovered'
  title: string
  description: string
  timestamp: string
  metadata?: Record<string, unknown>
}

// Settings types
export interface UserSettings {
  notifications: {
    email_enabled: boolean
    slack_enabled: boolean
    recommendation_alerts: boolean
    weekly_reports: boolean
  }
  privacy: {
    data_sharing: boolean
    analytics_tracking: boolean
  }
  integrations: {
    auto_sync: boolean
    sync_frequency: 'realtime' | 'hourly' | 'daily'
  }
}

// OAuth types
export interface OAuthConfig {
  clientId: string
  clientSecret: string
  redirectUri: string
  scopes: string[]
}

export interface OAuthTokens {
  access_token: string
  refresh_token?: string
  expires_at?: number
  token_type: string
  scope?: string
}