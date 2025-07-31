'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useLanguage } from '@/components/providers/language-provider'

const footerLinks = {
  courses: [
    { name: 'UPSC Preparation', href: '/courses/upsc' },
    { name: 'SSC Exams', href: '/courses/ssc' },
    { name: 'Banking Exams', href: '/courses/banking' },
    { name: 'Railway Exams', href: '/courses/railway' },
    { name: 'State PSC', href: '/courses/state-psc' },
    { name: 'Defense Exams', href: '/courses/defense' }
  ],
  resources: [
    { name: 'Study Materials', href: '/materials' },
    { name: 'Mock Tests', href: '/tests' },
    { name: 'Current Affairs', href: '/current-affairs' },
    { name: 'Previous Papers', href: '/previous-papers' },
    { name: 'Video Lectures', href: '/videos' },
    { name: 'Live Classes', href: '/live-classes' }
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Faculty', href: '/faculty' },
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact Us', href: '/contact' }
  ],
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Refund Policy', href: '/refund' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Support Ticket', href: '/support' }
  ]
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/dixitstudyhub', color: 'hover:text-blue-500' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/dixitstudyhub', color: 'hover:text-blue-400' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/dixitstudyhub', color: 'hover:text-pink-500' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/dixitstudyhub', color: 'hover:text-red-500' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/dixitstudyhub', color: 'hover:text-blue-600' }
]

export default function Footer() {
  const { t } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary-500 rounded-full" />
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-accent-500 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-secondary-500 rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">D</span>
                  </div>
                  <span className="text-2xl font-bold gradient-text">Dixit Study Hub</span>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Empowering students to achieve their dreams through comprehensive government exam preparation.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Phone className="w-4 h-4" />
                    <span>+91 9876543210</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Mail className="w-4 h-4" />
                    <span>support@dixitstudyhub.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>New Delhi, India</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Courses */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-4 text-white">Courses</h3>
                <ul className="space-y-2">
                  {footerLinks.courses.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Resources */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
                <ul className="space-y-2">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Company */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
                <ul className="space-y-2">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Support */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
                <ul className="space-y-2">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            className="mt-12 pt-8 border-t border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Stay Updated</h3>
                <p className="text-gray-400 mb-4">
                  Subscribe to our newsletter for the latest exam updates, study tips, and exclusive content.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
                <Button variant="gradient" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 text-sm">
                © 2024 Dixit Study Hub. All rights reserved. | Made with ❤️ in India
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => {
                const SocialIcon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors duration-200`}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <SocialIcon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </motion.div>

            {/* Back to Top */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-gray-400 hover:text-white"
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                Back to Top
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
