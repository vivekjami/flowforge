'use client'

import { Zap, Twitter, Github, Linkedin, Mail } from 'lucide-react'
import { APP_CONFIG, FOOTER_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">{APP_CONFIG.name}</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              {APP_CONFIG.description}. Transform chaotic business processes into intelligent, 
              self-optimizing workflows with AI-powered automation.
            </p>
            <div className="flex space-x-4">
              <a href={APP_CONFIG.social.twitter} className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={APP_CONFIG.social.github} className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href={APP_CONFIG.social.linkedin} className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={`mailto:${APP_CONFIG.email}`} className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © 2025 {APP_CONFIG.name}. All rights reserved. Built by {APP_CONFIG.author}.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {FOOTER_LINKS.legal.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}