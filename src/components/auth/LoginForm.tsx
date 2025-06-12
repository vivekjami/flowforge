'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useRouter } from 'next/navigation'
import { Github, Mail, Chrome } from 'lucide-react'
import { motion } from 'framer-motion'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [mode, setMode] = useState<'signin' | 'signup'>('signin')
  
  const router = useRouter()
  const supabase = createClient()

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      if (mode === 'signup') {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${location.origin}/auth/callback`,
          },
        })
        if (error) throw error
        
        // Show success message for signup
        alert('Check your email for the confirmation link!')
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if (error) throw error
        
        router.push('/dashboard')
        router.refresh()
      }
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleOAuthSignIn = async (provider: 'google' | 'github') => {
    setLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${location.origin}/auth/callback`,
        },
      })
      if (error) throw error
    } catch (error: any) {
      setError(error.message)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="backdrop-blur-sm bg-white/80 border border-white/20 shadow-xl">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Welcome to FlowForge
            </CardTitle>
            <CardDescription>
              {mode === 'signin' 
                ? 'Sign in to your account to continue' 
                : 'Create your account to get started'
              }
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg"
              >
                {error}
              </motion.div>
            )}

            {/* OAuth Buttons */}
            <div className="space-y-2">
              <Button
                onClick={() => handleOAuthSignIn('google')}
                disabled={loading}
                variant="outline"
                className="w-full h-11 hover:bg-gray-50 transition-colors"
              >
                <Chrome className="mr-2 h-4 w-4" />
                Continue with Google
              </Button>
              
              <Button
                onClick={() => handleOAuthSignIn('github')}
                disabled={loading}
                variant="outline"
                className="w-full h-11 hover:bg-gray-50 transition-colors"
              >
                <Github className="mr-2 h-4 w-4" />
                Continue with GitHub
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or continue with email</span>
              </div>
            </div>

            {/* Email/Password Form */}
            <form onSubmit={handleEmailAuth} className="space-y-3">
              <div>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-11"
                />
              </div>
              
              <div>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-11"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-11 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 transition-all duration-200"
              >
                {loading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    <span>Loading...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>{mode === 'signin' ? 'Sign In' : 'Sign Up'}</span>
                  </div>
                )}
              </Button>
            </form>

            {/* Toggle Mode */}
            <div className="text-center text-sm">
              <span className="text-gray-600">
                {mode === 'signin' ? "Don't have an account? " : "Already have an account? "}
              </span>
              <button
                onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
                className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
              >
                {mode === 'signin' ? 'Sign up' : 'Sign in'}
              </button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}