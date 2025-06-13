// src/app/(dashboard)/workflows/page.tsx
'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Plus, 
  Search, 
  Workflow, 
  Filter,
  MoreHorizontal,
  
  TrendingUp
} from 'lucide-react'  
// Play,
//   Pause,
//   Settings,

export default function WorkflowsPage() {
  const [searchQuery, setSearchQuery] = useState('')

  // Mock data - will be replaced with real data from API
  const workflows = []

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Workflows</h1>
          <p className="text-gray-600 mt-2">
            Create and manage your automated workflows
          </p>
        </div>
        <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
          <Plus className="h-4 w-4 mr-2" />
          Create Workflow
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center space-x-4">
        <div className="flex-1 max-w-md relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search workflows..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Empty State */}
      {workflows.length === 0 && (
        <Card>
          <CardContent className="text-center py-16">
            <div className="w-20 h-20 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Workflow className="h-10 w-10 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No workflows yet
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Create your first workflow to automate repetitive tasks and streamline your processes with AI intelligence.
            </p>
            <div className="space-y-4">
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                <Plus className="h-4 w-4 mr-2" />
                Create Your First Workflow
              </Button>
              <div className="text-sm text-gray-500">
                Or{' '}
                <Button variant="link" className="p-0 h-auto text-indigo-600">
                  browse workflow templates
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Workflow Templates */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Popular Templates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: 'Bug Triage Automation',
              description: 'Automatically assign and prioritize bugs based on severity and team capacity',
              icon: '🐛',
              estimatedTime: '2 hours saved/week'
            },
            {
              name: 'Code Review Workflow',
              description: 'Streamline PR reviews with automatic reviewer assignment and notifications',
              icon: '👀',
              estimatedTime: '5 hours saved/week'
            },
            {
              name: 'Sprint Planning Assistant',
              description: 'AI-powered story point estimation and sprint capacity planning',
              icon: '📋',
              estimatedTime: '3 hours saved/sprint'
            },
            {
              name: 'Deployment Pipeline',
              description: 'Automated testing, approval, and deployment workflow',
              icon: '🚀',
              estimatedTime: '4 hours saved/week'
            },
            {
              name: 'Customer Support Triage',
              description: 'Automatically categorize and route support tickets',
              icon: '🎧',
              estimatedTime: '6 hours saved/week'
            },
            {
              name: 'Meeting Scheduler',
              description: 'Smart meeting scheduling based on team availability and priorities',
              icon: '📅',
              estimatedTime: '2 hours saved/week'
            }
          ].map((template) => (
            <Card key={template.name} className="group hover:shadow-lg transition-all duration-200 cursor-pointer">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="text-3xl mb-3">{template.icon}</div>
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
                <CardTitle className="text-lg group-hover:text-indigo-600 transition-colors">
                  {template.name}
                </CardTitle>
                <CardDescription>
                  {template.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-green-600">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    {template.estimatedTime}
                  </div>
                  <Button size="sm" variant="outline" className="group-hover:bg-indigo-50 group-hover:border-indigo-200">
                    Use Template
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}