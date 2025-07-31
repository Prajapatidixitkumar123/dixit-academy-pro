'use client'

import { useState, useEffect } from 'react'
import { PreLoader } from '@/components/animations/PreLoader'
import Header from './Header'
import Footer from './Footer'

interface LayoutWrapperProps {
  children: React.ReactNode
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const handlePreloaderComplete = () => {
    setIsLoading(false)
    setTimeout(() => {
      setShowContent(true)
    }, 100)
  }

  useEffect(() => {
    // Ensure minimum loading time for better UX
    const minLoadTime = setTimeout(() => {
      if (!isLoading) {
        setShowContent(true)
      }
    }, 2000)

    return () => clearTimeout(minLoadTime)
  }, [isLoading])

  return (
    <>
      {isLoading && (
        <PreLoader 
          onComplete={handlePreloaderComplete}
          duration={3000}
        />
      )}
      
      {showContent && (
        <div className="relative min-h-screen">
          <Header />
          <main className="relative">
            {children}
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}
