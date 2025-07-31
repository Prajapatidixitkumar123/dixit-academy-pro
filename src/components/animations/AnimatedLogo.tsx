'use client'

import { motion } from 'framer-motion'
import { BookOpen, GraduationCap, Trophy, Star } from 'lucide-react'

interface AnimatedLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  animate?: boolean
}

export function AnimatedLogo({ size = 'md', showText = true, animate = true }: AnimatedLogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  }

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-4xl'
  }

  const iconVariants = {
    initial: { scale: 0, rotate: -180, opacity: 0 },
    animate: { 
      scale: 1, 
      rotate: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 }
    }
  }

  const textVariants = {
    initial: { x: -50, opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        delay: 0.3,
        ease: "easeOut"
      }
    }
  }

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    },
    hover: {
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const floatingIcons = [
    { Icon: BookOpen, delay: 0.5, x: 20, y: -10 },
    { Icon: GraduationCap, delay: 0.7, x: -15, y: 15 },
    { Icon: Trophy, delay: 0.9, x: 25, y: 20 },
    { Icon: Star, delay: 1.1, x: -20, y: -15 }
  ]

  return (
    <motion.div
      className="flex items-center space-x-3 relative"
      variants={containerVariants}
      initial={animate ? "initial" : "animate"}
      animate="animate"
      whileHover="hover"
    >
      {/* Main Logo Container */}
      <div className="relative">
        {/* Central Logo */}
        <motion.div
          className={`${sizeClasses[size]} relative flex items-center justify-center`}
          variants={iconVariants}
        >
          {/* Background Circle with Gradient */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500 shadow-lg"
            animate={animate ? {
              rotate: 360,
              scale: [1, 1.05, 1],
            } : {}}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          
          {/* Inner Circle */}
          <motion.div
            className="absolute inset-1 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center"
            animate={animate ? {
              rotate: -360,
            } : {}}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* Main Icon */}
            <motion.div
              className="text-primary-600 dark:text-primary-400"
              animate={animate ? {
                scale: [1, 1.2, 1],
              } : {}}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <BookOpen className={`${size === 'xl' ? 'w-12 h-12' : size === 'lg' ? 'w-8 h-8' : size === 'md' ? 'w-6 h-6' : 'w-4 h-4'}`} />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Icons */}
        {animate && floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            className="absolute text-primary-400 opacity-60"
            style={{
              top: `${y}px`,
              left: `${x}px`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0.8, 1],
              opacity: [0, 0.6, 0.4, 0.6],
              y: [0, -10, 0, -5, 0],
            }}
            transition={{
              duration: 4,
              delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Icon className="w-3 h-3" />
          </motion.div>
        ))}

        {/* Pulse Ring */}
        {animate && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary-300 dark:border-primary-600"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        )}
      </div>

      {/* Text Logo */}
      {showText && (
        <motion.div
          className="flex flex-col"
          variants={textVariants}
        >
          <motion.h1
            className={`${textSizes[size]} font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent`}
            animate={animate ? {
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            } : {}}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Dixit Study Hub
          </motion.h1>
          <motion.p
            className={`${size === 'xl' ? 'text-sm' : 'text-xs'} text-gray-600 dark:text-gray-400 font-medium`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Excellence in Education
          </motion.p>
        </motion.div>
      )}

      {/* Sparkle Effects */}
      {animate && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent-400 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </>
      )}
    </motion.div>
  )
}
