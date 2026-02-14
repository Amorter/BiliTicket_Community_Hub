import { type ReactNode, type ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  children: ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-brand text-white hover:bg-brand-light active:bg-brand-dark',
  secondary:
    'bg-white text-brand border-2 border-brand hover:bg-brand-bg active:bg-brand-bg-deep',
  ghost: 'text-gray-700 hover:bg-gray-100 active:bg-gray-200',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-1.5 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3 text-lg',
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const styles = `inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 cursor-pointer ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  )
}
