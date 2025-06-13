// src/app/(dashboard)/page.tsx
'use client'

import { useAuth } from '@/components/auth/AuthProvider'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Workflow, 
  Plug, 
  BarChart3, 
  TrendingUp, 
  Users, 
  Clock,
  ArrowRight,
  Sparkles
} from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  const { profile } = useAuth()

  const stats = [
    {
      name: 'Active Workflows',
      value: '0',
      icon: Workflow,
      description: 'Workflows running',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      name: 'Connected Tools',
      value: '0',
      icon: Plug,
      description: 'Integrations active',
      color: 'text-green-600 bg-green-100'
    },
    {
      name: 'Time Saved',
      value: '0h',
      icon: Clock,
      description: 'This week',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      name: 'Efficiency Score',
      value: '0%',
      icon: TrendingUp,
      description: 'Overall performance',
      color: 'text-orange-600 bg-orange-100'
    }
  ]

  const quickActions = [
    {
      title: 'Connect Your First Tool',
      description: 'Start by connecting Slack, GitHub, or Notion to begin workflow analysis',
      icon: Plug,
      href: '/dashboard/integrations',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Create a Workflow',
      description: 'Build your first automated workflow to streamline your processes',
      icon: Workflow,
      href: '/dashboard/workflows',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'View Analytics',
      description: 'Explore insights and performance metrics for your team',
      icon: BarChart3,
      href: '/dashboard/analytics',
      color: 'from-green-500 to-green-600'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Welcome back, {profile?.full_name?.split(' ')[0] || 'there'}! 👋
            </h1>
            <p className="text-indigo-100 text-lg">
              Ready to optimize your workflows with AI intelligence?
            </p>
          </div>
          <div className="hidden md:block">
            <Sparkles className="h-16 w-16 text-white/20" />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.name} className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    {stat.name}
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {stat.description}
                  </p>
                </div>
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Get Started
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickActions.map((action) => (
            <Card key={action.title} className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
              <Link href={action.href}>
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <action.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-indigo-600 transition-colors duration-200">
                    {action.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {action.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center text-indigo-600 font-medium group-hover:translate-x-1 transition-transform duration-200">
                    Get started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="h-5 w-5 mr-2" />
            Recent Activity
          </CardTitle>
          <CardDescription>
            Your latest workflow activities and insights
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No activity yet
            </h3>
            <p className="text-gray-500 mb-6">
              Connect your tools to start seeing workflow insights and activity.
            </p>
            <Button asChild>
              <Link href="/dashboard/integrations">
                Connect Your First Tool
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}