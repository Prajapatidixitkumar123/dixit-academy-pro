'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Play, Eye, Clock, Star, Filter, Code, Users } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

interface Course {
  id: string
  title: string
  category: string
  type: 'Video' | 'Interactive' | 'Project' | 'Tutorial'
  duration: string
  enrollments: number
  rating: number
  thumbnail: string
  description: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  instructor: string
  price: number
}

const courses: Course[] = [
  {
    id: '1',
    title: 'React & Next.js Masterclass',
    category: 'Frontend',
    type: 'Video',
    duration: '12 hours',
    enrollments: 15420,
    rating: 4.8,
    thumbnail: '/api/placeholder/300/200',
    description: 'Master modern React development with Next.js, TypeScript, and best practices',
    level: 'Intermediate',
    instructor: 'Dixit',
    price: 99
  },
  {
    id: '2',
    title: 'Full-Stack JavaScript Development',
    category: 'Full-Stack',
    type: 'Interactive',
    duration: '20 hours',
    enrollments: 8920,
    rating: 4.9,
    thumbnail: '/api/placeholder/300/200',
    description: 'Complete full-stack development with Node.js, Express, and MongoDB',
    level: 'Advanced',
    instructor: 'Dixit',
    price: 149
  },
  {
    id: '3',
    title: 'Python for Data Science',
    category: 'Data Science',
    type: 'Project',
    duration: '15 hours',
    enrollments: 12300,
    rating: 4.7,
    thumbnail: '/api/placeholder/300/200',
    description: 'Learn Python programming for data analysis, visualization, and machine learning',
    level: 'Beginner',
    instructor: 'Dixit',
    price: 79
  },
  {
    id: '4',
    title: 'DevOps with Docker & Kubernetes',
    category: 'DevOps',
    type: 'Tutorial',
    duration: '18 hours',
    enrollments: 6750,
    rating: 4.9,
    thumbnail: '/api/placeholder/300/200',
    description: 'Master containerization and orchestration with Docker and Kubernetes',
    level: 'Advanced',
    instructor: 'Dixit',
    price: 199
  },
  {
    id: '5',
    title: 'Mobile App Development with React Native',
    category: 'Mobile',
    type: 'Video',
    duration: '16 hours',
    enrollments: 9840,
    rating: 4.6,
    thumbnail: '/api/placeholder/300/200',
    description: 'Build cross-platform mobile apps with React Native and Expo',
    level: 'Intermediate',
    instructor: 'Dixit',
    price: 129
  },
  {
    id: '6',
    title: 'AI & Machine Learning Fundamentals',
    category: 'AI/ML',
    type: 'Interactive',
    duration: '25 hours',
    enrollments: 11200,
    rating: 4.8,
    thumbnail: '/api/placeholder/300/200',
    description: 'Introduction to artificial intelligence and machine learning concepts',
    level: 'Beginner',
    instructor: 'Dixit',
    price: 179
  }
]

const categories = ['All', 'Frontend', 'Full-Stack', 'Data Science', 'DevOps', 'Mobile', 'AI/ML']
const levels = ['All', 'Beginner', 'Intermediate', 'Advanced']

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedLevel, setSelectedLevel] = useState('All')
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)

  const filteredCourses = courses.filter(course => {
    const categoryMatch = selectedCategory === 'All' || course.category === selectedCategory
    const levelMatch = selectedLevel === 'All' || course.level === selectedLevel
    return categoryMatch && levelMatch
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const CourseCard = ({ course }: { course: Course }) => (
    <motion.div
      variants={itemVariants}
      className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            course.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
            course.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
            'bg-red-500/20 text-red-400'
          }`}>
            {course.level}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-500/20 text-primary-400">
            {course.type}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 text-white text-sm">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
            <div className="flex items-center gap-1 ml-auto">
              <Star className="h-4 w-4 fill-current text-yellow-400" />
              <span>{course.rating}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium text-primary-400">{course.category}</span>
          <span className="text-xs text-gray-400">by {course.instructor}</span>
        </div>
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
          {course.title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {course.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{course.enrollments.toLocaleString()}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-white">${course.price}</span>
            <Button
              size="sm"
              className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 border-0"
              onClick={() => setSelectedCourse(course)}
            >
              <Play className="h-4 w-4 mr-1" />
              Enroll
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="courses" className="py-24 bg-secondary-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-l from-accent-500/10 to-primary-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500/20 to-accent-500/20 backdrop-blur-sm border border-primary-400/30 rounded-full text-white text-sm font-medium mb-6">
            <Code className="h-4 w-4 text-accent-400" />
            <span>Premium Coding Courses</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Master{' '}
            <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 bg-clip-text text-transparent">
              Modern Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Learn from industry experts with hands-on projects, real-world applications, and career-focused curriculum
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedLevel === level
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            size="xl"
            className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 border-0 shadow-xl hover:shadow-2xl"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Explore All Courses
          </Button>
        </motion.div>
      </div>

      {/* Course Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div
              className="bg-secondary-900 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">{selectedCourse.title}</h3>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p><strong>Category:</strong> {selectedCourse.category}</p>
                <p><strong>Level:</strong> {selectedCourse.level}</p>
                <p><strong>Duration:</strong> {selectedCourse.duration}</p>
                <p><strong>Instructor:</strong> {selectedCourse.instructor}</p>
                <p><strong>Enrollments:</strong> {selectedCourse.enrollments.toLocaleString()}</p>
                <p><strong>Rating:</strong> {selectedCourse.rating}/5</p>
                <p><strong>Description:</strong> {selectedCourse.description}</p>
              </div>

              <div className="flex items-center justify-between mt-8">
                <span className="text-3xl font-bold text-white">${selectedCourse.price}</span>
                <Button
                  size="xl"
                  className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 border-0"
                >
                  Enroll Now
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
