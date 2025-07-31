'use client'

import { motion } from 'framer-motion'
import { BookOpen, Users, Award, TrendingUp, Shield, Zap, Brain, Target, Clock, CheckCircle, HeadphonesIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'

export default function Features() {
  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Study Materials',
      description: 'Access 10,000+ expert-curated study materials covering all major government exams with regular updates and latest patterns.',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Brain,
      title: 'AI-Powered Learning',
      description: 'Experience personalized learning with AI-driven content recommendations, adaptive testing, and smart study plans.',
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: Target,
      title: 'Mock Tests & Analysis',
      description: 'Practice with 1000+ exam-pattern mock tests and get detailed performance analysis to identify improvement areas.',
      color: 'from-primary-400 to-accent-400'
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Learn from top educators and successful candidates who have cracked prestigious government exams like UPSC, SSC.',
      color: 'from-accent-400 to-primary-500'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Track your progress with advanced analytics, performance insights, and personalized study recommendations.',
      color: 'from-primary-600 to-accent-500'
    },
    {
      icon: Shield,
      title: 'Proven Success Rate',
      description: 'Join 100,000+ successful candidates with our 95% success rate in government exam preparation.',
      color: 'from-accent-600 to-primary-400'
    }
  ]

  return (
    <section id="features" className="py-24 bg-secondary-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500/20 to-accent-500/20 backdrop-blur-sm border border-primary-400/30 rounded-full text-white text-sm font-medium mb-6">
            <CheckCircle className="h-4 w-4 text-accent-400" />
            <span>Comprehensive Learning Platform</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 bg-clip-text text-transparent">
              Dixit Academy Pro
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to excel in government exams, all in one comprehensive platform designed by experts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                whileHover={{ y: -8 }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
