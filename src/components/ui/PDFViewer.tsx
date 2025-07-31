'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, ZoomIn, ZoomOut, RotateCw, Share2 } from 'lucide-react'
import { Button } from './Button'
import { Modal } from './Modal'

interface PDFViewerProps {
  isOpen: boolean
  onClose: () => void
  pdfUrl: string
  title: string
}

export function PDFViewer({ isOpen, onClose, pdfUrl, title }: PDFViewerProps) {
  const [zoom, setZoom] = useState(100)
  const [rotation, setRotation] = useState(0)

  const handleDownload = () => {
    // Create a temporary link element
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = `${title}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: `Check out this study material: ${title}`,
          url: window.location.href
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm">
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-md">
              <h2 className="text-white font-semibold truncate max-w-md">
                {title}
              </h2>
              
              <div className="flex items-center space-x-2">
                {/* Zoom Controls */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setZoom(Math.max(50, zoom - 25))}
                  className="text-white hover:bg-white/20"
                >
                  <ZoomOut className="w-4 h-4" />
                </Button>
                <span className="text-white text-sm min-w-[3rem] text-center">
                  {zoom}%
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setZoom(Math.min(200, zoom + 25))}
                  className="text-white hover:bg-white/20"
                >
                  <ZoomIn className="w-4 h-4" />
                </Button>

                {/* Rotate */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setRotation((rotation + 90) % 360)}
                  className="text-white hover:bg-white/20"
                >
                  <RotateCw className="w-4 h-4" />
                </Button>

                {/* Download */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleDownload}
                  className="text-white hover:bg-white/20"
                >
                  <Download className="w-4 h-4" />
                </Button>

                {/* Share */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleShare}
                  className="text-white hover:bg-white/20"
                >
                  <Share2 className="w-4 h-4" />
                </Button>

                {/* Close */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="text-white hover:bg-white/20"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* PDF Content */}
            <div className="flex-1 flex items-center justify-center p-4">
              <motion.div
                className="bg-white rounded-lg shadow-2xl max-w-4xl w-full h-full"
                style={{
                  transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                {/* PDF Placeholder - In real app, you'd use react-pdf or similar */}
                <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 bg-red-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">PDF</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      PDF content would be displayed here
                    </p>
                    <Button onClick={handleDownload} variant="gradient">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}
