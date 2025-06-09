'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Users, Clock, CheckCircle } from 'lucide-react'
import FadeIn from '@/components/animations/FadeIn'

export default function BetaSignup() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsLoading(false)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <Card className="bg-white/10 backdrop-blur-md border border-white/20 text-white">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                Join the FlowForge Revolution
              </CardTitle>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Be among the first to experience AI-powered workflow intelligence. 
                Get early access and help shape the future of work.
              </p>
            </CardHeader>
            
            <CardContent>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-white/20 border-white/30 text-white placeholder:text-blue-200 focus:bg-white/30"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="bg-white text-blue-600 hover:bg-blue-50 font-semibold"
                    >
                      {isLoading ? (
                        <div className="spinner mr-2" />
                      ) : (
                        <Mail className="mr-2 w-4 h-4" />
                      )}
                      {isLoading ? 'Joining...' : 'Get Early Access'}
                    </Button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">Welcome to FlowForge!</h3>
                  <p className="text-blue-100">
                    You're now on our early access list. We'll notify you as soon as FlowForge is ready.
                  </p>
                </motion.div>
              )}
              
              {!isSubmitted && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  <div className="text-center">
                    <Users className="w-8 h-8 text-blue-300 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white">2,847</div>
                    <div className="text-sm text-blue-200">Early adopters</div>
                  </div>
                  <div className="text-center">
                    <Clock className="w-8 h-8 text-blue-300 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white">30 days</div>
                    <div className="text-sm text-blue-200">Until launch</div>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="w-8 h-8 text-blue-300 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white">Free</div>
                    <div className="text-sm text-blue-200">Forever plan</div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  )
}