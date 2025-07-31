'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedLogo } from './AnimatedLogo'

interface PreLoaderProps {
  onComplete: () => void
  duration?: number
}

export function PreLoader({ onComplete, duration = 3000 }: PreLoaderProps) {
  const [progress, setProgress] = useState(0)
  const [currentText, setCurrentText] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const loadingTexts = [
    "Initializing Excellence...",
    "Loading Study Materials...",
    "Preparing Your Journey...",
    "Almost Ready..."
  ]

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => {
            setIsVisible(false)
            setTimeout(onComplete, 500)
          }, 500)
          return 100
        }
        return prev + 2
      })
    }, duration / 50)

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length)
    }, duration / 4)

    return () => {
      clearInterval(progressInterval)
      clearInterval(textInterval)
    }
  }, [duration, onComplete])

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0,
      scale: 1.1,
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  }

  const progressVariants = {
    initial: { width: 0 },
    animate: { 
      width: `${progress}%`,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #3B82F6 0%, transparent 50%),
                               radial-gradient(circle at 75% 75%, #F59E0B 0%, transparent 50%),
                               radial-gradient(circle at 75% 25%, #10B981 0%, transparent 50%),
                               radial-gradient(circle at 25% 75%, #8B5CF6 0%, transparent 50%)`
            }} />
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center space-y-8">
            {/* Animated Logo */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <AnimatedLogo size="xl" showText={true} animate={true} />
            </motion.div>

            {/* Loading Text */}
            <motion.div
              className="text-center space-y-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentText}
                  className="text-lg font-medium text-gray-700 dark:text-gray-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {loadingTexts[currentText]}
                </motion.p>
              </AnimatePresence>

              {/* Progress Bar */}
              <div className="w-80 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 rounded-full"
                  variants={progressVariants}
                  initial="initial"
                  animate="animate"
                />
              </div>

              {/* Progress Percentage */}
              <motion.p
                className="text-sm text-gray-500 dark:text-gray-400 font-mono"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {progress}%
              </motion.p>
            </motion.div>

            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full opacity-60"
                  style={{
                    left: `${10 + (i * 7)}%`,
                    top: `${20 + Math.sin(i) * 30}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 3 + (i * 0.2),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1
                  }}
                />
              ))}
            </div>

            {/* Success Message */}
            {progress === 100 && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center">
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.svg
                      className="w-8 h-8 text-green-600 dark:text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <motion.path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </motion.svg>
                  </motion.div>
                  <motion.p
                    className="text-xl font-semibold text-green-600 dark:text-green-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Welcome to Excellence!
                  </motion.p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-4 left-4">
            <motion.div
              className="w-8 h-8 border-l-2 border-t-2 border-primary-400"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <div className="absolute top-4 right-4">
            <motion.div
              className="w-8 h-8 border-r-2 border-t-2 border-accent-400"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </div>
          <div className="absolute bottom-4 left-4">
            <motion.div
              className="w-8 h-8 border-l-2 border-b-2 border-secondary-400"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </div>
          <div className="absolute bottom-4 right-4">
            <motion.div
              className="w-8 h-8 border-r-2 border-b-2 border-primary-400"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
