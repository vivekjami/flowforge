// src/app/(dashboard)/analytics/page.tsx
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  Clock, 
  Users, 
  Zap,
  Download,
  Calendar,
  Filter
} from 'lucide-react'

export default function AnalyticsPage() {
  // Mock data - will be replaced with real analytics
  const metrics = [
    {
      name: 'Team Efficiency',
      value: '0%',
      change: '+0%',
      trend: 'up',
      description: 'Overall productivity score'
    },
    {
      name: 'Time Saved',
      value: '0h',
      change: '+0h',
      trend: 'up',
      description: 'This week vs last week'
    },
    {
      name: 'Workflows Active',
      value: '0',
      change: '+0',
      trend: 'neutral',
      description: 'Currently running'
    },
    {
      name: 'Bottlenecks Prevented',
      value: '0',
      change: '+0',
      trend: 'up',
      description: 'AI predictions this month'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600 mt-2">
            Track your team&apos;s productivity and workflow performance
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Last 30 days
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <Card key={metric.name}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    {metric.name}
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {metric.value}
                  </p>
                  <div className="flex items-center mt-2">
                    {metric.trend === 'up' ? (
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    ) : metric.trend === 'down' ? (
                      <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                    ) : null}
                    <span className={`text-sm ${
                      metric.trend === 'up' ? 'text-green-600' : 
                      metric.trend === 'down' ? 'text-red-600' : 
                      'text-gray-600'
                    }`}>
                      {metric.change}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {metric.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Productivity Trends */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              Productivity Trends
            </CardTitle>
            <CardDescription>
              Team efficiency over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">
                  Connect integrations to see productivity trends
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Workflow Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="h-5 w-5 mr-2" />
              Workflow Performance
            </CardTitle>
            <CardDescription>
              Average completion times by workflow
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <div className="text-center">
                <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">
                  Create workflows to see performance data
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Team Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="h-5 w-5 mr-2" />
            Team Insights
          </CardTitle>
          <CardDescription>
            Individual and team performance metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No team data yet
            </h3>
            <p className="text-gray-500 mb-6">
              Connect your team&apos;s tools to start seeing detailed insights about productivity, collaboration, and workflow efficiency.
            </p>
            <Button>
              Connect Team Tools
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* AI Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>AI Recommendations</CardTitle>
          <CardDescription>
            Intelligent suggestions to improve your workflows
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-6 w-6 text-indigo-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-2">
              No recommendations yet
            </h4>
            <p className="text-gray-500 text-sm">
              AI will analyze your workflows and provide optimization suggestions once you have active integrations.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}