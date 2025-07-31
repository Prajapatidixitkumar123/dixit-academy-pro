'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, Award, TrendingUp, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'

interface Testimonial {
  id: string
  name: string
  position: string
  exam: string
  rank?: number
  rating: number
  image: string
  quote: string
  achievement: string
  year: string
  location: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    position: 'IAS Officer',
    exam: 'UPSC CSE',
    rank: 45,
    rating: 5,
    image: '/api/placeholder/100/100',
    quote: 'Dixit Study Hub transformed my preparation strategy. The comprehensive study materials and mock tests were exactly what I needed to crack UPSC. The mentorship program was exceptional!',
    achievement: 'Cleared UPSC CSE in first attempt',
    year: '2023',
    location: 'Delhi'
  },
  {
    id: '2',
    name: 'Rahul Patel',
    position: 'SBI PO',
    exam: 'SBI PO',
    rating: 5,
    image: '/api/placeholder/100/100',
    quote: 'The banking preparation course was outstanding. Live doubt sessions and personal mentoring helped me understand complex topics easily. Highly recommended for banking aspirants!',
    achievement: 'Selected as SBI PO',
    year: '2023',
    location: 'Mumbai'
  },
  {
    id: '3',
    name: 'Anjali Singh',
    position: 'SSC CGL',
    exam: 'SSC CGL',
    rank: 12,
    rating: 5,
    image: '/api/placeholder/100/100',
    quote: 'Amazing platform with quality content. The study materials are well-structured and the mock tests simulate real exam conditions perfectly. Got selected with great marks!',
    achievement: 'SSC CGL Tier 1 & 2 Cleared',
    year: '2023',
    location: 'Lucknow'
  },
  {
    id: '4',
    name: 'Vikram Reddy',
    position: 'Railway Officer',
    exam: 'RRB NTPC',
    rating: 5,
    image: '/api/placeholder/100/100',
    quote: 'Excellent faculty and comprehensive study material. The video lectures are easy to understand and the practice questions helped me a lot in my preparation.',
    achievement: 'Selected in RRB NTPC',
    year: '2023',
    location: 'Hyderabad'
  },
  {
    id: '5',
    name: 'Neha Gupta',
    position: 'State PSC Officer',
    exam: 'UPPSC',
    rank: 8,
    rating: 5,
    image: '/api/placeholder/100/100',
    quote: 'The current affairs section and state-specific content were incredibly helpful. The regular updates and expert guidance made my preparation very effective.',
    achievement: 'UPPSC PCS Selected',
    year: '2023',
    location: 'Kanpur'
  },
  {
    id: '6',
    name: 'Arjun Mehta',
    position: 'Bank Manager',
    exam: 'IBPS PO',
    rating: 5,
    image: '/api/placeholder/100/100',
    quote: 'Outstanding preparation platform! The quantitative aptitude and reasoning sections were explained brilliantly. The mock tests helped me improve my speed and accuracy.',
    achievement: 'IBPS PO Selected',
    year: '2023',
    location: 'Pune'
  }
]

const stats = [
  { label: 'Success Rate', value: '95%', icon: TrendingUp },
  { label: 'Students Placed', value: '50K+', icon: Award },
  { label: 'Average Rating', value: '4.9/5', icon: Star }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-50 border border-accent-200 rounded-full text-accent-700 text-sm font-medium mb-6">
            <Star className="h-4 w-4 fill-current" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            <span className="gradient-text">Student Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hear from our successful students who achieved their dreams with Dixit Study Hub
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const StatIcon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                  <StatIcon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </motion.div>

        {/* Main Testimonial */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800 border-none shadow-2xl">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-10 left-10 w-20 h-20 bg-primary-500 rounded-full" />
                  <div className="absolute bottom-10 right-10 w-16 h-16 bg-accent-500 rounded-full" />
                  <div className="absolute top-1/2 right-20 w-12 h-12 bg-secondary-500 rounded-full" />
                </div>

                <CardContent className="relative z-10 p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Testimonial Content */}
                    <div className="order-2 lg:order-1">
                      {/* Quote Icon */}
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mb-6">
                        <Quote className="w-6 h-6 text-white" />
                      </div>

                      {/* Rating */}
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < currentTestimonial.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                          {currentTestimonial.rating}/5
                        </span>
                      </div>

                      {/* Quote */}
                      <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic">
                        "{currentTestimonial.quote}"
                      </blockquote>

                      {/* Achievement Badge */}
                      <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
                        <Award className="w-4 h-4 text-green-600 dark:text-green-400 mr-2" />
                        <span className="text-sm font-medium text-green-800 dark:text-green-200">
                          {currentTestimonial.achievement}
                        </span>
                      </div>

                      {/* Author Info */}
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {currentTestimonial.name}
                        </h4>
                        <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                          {currentTestimonial.position}
                        </p>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-4">
                          <span>{currentTestimonial.exam}</span>
                          {currentTestimonial.rank && (
                            <span>Rank: {currentTestimonial.rank}</span>
                          )}
                          <span>{currentTestimonial.year}</span>
                          <span>{currentTestimonial.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Student Image */}
                    <div className="order-1 lg:order-2 flex justify-center">
                      <div className="relative">
                        <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 p-2">
                          <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 flex items-center justify-center">
                              <div className="text-6xl font-bold text-primary-600 dark:text-primary-400">
                                {currentTestimonial.name.charAt(0)}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Success Badge */}
                        <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800">
                          <Award className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12">
            <Button
              variant="secondary"
              size="icon"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12">
            <Button
              variant="secondary"
              size="icon"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary-600 w-8'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary-400'
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={testimonial.id}
              onClick={() => goToSlide(index)}
              className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                index === currentIndex
                  ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-primary-300 bg-white dark:bg-gray-800'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-center">
                <div className={`w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center ${
                  index === currentIndex
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                }`}>
                  {testimonial.name.charAt(0)}
                </div>
                <p className="text-xs font-medium text-gray-900 dark:text-white truncate">
                  {testimonial.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {testimonial.exam}
                </p>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your journey today and become the next success story. Join thousands of students who have achieved their dreams with us.
          </p>
          <Button variant="gradient" size="lg">
            Start Your Preparation
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
