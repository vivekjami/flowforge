// src/app/api/webhooks/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase/client'

export async function POST(request: NextRequest) {
  try {
    const supabase = createServiceClient()
    const body = await request.json()
    const { platform, event_type, data, user_id } = body

    // Verify webhook signature (implementation depends on platform)
    // This is a simplified version - in production, verify the webhook signature

    // Store webhook event
    const { error: eventError } = await supabase
      .from('workflow_events')
      .insert({
        workflow_id: data.workflow_id || null,
        event_type: `${platform}.${event_type}`,
        event_data: data
      })

    if (eventError) {
      console.error('Error storing webhook event:', eventError)
    }

    // Process the webhook based on platform and event type
    switch (platform) {
      case 'slack':
        await handleSlackWebhook(event_type, data, user_id)
        break
      case 'github':
        await handleGitHubWebhook(event_type, data, user_id)
        break
      case 'notion':
        await handleNotionWebhook(event_type, data, user_id)
        break
      default:
        console.log(`Unknown platform: ${platform}`)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Webhook processing error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

async function handleSlackWebhook(eventType: string, data: any, userId: string) {
  // Handle Slack webhook events
  switch (eventType) {
    case 'message':
      // Process new message
      break
    case 'channel_created':
      // Process new channel
      break
    default:
      console.log(`Unhandled Slack event: ${eventType}`)
  }
}

async function handleGitHubWebhook(eventType: string, data: any, userId: string) {
  // Handle GitHub webhook events
  switch (eventType) {
    case 'pull_request':
      // Process PR events
      break
    case 'push':
      // Process push events
      break
    case 'issues':
      // Process issue events
      break
    default:
      console.log(`Unhandled GitHub event: ${eventType}`)
  }
}

async function handleNotionWebhook(eventType: string, data: any, userId: string) {
  // Handle Notion webhook events
  switch (eventType) {
    case 'page_updated':
      // Process page updates
      break
    case 'database_updated':
      // Process database updates
      break
    default:
      console.log(`Unhandled Notion event: ${eventType}`)
  }
}