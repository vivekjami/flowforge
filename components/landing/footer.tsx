'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowRight, 
  Github, 
  Twitter, 
  Linkedin, 
  Mail,
  Zap,
  Brain,
  Shield,
  Globe
} from 'lucide-react'

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Integrations', href: '#integrations' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'API Docs', href: '#api' },
    { name: 'Changelog', href: '#changelog' }
  ],
  company: [
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Careers', href: '#careers' },
    { name: 'Press Kit', href: '#press' },
    { name: 'Contact', href: '#contact' }
  ],
  resources: [
    { name: 'Documentation', href: '#docs' },
    { name: 'Help Center', href: '#help' },
    { name: 'Community', href: '#community' },
    { name: 'Templates', href: '#templates' },
    { name: 'Status', href: '#status' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Security', href: '#security' },
    { name: 'GDPR', href: '#gdpr' },
    { name: 'Compliance', href: '#compliance' }
  ]
}

const socialLinks = [
  { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com/vivekjami' },
  { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/vivekjami' },
  { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/vivek-jami' },
  { name: 'Email', icon: <Mail className="w-5 h-5" />, href: 'mailto:j.vivekvamsi@gmail.com' }
]

export function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <footer ref={ref} className="relative py-24 border-t border-white/10">
      <div className="container mx-auto px-4">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="gradient" className="mb-6">
            Ready to Transform Your Workflows?
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
            Join the <span className="gradient-text">Workflow Revolution</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            2,847 teams are already on the waitlist. Don't let your competitors get ahead 
            with AI-powered workflow intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="gradient" size="xl" className="group glow-strong">
              <Brain className="w-5 h-5 mr-2" />
              Request Beta Access
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="xl">
              <Zap className="w-5 h-5 mr-2" />
              Schedule Demo
            </Button>
          </div>
          
          <p className="text-sm text-gray-400 mt-4">
            ✨ Limited Beta • 73% Efficiency Gain Guaranteed • No Credit Card Required
          </p>
        </motion.div>

        {/* Links Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16"
        >
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">FlowForge</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              AI-powered workflow intelligence platform that transforms chaotic business processes 
              into intelligent, self-optimizing workflows.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>© 2025 FlowForge. All rights reserved.</span>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>SOC2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>99.9% Uptime</span>
              </div>
            </div>
            
            <div className="text-sm text-gray-400">
              Built with ❤️ by{' '}
              <a 
                href="https://linkedin.com/in/vivek-jami" 
                className="text-blue-400 hover:text-blue-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vivek Jami
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}