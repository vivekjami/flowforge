// src/components/dashboard/IntegrationStatus.tsx
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  RefreshCw,
  ExternalLink,
  Settings
} from 'lucide-react'

export function IntegrationStatus() {
  // Mock data - will be replaced with real integration status
  const integrationStatuses = [
    {
      id: 'slack',
      name: 'Slack',
      status: 'connected',
      lastSync: '2 minutes ago',
      health: 'healthy',
      dataPoints: 1247,
      workspaces: 1
    },
    {
      id: 'github',
      name: 'GitHub',
      status: 'connected',
      lastSync: '5 minutes ago',
      health: 'healthy',
      dataPoints: 892,
      repositories: 12
    },
    {
      id: 'notion',
      name: 'Notion',
      status: 'syncing',
      lastSync: 'Syncing...',
      health: 'syncing',
      dataPoints: 0,
      pages: 0
    }
  ]

  const getStatusIcon = (status: string, health: string) => {
    if (status === 'syncing') return <RefreshCw className="h-4 w-4 animate-spin text-blue-500" />
    if (health === 'healthy') return <CheckCircle className="h-4 w-4 text-green-500" />
    return <AlertCircle className="h-4 w-4 text-red-500" />
  }

  const getStatusBadge = (status: string, health: string) => {
    if (status === 'syncing') return <Badge variant="secondary">Syncing</Badge>
    if (health === 'healthy') return <Badge className="bg-green-100 text-green-800">Connected</Badge>
    return <Badge variant="destructive">Error</Badge>
  }

  if (integrationStatuses.length === 0) {
    return null
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Integration Status</span>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh All
          </Button>
        </CardTitle>
        <CardDescription>
          Monitor the health and sync status of your connected integrations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {integrationStatuses.map((integration) => (
            <div key={integration.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-4">
                {getStatusIcon(integration.status, integration.health)}
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-medium text-gray-900">{integration.name}</h4>
                    {getStatusBadge(integration.status, integration.health)}
                  </div>
                  <p className="text-sm text-gray-500">
                    Last sync: {integration.lastSync}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    {integration.dataPoints.toLocaleString()} data points
                  </p>
                  <p className="text-xs text-gray-500">
                    {integration.workspaces && `${integration.workspaces} workspace${integration.workspaces > 1 ? 's' : ''}`}
                    {integration.repositories && `${integration.repositories} repositories`}
                    {integration.pages !== undefined && `${integration.pages} pages`}
                  </p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}