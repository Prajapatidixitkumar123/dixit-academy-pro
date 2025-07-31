import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { LanguageProvider } from '@/components/providers/language-provider'
import LayoutWrapper from '@/components/layout/LayoutWrapper'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://dixitstudyhub.com' : 'http://localhost:3000'),
  title: 'Dixit Study Hub - Government Exam Preparation Platform',
  description: 'Comprehensive government exam preparation platform with study materials, mock tests, and expert guidance for competitive exams.',
  keywords: 'government exams, competitive exams, study materials, mock tests, exam preparation',
  authors: [{ name: 'Dixit Study Hub' }],
  creator: 'Dixit Study Hub',
  publisher: 'Dixit Study Hub',
  openGraph: {
    title: 'Dixit Study Hub - Government Exam Preparation Platform',
    description: 'Comprehensive government exam preparation platform with study materials, mock tests, and expert guidance.',
    url: 'https://dixitstudyhub.com',
    siteName: 'Dixit Study Hub',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dixit Study Hub',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dixit Study Hub - Government Exam Preparation Platform',
    description: 'Comprehensive government exam preparation platform with study materials, mock tests, and expert guidance.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <div className="relative min-h-screen bg-background">
              <LayoutWrapper>
                {children}
              </LayoutWrapper>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
