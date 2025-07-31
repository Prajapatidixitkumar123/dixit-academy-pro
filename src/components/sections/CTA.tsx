'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone, MapPin, Clock, CheckCircle, Star, Users, BookOpen } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const benefits = [
  'Access to 10,000+ study materials',
  'Live doubt clearing sessions',
  'Personal mentorship program',
  'Mock tests with detailed analysis',
  'Current affairs updates',
  '24/7 student support'
]

const socialProof = [
  { icon: Users, value: '50,000+', label: 'Happy Students' },
  { icon: BookOpen, value: '10,000+', label: 'Study Materials' },
  { icon: Star, value: '4.9/5', label: 'Average Rating' }
]

export default function CTA() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setEmail('')
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600" />
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Start Your
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Success Journey?
              </span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Join thousands of successful students who have achieved their dreams with our comprehensive
              government exam preparation platform. Start your journey today!
            </p>

            {/* Social Proof */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {socialProof.map((item, index) => {
                const ItemIcon = item.icon
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                      <ItemIcon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">
                      {item.value}
                    </div>
                    <p className="text-white/80">
                      {item.label}
                    </p>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button variant="secondary" size="xl" className="group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="secondary" size="xl">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +91 9876543210
              </Button>
            </motion.div>
          </motion.div>

          {/* Newsletter & Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="glass border-white/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Get Free Study Materials
                  </h3>
                  <p className="text-white/80 mb-6">
                    Subscribe to our newsletter and get access to exclusive study materials,
                    current affairs updates, and exam tips delivered to your inbox.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                        className="w-full px-4 py-3 pl-12 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                      />
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                    </div>
                    <Button
                      type="submit"
                      variant="secondary"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitted}
                    >
                      {isSubmitted ? (
                        <>
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Subscribed!
                        </>
                      ) : (
                        'Subscribe Now'
                      )}
                    </Button>
                  </form>

                  <p className="text-xs text-white/60 mt-4">
                    * No spam, unsubscribe at any time
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                What You'll Get:
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/90 font-medium">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center space-x-3 text-white/80">
                  <Phone className="w-5 h-5" />
                  <span>+91 9876543210</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <Mail className="w-5 h-5" />
                  <span>support@dixitstudyhub.com</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <MapPin className="w-5 h-5" />
                  <span>New Delhi, India</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <Clock className="w-5 h-5" />
                  <span>24/7 Support Available</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Urgency Section */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-red-500/20 border border-red-400/30 px-6 py-3 rounded-full mb-6">
              <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" />
              <span className="text-red-100 font-medium">
                Limited Time Offer: 50% OFF on Annual Plans
              </span>
            </div>
            <p className="text-white/80 text-lg">
              Don't miss out! Join now and save big on your exam preparation journey.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
