'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'spinner' | 'dots' | 'pulse'
  className?: string
}

const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(
  ({ size = 'md', variant = 'spinner', className }, ref) => {
    const sizeClasses = {
      sm: 'w-4 h-4',
      md: 'w-8 h-8',
      lg: 'w-12 h-12',
    }

    if (variant === 'spinner') {
      return (
        <motion.div
          ref={ref}
          className={cn(
            'border-2 border-gray-300 border-t-primary-600 rounded-full',
            sizeClasses[size],
            className
          )}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      )
    }

    if (variant === 'dots') {
      return (
        <div ref={ref} className={cn('flex space-x-1', className)}>
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className={cn(
                'bg-primary-600 rounded-full',
                size === 'sm' ? 'w-1 h-1' : size === 'md' ? 'w-2 h-2' : 'w-3 h-3'
              )}
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      )
    }

    if (variant === 'pulse') {
      return (
        <motion.div
          ref={ref}
          className={cn(
            'bg-primary-600 rounded-full',
            sizeClasses[size],
            className
          )}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />
      )
    }

    return null
  }
)
Loading.displayName = 'Loading'

export { Loading }
