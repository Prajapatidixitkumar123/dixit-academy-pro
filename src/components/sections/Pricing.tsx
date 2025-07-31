'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, X, Star, Crown, Zap, Shield } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'


interface PricingPlan {
  id: string
  name: string
  price: number
  originalPrice?: number
  duration: string
  description: string
  features: string[]
  notIncluded?: string[]
  popular?: boolean
  premium?: boolean
  icon: any
  color: string
  buttonText: string
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic Plan',
    price: 499,
    duration: 'month',
    description: 'Perfect for beginners starting their government exam preparation',
    features: [
      'Access to 1000+ study materials',
      '50 mock tests per month',
      'Basic video lectures',
      'Email support',
      'Mobile app access',
      'Progress tracking'
    ],
    notIncluded: [
      'Live classes',
      'Personal mentor',
      'Advanced analytics'
    ],
    icon: Shield,
    color: 'from-blue-500 to-blue-600',
    buttonText: 'Get Started'
  },
  {
    id: 'premium',
    name: 'Premium Plan',
    price: 999,
    originalPrice: 1499,
    duration: 'month',
    description: 'Most popular choice for serious exam preparation',
    features: [
      'Access to 5000+ study materials',
      'Unlimited mock tests',
      'HD video lectures',
      'Live doubt clearing sessions',
      'Personal study planner',
      'Advanced analytics',
      'Priority support',
      'Offline content download',
      'Previous year papers'
    ],
    popular: true,
    icon: Star,
    color: 'from-green-500 to-green-600',
    buttonText: 'Most Popular'
  },
  {
    id: 'pro',
    name: 'Pro Plan',
    price: 1999,
    originalPrice: 2999,
    duration: 'month',
    description: 'Ultimate package for guaranteed success',
    features: [
      'Everything in Premium',
      'Personal mentor assigned',
      'One-on-one guidance',
      'Interview preparation',
      'Resume building',
      'Job placement assistance',
      'Lifetime access to materials',
      'Custom study schedule',
      'Weekly performance review',
      '24/7 priority support'
    ],
    premium: true,
    icon: Crown,
    color: 'from-purple-500 to-purple-600',
    buttonText: 'Go Premium'
  }
]

const yearlyDiscount = 30 // 30% discount for yearly plans

export default function Pricing() {

  const [isYearly, setIsYearly] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const calculatePrice = (price: number) => {
    if (isYearly) {
      const yearlyPrice = price * 12
      const discountedPrice = yearlyPrice - (yearlyPrice * yearlyDiscount / 100)
      return Math.round(discountedPrice)
    }
    return price
  }

  const calculateOriginalPrice = (originalPrice?: number) => {
    if (!originalPrice) return undefined
    if (isYearly) {
      return originalPrice * 12
    }
    return originalPrice
  }

  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            <span className="gradient-text">Choose Your Plan</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Select the perfect plan for your government exam preparation journey
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${
              !isYearly ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
            }`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isYearly ? 'bg-primary-600' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${
              isYearly ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
            }`}>
              Yearly
            </span>
            {isYearly && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                Save {yearlyDiscount}%
              </span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pricingPlans.map((plan, index) => {
            const PlanIcon = plan.icon
            const finalPrice = calculatePrice(plan.price)
            const finalOriginalPrice = calculateOriginalPrice(plan.originalPrice)
            
            return (
              <motion.div
                key={plan.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`relative ${
                  plan.popular ? 'md:-mt-4 md:mb-4' : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Premium Badge */}
                {plan.premium && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Crown className="w-4 h-4 mr-1" />
                      Premium
                    </div>
                  </div>
                )}

                <Card className={`h-full relative overflow-hidden ${
                  plan.popular ? 'ring-2 ring-green-500 shadow-2xl' : ''
                } ${
                  plan.premium ? 'ring-2 ring-purple-500 shadow-2xl' : ''
                }`}>
                  {/* Background Gradient */}
                  <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-r ${plan.color} opacity-10`} />
                  
                  <CardHeader className="relative z-10 text-center pb-2">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                      <PlanIcon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                      {plan.name}
                    </CardTitle>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      {plan.description}
                    </p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Pricing */}
                    <div className="text-center mb-6">
                      <div className="flex items-center justify-center space-x-2">
                        {finalOriginalPrice && (
                          <span className="text-2xl text-gray-400 line-through">
                            ₹{finalOriginalPrice.toLocaleString()}
                          </span>
                        )}
                        <span className="text-4xl font-bold text-gray-900 dark:text-white">
                          ₹{finalPrice.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        per {isYearly ? 'year' : plan.duration}
                      </p>
                      {isYearly && (
                        <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                          Save ₹{(plan.price * 12 * yearlyDiscount / 100).toLocaleString()} annually
                        </p>
                      )}
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                      
                      {plan.notIncluded && plan.notIncluded.map((feature, featureIndex) => (
                        <div key={`not-${featureIndex}`} className="flex items-start space-x-3 opacity-50">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mt-0.5">
                            <X className="w-3 h-3 text-gray-400" />
                          </div>
                          <span className="text-gray-500 dark:text-gray-400 text-sm line-through">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button
                      variant={plan.popular ? 'gradient' : plan.premium ? 'gradient' : 'outline'}
                      size="lg"
                      className="w-full"
                    >
                      {plan.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Have questions? We're here to help you choose the right plan.
          </p>
          <Button variant="outline" size="lg">
            View All FAQs
          </Button>
        </motion.div>

        {/* Money Back Guarantee */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 px-6 py-3 rounded-full">
            <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
            <span className="text-green-800 dark:text-green-200 font-medium">
              30-day money-back guarantee
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
