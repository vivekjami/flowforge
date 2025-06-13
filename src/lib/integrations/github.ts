// src/lib/integrations/github.ts
import { createBrowserClient } from '@/lib/supabase/client'

export interface GitHubUser {
  id: number
  login: string
  name: string
  email: string
  avatar_url: string
}

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

export class GitHubIntegration {
  private supabase = createBrowserClient()

  async initiateOAuth(): Promise<string> {
    const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
    const redirectUri = `${window.location.origin}/api/integrations/github/callback`
    const scopes = ['repo', 'user:email', 'read:org'].join(' ')

    const state = crypto.randomUUID()
    
    // Store state in localStorage for verification
    localStorage.setItem('github_oauth_state', state)

    const authUrl = new URL('https://github.com/login/oauth/authorize')
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

  async getUserInfo(accessToken: string): Promise<GitHubUser> {
    const response = await fetch('https://api.github.com/user', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`)
    }

    return await response.json()
  }

  async getRepositories(accessToken: string): Promise<GitHubRepository[]> {
    const response = await fetch('https://api.github.com/user/repos?sort=updated&per_page=100', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`)
    }

    return await response.json()
  }

  async getOrganizations(accessToken: string): Promise<GitHubOrganization[]> {
    const response = await fetch('https://api.github.com/user/orgs', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`)
    }

    return await response.json()
  }

  async getPullRequests(accessToken: string, repo: string): Promise<any[]> {
    const response = await fetch(`https://api.github.com/repos/${repo}/pulls?state=all&per_page=100`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`)
    }

    return await response.json()
  }

  async saveIntegration(userId: string, accessToken: string): Promise<void> {
    try {
      const userInfo = await this.getUserInfo(accessToken)
      const repositories = await this.getRepositories(accessToken)
      const organizations = await this.getOrganizations(accessToken)
      
      const { error } = await this.supabase
        .from('integrations')
        .upsert({
          user_id: userId,
          platform: 'github',
          status: 'connected',
          access_token: accessToken, // In production, this should be encrypted
          metadata: {
            user: userInfo,
            repositories: repositories.slice(0, 20), // Store first 20 repos
            organizations,
            connected_at: new Date().toISOString()
          },
          last_sync: new Date().toISOString()
        })

      if (error) {
        throw error
      }
    } catch (error) {
      console.error('Error saving GitHub integration:', error)
      throw error
    }
  }

  async disconnect(userId: string): Promise<void> {
    const { error } = await this.supabase
      .from('integrations')
      .update({ status: 'disconnected' })
      .eq('user_id', userId)
      .eq('platform', 'github')

    if (error) {
      throw error
    }
  }

  async getIntegrationStatus(userId: string) {
    const { data, error } = await this.supabase
      .from('integrations')
      .select('*')
      .eq('user_id', userId)
      .eq('platform', 'github')
      .single()

    if (error && error.code !== 'PGRST116') {
      throw error
    }

    return data
  }
}

export const githubIntegration = new GitHubIntegration()