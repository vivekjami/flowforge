// src/app/(dashboard)/integrations/page.tsx
'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Plus, 
  Check, 
  ExternalLink,
  Settings,
  AlertCircle,
  Zap,
  Users,
  Code,
  FileText,
  MessageSquare,
  Calendar,
  Database
} from 'lucide-react'
import { IntegrationStatus } from '@/components/dashboard/IntegrationStatus'

export default function IntegrationsPage() {
  const [connectedIntegrations, setConnectedIntegrations] = useState<string[]>([])

  const integrations = [
    {
      id: 'slack',
      name: 'Slack',
      description: 'Connect your Slack workspace to analyze communication patterns and automate notifications',
      icon: MessageSquare,
      color: 'bg-purple-500',
      category: 'Communication',
      features: ['Message analysis', 'Channel insights', 'Automated notifications', 'Team collaboration metrics'],
      isConnected: connectedIntegrations.includes('slack'),
      status: 'available'
    },
    {
      id: 'github',
      name: 'GitHub',
      description: 'Integrate with GitHub to optimize code review workflows and track development metrics',
      icon: Code,
      color: 'bg-gray-800',
      category: 'Development',
      features: ['PR automation', 'Code review insights', 'Deployment tracking', 'Issue management'],
      isConnected: connectedIntegrations.includes('github'),
      status: 'available'
    },
    {
      id: 'notion',
      name: 'Notion',
      description: 'Connect Notion to streamline documentation workflows and knowledge management',
      icon: FileText,
      color: 'bg-black',
      category: 'Documentation',
      features: ['Page analytics', 'Content optimization', 'Collaboration insights', 'Template automation'],
      isConnected: connectedIntegrations.includes('notion'),
      status: 'available'
    },
    {
      id: 'linear',
      name: 'Linear',
      description: 'Optimize project management and issue tracking workflows',
      icon: Zap,
      color: 'bg-blue-600',
      category: 'Project Management',
      features: ['Issue automation', 'Sprint insights', 'Team velocity', 'Roadmap optimization'],
      isConnected: false,
      status: 'coming_soon'
    },
    {
      id: 'figma',
      name: 'Figma',
      description: 'Streamline design workflows and collaboration processes',
      icon: Users,
      color: 'bg-pink-500',
      category: 'Design',
      features: ['Design handoff', 'Version tracking', 'Collaboration metrics', 'Asset management'],
      isConnected: false,
      status: 'coming_soon'
    },
    {
      id: 'google-calendar',
      name: 'Google Calendar',
      description: 'Optimize meeting schedules and time management workflows',
      icon: Calendar,
      color: 'bg-blue-500',
      category: 'Productivity',
      features: ['Meeting optimization', 'Schedule analysis', 'Time blocking', 'Availability insights'],
      isConnected: false,
      status: 'coming_soon'
    }
  ]

  const categories = ['All', 'Communication', 'Development', 'Documentation', 'Project Management', 'Design', 'Productivity']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredIntegrations = selectedCategory === 'All' 
    ? integrations 
    : integrations.filter(integration => integration.category === selectedCategory)

  const handleConnect = async (integrationId: string) => {
    // This will be implemented with actual OAuth flows
    console.log(`Connecting to ${integrationId}`)
    // For now, just simulate connection
    setConnectedIntegrations(prev => [...prev, integrationId])
  }

  const connectedCount = connectedIntegrations.length
  const availableCount = integrations.filter(i => i.status === 'available').length

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Integrations</h1>
          <p className="text-gray-600 mt-2">
            Connect your tools to unlock AI-powered workflow intelligence
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-600">
            {connectedCount} of {availableCount} connected
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Connected Tools</p>
                <p className="text-3xl font-bold text-gray-900">{connectedCount}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <Check className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Available Integrations</p>
                <p className="text-3xl font-bold text-gray-900">{availableCount}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <Plus className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Data Sources</p>
                <p className="text-3xl font-bold text-gray-900">{connectedCount * 3}</p>
                <p className="text-sm text-gray-500">Workflow touchpoints</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <Database className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "bg-indigo-600 hover:bg-indigo-700" : ""}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Integration Status Component */}
      <IntegrationStatus />

      {/* Integrations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIntegrations.map((integration) => (
          <Card key={integration.id} className="group hover:shadow-lg transition-all duration-200">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className={`w-12 h-12 ${integration.color} rounded-xl flex items-center justify-center mb-4`}>
                  <integration.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={integration.isConnected ? "default" : integration.status === 'coming_soon' ? "secondary" : "outline"}>
                    {integration.isConnected ? 'Connected' : integration.status === 'coming_soon' ? 'Coming Soon' : 'Available'}
                  </Badge>
                  {integration.isConnected && (
                    <Button variant="ghost" size="sm">
                      <Settings className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
              <CardTitle className="text-xl">{integration.name}</CardTitle>
              <CardDescription>{integration.description}</CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-900 mb-2">Features:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {integration.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {integration.features.length > 3 && (
                    <li className="text-gray-500">
                      +{integration.features.length - 3} more features
                    </li>
                  )}
                </ul>
              </div>

              <div className="pt-4 border-t">
                {integration.isConnected ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-green-600">
                      <Check className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">Connected</span>
                    </div>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Manage
                    </Button>
                  </div>
                ) : integration.status === 'coming_soon' ? (
                  <Button disabled className="w-full">
                    Coming Soon
                  </Button>
                ) : (
                  <Button 
                    onClick={() => handleConnect(integration.id)}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Connect {integration.name}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Help Section */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <AlertCircle className="h-5 w-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">
                Need help with integrations?
              </h3>
              <p className="text-gray-600 mb-4">
                Our integration guides will help you connect your tools quickly and securely. 
                Each integration takes less than 2 minutes to set up.
              </p>
              <div className="flex space-x-3">
                <Button variant="outline" size="sm">
                  View Documentation
                </Button>
                <Button variant="outline" size="sm">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}