import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FlowForge - AI-Powered Workflow Intelligence Platform',
  description: 'Transform chaotic business processes into intelligent, self-optimizing workflows with AI-powered automation and real-time collaboration.',
  keywords: 'workflow automation, AI productivity, business process optimization, team collaboration',
  authors: [{ name: 'Vivek Jami' }],
  creator: 'Vivek Jami',
  openGraph: {
    title: 'FlowForge - AI-Powered Workflow Intelligence',
    description: 'Where Process Meets Intelligence - Built for the Future of Work',
    url: 'https://flowforge.ai',
    siteName: 'FlowForge',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FlowForge - AI Workflow Intelligence Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlowForge - AI-Powered Workflow Intelligence',
    description: 'Transform chaotic business processes into intelligent workflows',
    images: ['/og-image.png'],
    creator: '@vivekjami',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
          {children}
        </div>
      </body>
    </html>
  )
}