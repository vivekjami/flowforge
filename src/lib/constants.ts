export const APP_CONFIG = {
  name: 'FlowForge',
  description: 'AI-Powered Workflow Intelligence Platform',
  url: 'https://flowforge.ai',
  version: '1.0.0',
  author: 'Vivek Jami',
  email: 'j.vivekvamsi@gmail.com',
  social: {
    twitter: '@vivekjami',
    github: 'https://github.com/vivekjami',
    linkedin: 'https://linkedin.com/in/vivek-jami',
  },
}

export const PRICING_TIERS = [
  {
    id: 'free',
    name: 'Starter',
    price: 0,
    description: 'Perfect for solo entrepreneurs',
    features: [
      '5 workflows',
      '100 tasks/month',
      'Basic integrations',
      'Email support',
      'Community access',
    ],
    limitations: [
      'Limited AI insights',
      'Basic analytics',
      'No priority support',
    ],
    cta: 'Start Free',
    popular: false,
  },
  {
    id: 'pro',
    name: 'Professional',
    price: 29,
    description: 'Ideal for growing teams',
    features: [
      'Unlimited workflows',
      'Unlimited tasks',
      'Advanced AI insights',
      'All integrations',
      'Priority support',
      'Team collaboration',
      'Advanced analytics',
      'Custom templates',
    ],
    limitations: [],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 99,
    description: 'For large organizations',
    features: [
      'Everything in Pro',
      'SSO & SAML',
      'Advanced security',
      'Audit logs',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
      'White-label options',
    ],
    limitations: [],
    cta: 'Contact Sales',
    popular: false,
  },
]

export const FEATURES = [
  {
    id: 'ai-discovery',
    title: 'AI Process Discovery',
    description: 'Automatically detects workflows from tool usage patterns',
    icon: 'Brain',
    benefits: [
      'Zero manual setup required',
      'Discovers hidden inefficiencies',
      'Continuous pattern learning',
    ],
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive Analytics',
    description: 'ML models predict process failures 2-3 days in advance',
    icon: 'TrendingUp',
    benefits: [
      'Prevent bottlenecks before they occur',
      'Optimize resource allocation',
      'Improve team productivity',
    ],
  },
  {
    id: 'smart-integrations',
    title: 'Smart Integrations',
    description: 'Connect 200+ tools with intelligent automation',
    icon: 'Zap',
    benefits: [
      'One-click tool connections',
      'Intelligent data routing',
      'Real-time synchronization',
    ],
  },
  {
    id: 'real-time-monitoring',
    title: 'Real-time Monitoring',
    description: 'Live workflow health scores and performance metrics',
    icon: 'Activity',
    benefits: [
      'Instant performance insights',
      'Team productivity tracking',
      'Automated alerting',
    ],
  },
]

export const INTEGRATIONS = [
  { name: 'Slack', icon: '/icons/slack.svg', category: 'Communication' },
  { name: 'GitHub', icon: '/icons/github.svg', category: 'Development' },
  { name: 'Notion', icon: '/icons/notion.svg', category: 'Documentation' },
  { name: 'Jira', icon: '/icons/jira.svg', category: 'Project Management' },
  { name: 'Figma', icon: '/icons/figma.svg', category: 'Design' },
  { name: 'Linear', icon: '/icons/linear.svg', category: 'Issue Tracking' },
  { name: 'Zapier', icon: '/icons/zapier.svg', category: 'Automation' },
  { name: 'Airtable', icon: '/icons/airtable.svg', category: 'Database' },
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Operations Manager',
    company: 'TechFlow Solutions',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
    content: 'FlowForge reduced our process management time by 40%. The AI insights are incredibly accurate.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Alex Rodriguez',
    role: 'Engineering Manager',
    company: 'DataCore',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    content: 'Our deployment cycles are 50% faster thanks to FlowForge\'s intelligent automation.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Dr. Patricia Williams',
    role: 'VP of Operations',
    company: 'ScaleUp Industries',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    content: 'Finally, we can measure the ROI of our process improvements. Game-changing platform.',
    rating: 5,
  },
]

export const STATS = [
  { label: 'Teams Using FlowForge', value: '10,000+' },
  { label: 'Hours Saved Weekly', value: '8+' },
  { label: 'Process Efficiency Gain', value: '40%' },
  { label: 'Customer Satisfaction', value: '98%' },
]

export const FAQ = [
  {
    question: 'How does FlowForge detect workflows automatically?',
    answer: 'FlowForge uses advanced AI to analyze your tool usage patterns, communication flows, and task dependencies to automatically map your existing workflows without any manual setup.',
  },
  {
    question: 'Which tools can FlowForge integrate with?',
    answer: 'FlowForge supports 200+ integrations including Slack, GitHub, Notion, Jira, Figma, Linear, and many more. We also provide custom API connectors for enterprise needs.',
  },
  {
    question: 'How accurate are the AI predictions?',
    answer: 'Our AI models achieve 85%+ accuracy in predicting workflow bottlenecks 2-3 days in advance, based on historical data and real-time pattern analysis.',
  },
  {
    question: 'Is my data secure with FlowForge?',
    answer: 'Yes, we use enterprise-grade security with end-to-end encryption, SOC2 compliance, and never store sensitive data. All integrations use OAuth 2.0 for secure access.',
  },
  {
    question: 'Can I try FlowForge before purchasing?',
    answer: 'Absolutely! We offer a free tier with basic features and a 14-day free trial of our Pro plan with no credit card required.',
  },
]

export const NAVIGATION = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
]

export const FOOTER_LINKS = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Integrations', href: '#integrations' },
    { name: 'API', href: '/api' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Status', href: '/status' },
    { name: 'Community', href: '/community' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Security', href: '/security' },
    { name: 'Cookies', href: '/cookies' },
  ],
}