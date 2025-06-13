// src/lib/validations.ts
import { z } from 'zod'

// User profile validation
export const userProfileSchema = z.object({
  full_name: z.string().min(1, 'Full name is required').max(100),
  company: z.string().max(100).optional(),
  role: z.string().max(100).optional(),
  email: z.string().email('Invalid email address'),
})

// Auth validation schemas
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export const signupSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
  fullName: z.string().min(1, 'Full name is required').max(100),
  company: z.string().max(100).optional(),
  role: z.string().max(100).optional(),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: 'You must agree to the terms and conditions'
  })
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
})

// Workflow validation
export const workflowSchema = z.object({
  name: z.string().min(1, 'Workflow name is required').max(100),
  description: z.string().max(500).optional(),
  status: z.enum(['active', 'inactive', 'archived']).default('active'),
  metadata: z.record(z.any()).default({})
})

export const workflowUpdateSchema = workflowSchema.partial().extend({
  id: z.string().uuid()
})

// Integration validation
export const integrationSchema = z.object({
  platform: z.enum(['slack', 'github', 'notion']),
  status: z.enum(['connected', 'disconnected', 'error', 'pending']).default('connected'),
  metadata: z.record(z.any()).default({})
})

// AI recommendation validation
export const aiRecommendationSchema = z.object({
  workflow_id: z.string().uuid().optional(),
  recommendation_type: z.enum(['optimization', 'integration', 'automation', 'alert']),
  title: z.string().min(1, 'Title is required').max(200),
  description: z.string().min(1, 'Description is required').max(1000),
  confidence_score: z.number().min(0).max(1).optional(),
  status: z.enum(['pending', 'accepted', 'dismissed', 'implemented']).default('pending'),
  metadata: z.record(z.any()).default({})
})

// Webhook validation
export const webhookSchema = z.object({
  platform: z.enum(['slack', 'github', 'notion']),
  event_type: z.string().min(1),
  data: z.record(z.any()),
  user_id: z.string().uuid().optional()
})

// API response validation
export const apiResponseSchema = z.object({
  success: z.boolean(),
  data: z.any().optional(),
  error: z.string().optional(),
  message: z.string().optional()
})

// Form validation helpers
export type LoginFormData = z.infer<typeof loginSchema>
export type SignupFormData = z.infer<typeof signupSchema>
export type WorkflowFormData = z.infer<typeof workflowSchema>
export type IntegrationFormData = z.infer<typeof integrationSchema>
export type AIRecommendationFormData = z.infer<typeof aiRecommendationSchema>
export type WebhookData = z.infer<typeof webhookSchema>