// src/lib/integrations/notion.ts
import { createBrowserClient } from '@/lib/supabase/client'

export interface NotionWorkspace {
  id: string
  name: string
  icon?: string
}

export interface NotionDatabase {
  id: string
  title: string
  description?: string
  properties: Record<string, any>
  created_time: string
  last_edited_time: string
}

export interface NotionPage {
  id: string
  title: string
  created_time: string
  last_edited_time: string
  properties: Record<string, any>
}

export class NotionIntegration {
  private supabase = createBrowserClient()

  async initiateOAuth(): Promise<string> {
    const clientId = process.env.NEXT_PUBLIC_NOTION_CLIENT_ID
    const redirectUri = `${window.location.origin}/api/integrations/notion/callback`

    const state = crypto.randomUUID()
    
    // Store state in localStorage for verification
    localStorage.setItem('notion_oauth_state', state)

    const authUrl = new URL('https://api.notion.com/v1/oauth/authorize')
    authUrl.searchParams.set('client_id', clientId!)
    authUrl.searchParams.set('response_type', 'code')
    authUrl.searchParams.set('owner', 'user')
    authUrl.searchParams.set('redirect_uri', redirectUri)
    authUrl.searchParams.set('state', state)

    return authUrl.toString()
  }

  async connect(): Promise<void> {
    const authUrl = await this.initiateOAuth()
    window.location.href = authUrl
  }

  async getWorkspaceInfo(accessToken: string): Promise<NotionWorkspace> {
    const response = await fetch('https://api.notion.com/v1/users/me', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Notion-Version': '2022-06-28'
      }
    })

    if (!response.ok) {
      throw new Error(`Notion API error: ${response.statusText}`)
    }

    const data = await response.json()
    
    return {
      id: data.id,
      name: data.name || 'Notion Workspace',
      icon: data.avatar_url
    }
  }

  async getDatabases(accessToken: string): Promise<NotionDatabase[]> {
    const response = await fetch('https://api.notion.com/v1/search', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        filter: {
          property: 'object',
          value: 'database'
        },
        page_size: 100
      })
    })

    if (!response.ok) {
      throw new Error(`Notion API error: ${response.statusText}`)
    }

    const data = await response.json()
    
    return data.results.map((db: any) => ({
      id: db.id,
      title: db.title?.[0]?.plain_text || 'Untitled Database',
      description: db.description?.[0]?.plain_text,
      properties: db.properties,
      created_time: db.created_time,
      last_edited_time: db.last_edited_time
    }))
  }

  async getPages(accessToken: string): Promise<NotionPage[]> {
    const response = await fetch('https://api.notion.com/v1/search', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        filter: {
          property: 'object',
          value: 'page'
        },
        page_size: 100
      })
    })

    if (!response.ok) {
      throw new Error(`Notion API error: ${response.statusText}`)
    }

    const data = await response.json()
    
    return data.results.map((page: any) => ({
      id: page.id,
      title: page.properties?.title?.title?.[0]?.plain_text || 'Untitled Page',
      created_time: page.created_time,
      last_edited_time: page.last_edited_time,
      properties: page.properties
    }))
  }

  async saveIntegration(userId: string, accessToken: string): Promise<void> {
    try {
      const workspaceInfo = await this.getWorkspaceInfo(accessToken)
      const databases = await this.getDatabases(accessToken)
      const pages = await this.getPages(accessToken)
      
      const { error } = await this.supabase
        .from('integrations')
        .upsert({
          user_id: userId,
          platform: 'notion',
          status: 'connected',
          access_token: accessToken, // In production, this should be encrypted
          metadata: {
            workspace: workspaceInfo,
            databases: databases.slice(0, 20), // Store first 20 databases
            pages: pages.slice(0, 50), // Store first 50 pages
            connected_at: new Date().toISOString()
          },
          last_sync: new Date().toISOString()
        })

      if (error) {
        throw error
      }
    } catch (error) {
      console.error('Error saving Notion integration:', error)
      throw error
    }
  }

  async disconnect(userId: string): Promise<void> {
    const { error } = await this.supabase
      .from('integrations')
      .update({ status: 'disconnected' })
      .eq('user_id', userId)
      .eq('platform', 'notion')

    if (error) {
      throw error
    }
  }

  async getIntegrationStatus(userId: string) {
    const { data, error } = await this.supabase
      .from('integrations')
      .select('*')
      .eq('user_id', userId)
      .eq('platform', 'notion')
      .single()

    if (error && error.code !== 'PGRST116') {
      throw error
    }

    return data
  }
}

export const notionIntegration = new NotionIntegration()