'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Download, Eye, Clock, Star, Filter } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { PDFViewer } from '@/components/ui/PDFViewer'


interface StudyMaterial {
  id: string
  title: string
  category: string
  type: 'PDF' | 'Video' | 'Notes' | 'Practice'
  duration: string
  downloads: number
  rating: number
  thumbnail: string
  description: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
}

const studyMaterials: StudyMaterial[] = [
  {
    id: '1',
    title: 'SSC CGL Complete Mathematics',
    category: 'SSC',
    type: 'PDF',
    duration: '500+ pages',
    downloads: 15420,
    rating: 4.8,
    thumbnail: '/api/placeholder/300/200',
    description: 'Comprehensive mathematics guide for SSC CGL with solved examples',
    level: 'Intermediate'
  },
  {
    id: '2',
    title: 'UPSC Current Affairs 2024',
    category: 'UPSC',
    type: 'Notes',
    duration: '300+ pages',
    downloads: 8920,
    rating: 4.9,
    thumbnail: '/api/placeholder/300/200',
    description: 'Latest current affairs compilation for UPSC preparation',
    level: 'Advanced'
  },
  {
    id: '3',
    title: 'Banking Reasoning Practice',
    category: 'Banking',
    type: 'Practice',
    duration: '1000+ questions',
    downloads: 12350,
    rating: 4.7,
    thumbnail: '/api/placeholder/300/200',
    description: 'Extensive reasoning practice questions for banking exams',
    level: 'Beginner'
  },
  {
    id: '4',
    title: 'English Grammar Masterclass',
    category: 'General',
    type: 'Video',
    duration: '25 hours',
    downloads: 18750,
    rating: 4.9,
    thumbnail: '/api/placeholder/300/200',
    description: 'Complete English grammar course for competitive exams',
    level: 'Intermediate'
  },
  {
    id: '5',
    title: 'Railway Group D Physics',
    category: 'Railway',
    type: 'PDF',
    duration: '400+ pages',
    downloads: 9840,
    rating: 4.6,
    thumbnail: '/api/placeholder/300/200',
    description: 'Physics concepts and practice for Railway Group D exam',
    level: 'Beginner'
  },
  {
    id: '6',
    title: 'State PSC History Notes',
    category: 'State PSC',
    type: 'Notes',
    duration: '250+ pages',
    downloads: 7630,
    rating: 4.8,
    thumbnail: '/api/placeholder/300/200',
    description: 'Comprehensive history notes for state PSC examinations',
    level: 'Advanced'
  }
]

const categories = ['All', 'SSC', 'UPSC', 'Banking', 'Railway', 'State PSC', 'General']
const types = ['All', 'PDF', 'Video', 'Notes', 'Practice']

export default function StudyMaterials() {

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedType, setSelectedType] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPDF, setSelectedPDF] = useState<StudyMaterial | null>(null)
  const [isPDFViewerOpen, setIsPDFViewerOpen] = useState(false)

  const filteredMaterials = studyMaterials.filter(material => {
    const matchesCategory = selectedCategory === 'All' || material.category === selectedCategory
    const matchesType = selectedType === 'All' || material.type === selectedType
    const matchesSearch = material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         material.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesType && matchesSearch
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'PDF': return BookOpen
      case 'Video': return Eye
      case 'Notes': return BookOpen
      case 'Practice': return Star
      default: return BookOpen
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'PDF': return 'from-red-500 to-red-600'
      case 'Video': return 'from-blue-500 to-blue-600'
      case 'Notes': return 'from-green-500 to-green-600'
      case 'Practice': return 'from-purple-500 to-purple-600'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  const handleDownload = (material: StudyMaterial) => {
    // Simulate download functionality
    const link = document.createElement('a')
    link.href = `/api/download/${material.id}` // This would be your actual download endpoint
    link.download = `${material.title}.${material.type.toLowerCase()}`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Show success message
    alert(`Downloading ${material.title}...`)
  }

  const handleView = (material: StudyMaterial) => {
    setSelectedPDF(material)
    setIsPDFViewerOpen(true)
  }

  return (
    <section id="materials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Study Materials</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Access thousands of high-quality study materials, practice tests, and video lectures
            designed by experts for government exam preparation
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search study materials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <Filter className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-2">Category:</span>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-2">Type:</span>
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedType === type
                      ? 'bg-accent-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-accent-50 dark:hover:bg-gray-700'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Materials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence>
            {filteredMaterials.map((material) => {
              const TypeIcon = getTypeIcon(material.type)
              return (
                <motion.div
                  key={material.id}
                  variants={itemVariants}
                  layout
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ y: -10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Card className="h-full overflow-hidden group hover:shadow-2xl transition-all duration-300">
                    {/* Thumbnail */}
                    <div className="relative h-48 bg-gradient-to-br from-primary-500 to-accent-500 overflow-hidden">
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute top-4 left-4">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${getTypeColor(material.type)} flex items-center justify-center`}>
                          <TypeIcon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          material.level === 'Beginner' ? 'bg-green-500 text-white' :
                          material.level === 'Intermediate' ? 'bg-yellow-500 text-white' :
                          'bg-red-500 text-white'
                        }`}>
                          {material.level}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-bold text-lg mb-1 group-hover:scale-105 transition-transform">
                          {material.title}
                        </h3>
                        <p className="text-white/80 text-sm">{material.category}</p>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                        {material.description}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center justify-between mb-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {material.duration}
                          </div>
                          <div className="flex items-center">
                            <Download className="w-4 h-4 mr-1" />
                            {material.downloads.toLocaleString()}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-500 fill-current" />
                          {material.rating}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex space-x-2">
                        <Button 
                          variant="gradient" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => handleDownload(material)}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleView(material)}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredMaterials.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <BookOpen className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No materials found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}

        {/* Load More Button */}
        {filteredMaterials.length > 0 && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" size="lg">
              Load More Materials
            </Button>
          </motion.div>
        )}

        {/* PDF Viewer */}
        {selectedPDF && (
          <PDFViewer
            isOpen={isPDFViewerOpen}
            onClose={() => {
              setIsPDFViewerOpen(false)
              setSelectedPDF(null)
            }}
            pdfUrl={selectedPDF.thumbnail} // In real app, this would be the actual PDF URL
            title={selectedPDF.title}
          />
        )}
      </div>
    </section>
  )
}
