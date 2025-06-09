/*
  # Demo Data for FlowForge

  1. Sample Data
    - Demo user profiles
    - Sample workflows
    - Example integrations
    - AI recommendations
    - Workflow events

  2. Purpose
    - Showcase platform capabilities
    - Provide realistic demo experience
    - Test data for development
*/

-- Insert demo user profiles (these will be created when users sign up via auth)
-- This is just for reference - actual profiles are created via trigger

-- Insert sample workflows for demo purposes
INSERT INTO workflows (id, user_id, name, description, status, ai_insights, metadata) VALUES
  (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000001', -- Demo user ID
    'Code Review Workflow',
    'Automated code review process from PR creation to merge',
    'active',
    '{"health_score": 0.85, "bottlenecks": ["review_time"], "efficiency": 0.78}',
    '{"tools": ["github", "slack"], "team_size": 8, "avg_pr_time": "2.5 days"}'
  ),
  (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000001',
    'Content Publishing Pipeline',
    'From draft creation in Notion to publication and promotion',
    'active',
    '{"health_score": 0.92, "bottlenecks": [], "efficiency": 0.89}',
    '{"tools": ["notion", "slack"], "content_types": ["blog", "docs"], "avg_publish_time": "3 days"}'
  ),
  (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000001',
    'Bug Triage Process',
    'Automated bug report processing and assignment',
    'active',
    '{"health_score": 0.73, "bottlenecks": ["assignment_delay"], "efficiency": 0.65}',
    '{"tools": ["jira", "slack", "github"], "avg_resolution_time": "5.2 days"}'
  );

-- Insert sample integrations
INSERT INTO integrations (id, user_id, platform, status, metadata, last_sync) VALUES
  (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000001',
    'slack',
    'connected',
    '{"workspace": "flowforge-demo", "channels": 12, "members": 25}',
    now() - interval '5 minutes'
  ),
  (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000001',
    'github',
    'connected',
    '{"repositories": 8, "organizations": 2, "last_commit": "2 hours ago"}',
    now() - interval '10 minutes'
  ),
  (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000001',
    'notion',
    'connected',
    '{"databases": 5, "pages": 127, "last_edit": "1 hour ago"}',
    now() - interval '15 minutes'
  );

-- Insert sample AI recommendations
INSERT INTO ai_recommendations (id, user_id, workflow_id, recommendation_type, title, description, confidence_score, status, metadata) VALUES
  (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000001',
    (SELECT id FROM workflows WHERE name = 'Code Review Workflow' LIMIT 1),
    'optimization',
    'Reduce Code Review Bottleneck',
    'AI detected that code reviews are taking 40% longer on Fridays. Consider implementing automated reviewer assignment or moving complex reviews to earlier in the week.',
    0.87,
    'pending',
    '{"impact": "high", "effort": "medium", "estimated_savings": "8 hours/week"}'
  ),
  (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000001',
    (SELECT id FROM workflows WHERE name = 'Bug Triage Process' LIMIT 1),
    'automation',
    'Automate Bug Priority Assignment',
    'Based on historical data, FlowForge can automatically assign priority levels to 78% of incoming bugs, reducing manual triage time.',
    0.92,
    'pending',
    '{"impact": "medium", "effort": "low", "estimated_savings": "4 hours/week"}'
  ),
  (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000001',
    NULL,
    'integration',
    'Connect Figma for Design Workflow',
    'Your team frequently mentions design files in Slack. Connecting Figma would enable automatic design review workflows and version tracking.',
    0.73,
    'pending',
    '{"impact": "medium", "effort": "low", "tools": ["figma", "slack"]}'
  );

-- Insert sample workflow events
INSERT INTO workflow_events (id, workflow_id, event_type, event_data, timestamp) VALUES
  (
    gen_random_uuid(),
    (SELECT id FROM workflows WHERE name = 'Code Review Workflow' LIMIT 1),
    'pr_created',
    '{"repository": "flowforge-frontend", "author": "john.doe", "size": "medium"}',
    now() - interval '2 hours'
  ),
  (
    gen_random_uuid(),
    (SELECT id FROM workflows WHERE name = 'Code Review Workflow' LIMIT 1),
    'review_requested',
    '{"reviewer": "jane.smith", "pr_id": "123", "auto_assigned": true}',
    now() - interval '1 hour 45 minutes'
  ),
  (
    gen_random_uuid(),
    (SELECT id FROM workflows WHERE name = 'Content Publishing Pipeline' LIMIT 1),
    'draft_created',
    '{"title": "AI Workflow Best Practices", "author": "content.team", "type": "blog"}',
    now() - interval '3 hours'
  ),
  (
    gen_random_uuid(),
    (SELECT id FROM workflows WHERE name = 'Bug Triage Process' LIMIT 1),
    'bug_reported',
    '{"severity": "medium", "component": "authentication", "reporter": "user.test"}',
    now() - interval '30 minutes'
  );

-- Create a view for workflow analytics
CREATE OR REPLACE VIEW workflow_analytics AS
SELECT 
  w.id,
  w.name,
  w.status,
  w.ai_insights->>'health_score' as health_score,
  COUNT(we.id) as total_events,
  COUNT(CASE WHEN we.timestamp > now() - interval '24 hours' THEN 1 END) as events_last_24h,
  MAX(we.timestamp) as last_activity,
  w.created_at,
  w.updated_at
FROM workflows w
LEFT JOIN workflow_events we ON w.id = we.workflow_id
GROUP BY w.id, w.name, w.status, w.ai_insights, w.created_at, w.updated_at;

-- Create a view for user dashboard stats
CREATE OR REPLACE VIEW user_dashboard_stats AS
SELECT 
  up.id as user_id,
  up.email,
  COUNT(DISTINCT w.id) as total_workflows,
  COUNT(DISTINCT CASE WHEN w.status = 'active' THEN w.id END) as active_workflows,
  COUNT(DISTINCT i.id) as connected_integrations,
  COUNT(DISTINCT ar.id) as pending_recommendations,
  COUNT(DISTINCT we.id) as total_events,
  COUNT(DISTINCT CASE WHEN we.timestamp > now() - interval '7 days' THEN we.id END) as events_last_week
FROM user_profiles up
LEFT JOIN workflows w ON up.id = w.user_id
LEFT JOIN integrations i ON up.id = i.user_id AND i.status = 'connected'
LEFT JOIN ai_recommendations ar ON up.id = ar.user_id AND ar.status = 'pending'
LEFT JOIN workflow_events we ON w.id = we.workflow_id
GROUP BY up.id, up.email;

-- Grant access to views
GRANT SELECT ON workflow_analytics TO authenticated;
GRANT SELECT ON user_dashboard_stats TO authenticated;

-- Add RLS policies for views
CREATE POLICY "Users can view own workflow analytics" ON workflow_analytics
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM workflows 
      WHERE workflows.id = workflow_analytics.id 
      AND workflows.user_id = auth.uid()
    )
  );

-- Note: user_dashboard_stats will be filtered by user_id in application code