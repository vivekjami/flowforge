import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FlowForge - AI-Powered Workflow Intelligence Platform',
  description: 'Transform chaotic business processes into intelligent, self-optimizing workflows with AI-powered automation and real-time collaboration.',
  keywords: 'AI workflow, automation, productivity, business process, workflow optimization',
  authors: [{ name: 'Vivek Jami' }],
  openGraph: {
    title: 'FlowForge - AI Workflow Intelligence',
    description: 'Where Process Meets Intelligence - Built for the Future of Work',
    url: 'https://flowforge.vercel.app',
    siteName: 'FlowForge',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlowForge - AI Workflow Intelligence',
    description: 'Transform chaotic business processes into intelligent workflows',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {children}
        </div>
      </body>
    </html>
  )
}