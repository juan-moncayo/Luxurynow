'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { LanguageProvider } from '@/components/language-provider'
import { LanguageSwitcher } from '@/components/language-switcher'
import { useLanguage } from '@/contexts/language-context'
import { translations } from '@/lib/term-politics-translations'
import { WhatsAppButton } from '@/components/whatsapp-button'

// Add this type definition at the top of the file
type Section = 'useOfService' | 'reservationsAndPayments' | 'cancellationsAndRefunds' | 'liability'
type PrivacySection = 'informationCollection' | 'useOfInformation' | 'dataProtection' | 'sharingInformation' | 'yourRights'

export default function TermsAndPolicies() {
  return (
    <LanguageProvider>
      <TermsAndPoliciesContent />
    </LanguageProvider>
  )
}

function TermsAndPoliciesContent() {
  const { language } = useLanguage()
  const t = translations[language] || translations['en']
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? '' : section)
  }

  const termsSections: Section[] = ['useOfService', 'reservationsAndPayments', 'cancellationsAndRefunds', 'liability']
  const privacySections: PrivacySection[] = ['informationCollection', 'useOfInformation', 'dataProtection', 'sharingInformation', 'yourRights']

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#fff8ea] to-[#f2e8d5] text-[#203840]">
      <header className={`fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-20 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'bg-[#fff8ea] text-[#203840] shadow-md' : 'bg-transparent text-[#203840]'}`}>
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="rounded-full transition-transform duration-300 hover:scale-105"
          />
        </Link>
        <nav className="flex-1 flex justify-center items-center">
          <div className="hidden md:flex gap-6">
            {[
              { href: "/", label: t.navigation?.home || 'Home' },
              { href: "/Servicios", label: t.navigation?.services || 'Services' },
              { href: "/SobreNosotros", label: t.navigation?.aboutUs || 'About Us' },
              { href: "/Contacto", label: t.navigation?.contact || 'Contact' }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-lg font-medium relative group ${isScrolled ? 'text-[#203840]' : 'text-[#203840]'}`}
              >
                {item.label}
                <span className={`absolute left-0 bottom-0 w-full h-0.5 bg-[#406d70] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out`}></span>
              </Link>
            ))}
          </div>
        </nav>
        <div className="flex items-center">
          <LanguageSwitcher />
          <button
            className="md:hidden ml-4 p-2 rounded-md bg-[#406d70] text-[#fff8ea] hover:bg-[#f2d8a8] hover:text-[#203840] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#203840] focus:ring-[#f2d8a8] transition-all duration-300 transform hover:scale-105"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-40 bg-[#203840] text-[#fff8ea] pt-20"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center">
              {[
                { href: "/", label: t.navigation?.home || 'Home' },
                { href: "/Servicios", label: t.navigation?.services || 'Services' },
                { href: "/SobreNosotros", label: t.navigation?.aboutUs || 'About Us' },
                { href: "/Contacto", label: t.navigation?.contact || 'Contact' }
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium py-4 hover:text-[#f2d8a8] transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.main 
        className="flex-1 pt-24 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <motion.h1 
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-center text-[#806343] mb-12"
            variants={fadeInVariants}
          >
            {t.termsAndPolicies.title}
          </motion.h1>
          
          <motion.section 
            className="mb-12 bg-white rounded-lg shadow-lg p-6 md:p-8"
            variants={fadeInVariants}
            transition={{ delay: 0.2 }}
          >
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection('terms')}
            >
              <h2 className="text-2xl font-bold text-[#406d70] mb-4">{t.termsAndPolicies.termsOfService.title}</h2>
              <ChevronDown className={`h-6 w-6 transition-transform duration-300 ${activeSection === 'terms' ? 'transform rotate-180' : ''}`} />
            </div>
            <AnimatePresence>
              {activeSection === 'terms' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 mt-4"
                >
                  <p className="text-[#203840] leading-relaxed">{t.termsAndPolicies.termsOfService.intro}</p>
                  {termsSections.map((section) => (
                    <div key={section} className="mt-6">
                      <h3 className="text-xl font-semibold text-[#806343] mb-2">
                        {t.termsAndPolicies.termsOfService[section]?.title}
                      </h3>
                      <p className="text-[#203840] leading-relaxed">
                        {t.termsAndPolicies.termsOfService[section]?.content}
                      </p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>
          
          <motion.section 
            className="bg-white rounded-lg shadow-lg p-6 md:p-8"
            variants={fadeInVariants}
            transition={{ delay: 0.4 }}
          >
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection('privacy')}
            >
              <h2 className="text-2xl font-bold text-[#406d70] mb-4">{t.termsAndPolicies.privacyPolicy.title}</h2>
              <ChevronDown className={`h-6 w-6 transition-transform duration-300 ${activeSection === 'privacy' ? 'transform rotate-180' : ''}`} />
            </div>
            <AnimatePresence>
              {activeSection === 'privacy' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 mt-4"
                >
                  <p className="text-[#203840] leading-relaxed">{t.termsAndPolicies.privacyPolicy.intro}</p>
                  {privacySections.map((section) => (
                    <div key={section} className="mt-6">
                      <h3 className="text-xl font-semibold text-[#806343] mb-2">
                        {t.termsAndPolicies.privacyPolicy[section]?.title}
                      </h3>
                      <p className="text-[#203840] leading-relaxed">
                        {t.termsAndPolicies.privacyPolicy[section]?.content}
                      </p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>
        </div>
      </motion.main>

      <footer className="w-full py-6 px-4 md:px-6 bg-[#203840] text-[#fff8ea]">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm mb-4 sm:mb-0">© 2024 Luxury Now Cancun. {t.footer.rights}</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/TerminosYPolitica" className="text-sm hover:text-[#f2d8a8] transition-colors duration-300">
              {t.footer.references}
            </Link>
            <Link href="/TerminosYPolitica" className="text-sm hover:text-[#f2d8a8] transition-colors duration-300">
              {t.footer.terms}
            </Link>
            <Link href="/TerminosYPolitica" className="text-sm hover:text-[#f2d8a8] transition-colors duration-300">
              {t.footer.privacy}
            </Link>
          </nav>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  )
}

