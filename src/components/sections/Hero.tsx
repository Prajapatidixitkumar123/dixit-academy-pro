'use client'

import { motion } from 'framer-motion'
import { Play, BookOpen, Users, Award, ArrowRight, CheckCircle, Star } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import CounterAnimation from '@/components/animations/CounterAnimation'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const stats = [
    { icon: BookOpen, value: 10000, label: 'Study Materials', suffix: '+' },
    { icon: Users, value: 100000, label: 'Students', suffix: '+' },
    { icon: Award, value: 95, label: 'Success Rate', suffix: '%' },
  ]

  const features = [
    'Expert-curated content',
    'Real exam patterns',
    'Multi-language support',
    'Performance analytics'
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-l from-accent-500/15 to-primary-600/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary-400/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-accent-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500/20 to-accent-500/20 backdrop-blur-sm border border-primary-400/30 rounded-full text-white text-sm font-medium mb-6 shadow-lg">
              <Star className="h-4 w-4 fill-current text-accent-400" />
              <span>Trusted by 100,000+ students nationwide</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Master Government Exams with{' '}
              <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 bg-clip-text text-transparent">
                Dixit Academy Pro
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Join successful candidates who cracked their government exams with our 
              comprehensive study materials, expert guidance, and proven strategies by Dixit.
            </p>
          </motion.div>

          {/* Features List */}
          <motion.div variants={itemVariants} className="mb-10">
            <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-200">
                  <CheckCircle className="h-5 w-5 text-accent-400" />
                  <span className="text-base font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="xl" className="group shadow-xl hover:shadow-2xl bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 border-0">
              Start Learning Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" size="xl" className="group bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div 
                  key={index} 
                  className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl mb-4 group-hover:from-primary-500/30 group-hover:to-accent-500/30 transition-all duration-300">
                    <Icon className="h-8 w-8 text-primary-400" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    <CounterAnimation end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-gray-300 font-medium">{stat.label}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-primary-400 to-accent-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  )
}
