import { type ReactNode } from 'react'

type BadgeVariant = 'ai' | 'community' | 'tool' | 'auth' | 'other' | 'new'

const variantStyles: Record<BadgeVariant, string> = {
  ai: 'bg-purple-100 text-purple-700',
  community: 'bg-blue-100 text-blue-700',
  tool: 'bg-green-100 text-green-700',
  auth: 'bg-amber-100 text-amber-700',
  other: 'bg-gray-100 text-gray-700',
  new: 'bg-brand-bg text-brand',
}

interface BadgeProps {
  variant?: BadgeVariant
  children: ReactNode
  className?: string
}

export function Badge({ variant = 'other', children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
