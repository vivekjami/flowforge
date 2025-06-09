export interface User {
  id: string
  email: string
  full_name?: string
  company?: string
  role?: string
  onboarding_completed: boolean
  subscription_tier: 'free' | 'pro' | 'enterprise'
  created_at: string
  updated_at: string
}

export interface Workflow {
  id: string
  user_id: string
  name: string
  description?: string
  status: 'active' | 'paused' | 'archived'
  ai_insights: Record<string, any>
  metadata: Record<string, any>
  created_at: string
  updated_at: string
}

export interface Integration {
  id: string
  user_id: string
  platform: 'slack' | 'github' | 'notion' | 'jira' | 'figma' | 'linear'
  status: 'connected' | 'disconnected' | 'error'
  access_token?: string
  refresh_token?: string
  metadata: Record<string, any>
  last_sync?: string
  created_at: string
  updated_at: string
}

export interface WorkflowEvent {
  id: string
  workflow_id: string
  event_type: string
  event_data: Record<string, any>
  timestamp: string
}

export interface AIRecommendation {
  id: string
  user_id: string
  workflow_id?: string
  recommendation_type: 'optimization' | 'bottleneck' | 'automation' | 'integration'
  title: string
  description: string
  confidence_score: number
  status: 'pending' | 'accepted' | 'dismissed'
  metadata: Record<string, any>
  created_at: string
}

export interface PricingTier {
  id: string
  name: string
  price: number
  description: string
  features: string[]
  limitations: string[]
  cta: string
  popular: boolean
}

export interface Feature {
  id: string
  title: string
  description: string
  icon: string
  benefits: string[]
}

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  avatar: string
  content: string
  rating: number
}

export interface IntegrationConfig {
  name: string
  icon: string
  category: string
  oauth_url?: string
  scopes?: string[]
}

export interface WorkflowAnalysis {
  workflow_id: string
  health_score: number
  bottlenecks: string[]
  recommendations: string[]
  efficiency_metrics: {
    completion_rate: number
    average_duration: number
    error_rate: number
  }
  predictions: {
    next_bottleneck?: string
    confidence: number
    estimated_date?: string
  }
}

export interface TeamMetrics {
  team_id: string
  productivity_score: number
  active_workflows: number
  completed_tasks: number
  time_saved_hours: number
  efficiency_trend: 'up' | 'down' | 'stable'
}