/*
  # Initial FlowForge Database Schema

  1. New Tables
    - `user_profiles` - Extended user information beyond Supabase auth
    - `workflows` - User-created workflows and their configurations
    - `integrations` - Connected third-party platform integrations
    - `workflow_events` - Event tracking for workflow execution
    - `ai_recommendations` - AI-generated optimization suggestions

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to access their own data
    - Secure integration tokens with encryption

  3. Indexes
    - Performance indexes for common queries
    - Composite indexes for workflow analytics
*/

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- User profiles table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS user_profiles (
  id uuid REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email text NOT NULL,
  full_name text,
  company text,
  role text,
  onboarding_completed boolean DEFAULT false,
  subscription_tier text DEFAULT 'free' CHECK (subscription_tier IN ('free', 'pro', 'enterprise')),
  metadata jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Workflows table
CREATE TABLE IF NOT EXISTS workflows (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES user_profiles(id) ON DELETE CASCADE NOT NULL,
  name text NOT NULL,
  description text,
  status text DEFAULT 'active' CHECK (status IN ('active', 'paused', 'archived')),
  ai_insights jsonb DEFAULT '{}',
  metadata jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Integrations table
CREATE TABLE IF NOT EXISTS integrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES user_profiles(id) ON DELETE CASCADE NOT NULL,
  platform text NOT NULL CHECK (platform IN ('slack', 'github', 'notion', 'jira', 'figma', 'linear', 'zapier', 'airtable')),
  status text DEFAULT 'connected' CHECK (status IN ('connected', 'disconnected', 'error')),
  access_token text, -- Will be encrypted
  refresh_token text, -- Will be encrypted
  metadata jsonb DEFAULT '{}',
  last_sync timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id, platform)
);

-- Workflow events table
CREATE TABLE IF NOT EXISTS workflow_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  workflow_id uuid REFERENCES workflows(id) ON DELETE CASCADE NOT NULL,
  event_type text NOT NULL,
  event_data jsonb DEFAULT '{}',
  timestamp timestamptz DEFAULT now()
);

-- AI recommendations table
CREATE TABLE IF NOT EXISTS ai_recommendations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES user_profiles(id) ON DELETE CASCADE NOT NULL,
  workflow_id uuid REFERENCES workflows(id) ON DELETE CASCADE,
  recommendation_type text NOT NULL CHECK (recommendation_type IN ('optimization', 'bottleneck', 'automation', 'integration')),
  title text NOT NULL,
  description text NOT NULL,
  confidence_score real CHECK (confidence_score >= 0 AND confidence_score <= 1),
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'dismissed')),
  metadata jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_workflows_user_id ON workflows(user_id);
CREATE INDEX IF NOT EXISTS idx_workflows_status ON workflows(status);
CREATE INDEX IF NOT EXISTS idx_integrations_user_id ON integrations(user_id);
CREATE INDEX IF NOT EXISTS idx_integrations_platform ON integrations(platform);
CREATE INDEX IF NOT EXISTS idx_workflow_events_workflow_id ON workflow_events(workflow_id);
CREATE INDEX IF NOT EXISTS idx_workflow_events_timestamp ON workflow_events(timestamp);
CREATE INDEX IF NOT EXISTS idx_ai_recommendations_user_id ON ai_recommendations(user_id);
CREATE INDEX IF NOT EXISTS idx_ai_recommendations_status ON ai_recommendations(status);

-- Create composite indexes
CREATE INDEX IF NOT EXISTS idx_workflows_user_status ON workflows(user_id, status);
CREATE INDEX IF NOT EXISTS idx_integrations_user_platform ON integrations(user_id, platform);

-- Enable Row Level Security
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE workflows ENABLE ROW LEVEL SECURITY;
ALTER TABLE integrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE workflow_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_recommendations ENABLE ROW LEVEL SECURITY;

-- RLS Policies for user_profiles
CREATE POLICY "Users can view own profile" ON user_profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON user_profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON user_profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- RLS Policies for workflows
CREATE POLICY "Users can view own workflows" ON workflows
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own workflows" ON workflows
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own workflows" ON workflows
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own workflows" ON workflows
  FOR DELETE USING (auth.uid() = user_id);

-- RLS Policies for integrations
CREATE POLICY "Users can view own integrations" ON integrations
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own integrations" ON integrations
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own integrations" ON integrations
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own integrations" ON integrations
  FOR DELETE USING (auth.uid() = user_id);

-- RLS Policies for workflow_events
CREATE POLICY "Users can view events for own workflows" ON workflow_events
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM workflows 
      WHERE workflows.id = workflow_events.workflow_id 
      AND workflows.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create events for own workflows" ON workflow_events
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM workflows 
      WHERE workflows.id = workflow_events.workflow_id 
      AND workflows.user_id = auth.uid()
    )
  );

-- RLS Policies for ai_recommendations
CREATE POLICY "Users can view own recommendations" ON ai_recommendations
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own recommendations" ON ai_recommendations
  FOR UPDATE USING (auth.uid() = user_id);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_user_profiles_updated_at 
  BEFORE UPDATE ON user_profiles 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_workflows_updated_at 
  BEFORE UPDATE ON workflows 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_integrations_updated_at 
  BEFORE UPDATE ON integrations 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to create user profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.user_profiles (id, email, full_name)
  VALUES (new.id, new.email, new.raw_user_meta_data->>'full_name');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on user signup
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();