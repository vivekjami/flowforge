// src/lib/integrations/slack.ts
import { createBrowserClient } from '@/lib/supabase/client'

export interface SlackWorkspace {
  id: string
  name: string
  domain: string
  icon?: string
}

export interface SlackChannel {
  id: string
  name: string
  is_private: boolean
  is_member: boolean
  topic?: string
  purpose?: string
}

export interface SlackUser {
  id: string
  name: string
  real_name: string
  profile: {
    email?: string
    image_72?: string
  }
}

export class SlackIntegration {
  private supabase = createBrowserClient()

  async initiateOAuth(): Promise<string> {
    const clientId = process.env.NEXT_PUBLIC_SLACK_CLIENT_ID
    const redirectUri = `${window.location.origin}/api/integrations/slack/callback`
    const scopes = [
      'channels:read',
      'channels:history',
      'groups:read',
      'groups:history',
      'users:read',
      'team:read'
    ].join(',')

    const state = crypto.randomUUID()
    
    // Store state in localStorage for verification
    localStorage.setItem('slack_oauth_state', state)

    const authUrl = new URL('https://slack.com/oauth/v2/authorize')
    authUrl.searchParams.set('client_id', clientId!)
    authUrl.searchParams.set('scope', scopes)
    authUrl.searchParams.set('redirect_uri', redirectUri)
    authUrl.searchParams.set('state', state)

    return authUrl.toString()
  }

  async connect(): Promise<void> {
    const authUrl = await this.initiateOAuth()
    window.location.href = authUrl
  }

  async getWorkspaceInfo(accessToken: string): Promise<SlackWorkspace> {
    const response = await fetch('https://slack.com/api/team.info', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()
    
    if (!data.ok) {
      throw new Error(`Slack API error: ${data.error}`)
    }

    return {
      id: data.team.id,
      name: data.team.name,
      domain: data.team.domain,
      icon: data.team.icon?.image_68
    }
  }

  async getChannels(accessToken: string): Promise<SlackChannel[]> {
    const response = await fetch('https://slack.com/api/conversations.list', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()
    
    if (!data.ok) {
      throw new Error(`Slack API error: ${data.error}`)
    }

    return data.channels.map((channel: any) => ({
      id: channel.id,
      name: channel.name,
      is_private: channel.is_private,
      is_member: channel.is_member,
      topic: channel.topic?.value,
      purpose: channel.purpose?.value
    }))
  }

  async getUsers(accessToken: string): Promise<SlackUser[]> {
    const response = await fetch('https://slack.com/api/users.list', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()
    
    if (!data.ok) {
      throw new Error(`Slack API error: ${data.error}`)
    }

    return data.members
      .filter((member: any) => !member.deleted && !member.is_bot)
      .map((member: any) => ({
        id: member.id,
        name: member.name,
        real_name: member.real_name,
        profile: {
          email: member.profile.email,
          image_72: member.profile.image_72
        }
      }))
  }

  async saveIntegration(userId: string, accessToken: string, refreshToken?: string): Promise<void> {
    try {
      const workspaceInfo = await this.getWorkspaceInfo(accessToken)
      
      const { error } = await this.supabase
        .from('integrations')
        .upsert({
          user_id: userId,
          platform: 'slack',
          status: 'connected',
          access_token: accessToken, // In production, this should be encrypted
          refresh_token: refreshToken,
          metadata: {
            workspace: workspaceInfo,
            connected_at: new Date().toISOString()
          },
          last_sync: new Date().toISOString()
        })

      if (error) {
        throw error
      }
    } catch (error) {
      console.error('Error saving Slack integration:', error)
      throw error
    }
  }

  async disconnect(userId: string): Promise<void> {
    const { error } = await this.supabase
      .from('integrations')
      .update({ status: 'disconnected' })
      .eq('user_id', userId)
      .eq('platform', 'slack')

    if (error) {
      throw error
    }
  }

  async getIntegrationStatus(userId: string) {
    const { data, error } = await this.supabase
      .from('integrations')
      .select('*')
      .eq('user_id', userId)
      .eq('platform', 'slack')
      .single()

    if (error && error.code !== 'PGRST116') {
      throw error
    }

    return data
  }
}

export const slackIntegration = new SlackIntegration()