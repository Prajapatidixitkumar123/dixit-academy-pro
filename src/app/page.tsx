'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import StudyMaterials from '@/components/sections/StudyMaterials'
import Testimonials from '@/components/sections/Testimonials'
import Pricing from '@/components/sections/Pricing'
import CTA from '@/components/sections/CTA'
import ParticleBackground from '@/components/animations/ParticleBackground'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0, transition: { duration: 0.4 } }
}

export default function Home() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative overflow-hidden"
    >
      <ParticleBackground />
      <Hero />
      <Features />
      <StudyMaterials />
      <Testimonials />
      <Pricing />
      <CTA />
    </motion.div>
  )
}
