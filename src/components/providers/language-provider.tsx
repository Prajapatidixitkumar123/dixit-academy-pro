'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'hi' | 'gu'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.materials': 'Study Materials',
    'nav.pricing': 'Pricing',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.signup': 'Sign Up',
    'hero.title': 'Master Government Exams with',
    'hero.subtitle': 'Dixit Study Hub',
    'hero.description': 'Comprehensive preparation platform for competitive government exams with expert guidance, quality study materials, and mock tests.',
    'hero.cta.primary': 'Start Learning',
    'hero.cta.secondary': 'Watch Demo',
    'features.title': 'Why Choose Dixit Study Hub?',
    'features.subtitle': 'Everything you need to succeed in government exams',
  },
  hi: {
    'nav.home': 'होम',
    'nav.features': 'विशेषताएं',
    'nav.materials': 'अध्ययन सामग्री',
    'nav.pricing': 'मूल्य निर्धारण',
    'nav.about': 'हमारे बारे में',
    'nav.contact': 'संपर्क',
    'nav.login': 'लॉगिन',
    'nav.signup': 'साइन अप',
    'hero.title': 'सरकारी परीक्षाओं में महारत हासिल करें',
    'hero.subtitle': 'दीक्षित स्टडी हब के साथ',
    'hero.description': 'विशेषज्ञ मार्गदर्शन, गुणवत्तापूर्ण अध्ययन सामग्री और मॉक टेस्ट के साथ प्रतियोगी सरकारी परीक्षाओं के लिए व्यापक तैयारी मंच।',
    'hero.cta.primary': 'सीखना शुरू करें',
    'hero.cta.secondary': 'डेमो देखें',
    'features.title': 'दीक्षित स्टडी हब क्यों चुनें?',
    'features.subtitle': 'सरकारी परीक्षाओं में सफल होने के लिए आवश्यक सब कुछ',
  },
  gu: {
    'nav.home': 'હોમ',
    'nav.features': 'લક્ષણો',
    'nav.materials': 'અભ્યાસ સામગ્રી',
    'nav.pricing': 'કિંમત',
    'nav.about': 'અમારા વિશે',
    'nav.contact': 'સંપર્ક',
    'nav.login': 'લોગિન',
    'nav.signup': 'સાઇન અપ',
    'hero.title': 'સરકારી પરીક્ષાઓમાં નિપુણતા મેળવો',
    'hero.subtitle': 'દીક્ષિત સ્ટડી હબ સાથે',
    'hero.description': 'નિષ્ણાત માર્ગદર્શન, ગુણવત્તાયુક્ત અભ્યાસ સામગ્રી અને મોક ટેસ્ટ સાથે સ્પર્ધાત્મક સરકારી પરીક્ષાઓ માટે વ્યાપક તૈયારી પ્લેટફોર્મ.',
    'hero.cta.primary': 'શીખવાનું શરૂ કરો',
    'hero.cta.secondary': 'ડેમો જુઓ',
    'features.title': 'દીક્ષિત સ્ટડી હબ કેમ પસંદ કરો?',
    'features.subtitle': 'સરકારી પરીક્ષાઓમાં સફળ થવા માટે જરૂરી બધું',
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && ['en', 'hi', 'gu'].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
