'use client'

import { useEffect, useState } from 'react'
import { generateParticles } from '@/lib/utils'

export function ParticleBackground() {
  const [particles, setParticles] = useState<Array<{
    id: number
    left: number
    animationDelay: number
    animationDuration: number
  }>>([])

  useEffect(() => {
    setParticles(generateParticles(30))
  }, [])

  return (
    <div className="particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.animationDelay}s`,
            animationDuration: `${particle.animationDuration}s`,
          }}
        />
      ))}
    </div>
  )
}