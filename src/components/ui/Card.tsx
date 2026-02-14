import { type ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`rounded-2xl bg-white shadow-sm ${hover ? 'hover:shadow-md hover:-translate-y-1' : ''} transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  )
}
