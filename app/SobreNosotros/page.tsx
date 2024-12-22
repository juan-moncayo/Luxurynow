'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { translations, type Language } from '@/lib/aboutus-translations'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { useLanguage } from '@/contexts/language-context'

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    setIsOpen(false)
  }

  return (
    <div className="relative inline-block text-left z-50">
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex justify-center items-center w-full rounded-md border border-gray-300 px-4 py-2 bg-[#203840] text-sm font-medium text-white hover:bg-[#2d4f5a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-[#203840] transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
        id="language-menu"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
        {language.toUpperCase()}
        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#fff8ea] ring-1 ring-black ring-opacity-5 animate-fadeIn"
        >
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="language-menu">
            {['en', 'fr', 'es'].map((lang) => (
              <button
                key={lang}
                onClick={() => changeLanguage(lang as Language)}
                className="block w-full text-left px-4 py-2 text-sm text-[#203840] hover:bg-[#f2d8a8] transition-colors duration-200"
                role="menuitem"
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function AnimatedElement({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function AboutUs() {
  const { language } = useLanguage()
  const t = translations[language]
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-[#fff8ea] text-[#203840]">
      <header className={`fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-20 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'bg-[#fff8ea] text-[#203840] shadow-md' : 'bg-transparent text-[#203840]'}`}>
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="rounded-full"
          />
        </Link>
        <nav className="flex-1 flex justify-center items-center">
          <div className="hidden md:flex gap-6">
            {[
              { href: "/", label: t.home },
              { href: "/Servicios", label: t.services },
              { href: "/SobreNosotros", label: t.aboutUs },
              { href: "/Contacto", label: t.contact }
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
            className="md:hidden ml-4 p-2 rounded-md bg-[#406d70] text-[#fff8ea] hover:bg-[#f2d8a8] hover:text-[#203840] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#203840] focus:ring-[#f2d8a8] transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#203840] text-[#fff8ea] pt-20 animate-fadeIn"
        >
          <nav className="flex flex-col items-center">
            {[
              { href: "/", label: t.home },
              { href: "/Servicios", label: t.services },
              { href: "/SobreNosotros", label: t.aboutUs },
              { href: "/Contacto", label: t.contact }
            ].map((item) => (
              <div
                key={item.href}
                className="transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
              >
                <Link
                  href={item.href}
                  className="text-lg font-medium py-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      )}

      <main className="flex-1 pt-20">
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          <Image
            src="/images/about-us-hero.jpg"
            alt="Luxury Now Cancun Experience"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <AnimatedElement className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{t.aboutUs}</h1>
            <p className="text-xl md:text-2xl">{t.aboutUsHeroSubtitle}</p>
          </AnimatedElement>
        </section>

        <section className="py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="container px-4 md:px-6 mx-auto">
            <AnimatedElement className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-xl text-[#203840] mb-6">
                {t.aboutUsDescription1}
              </p>
              <p className="text-xl text-[#203840]">
                {t.aboutUsDescription2}
              </p>
            </AnimatedElement>

            <div className="grid gap-12 md:grid-cols-3 mb-12 relative">
              <div className="absolute inset-0 bg-[#f2d8a8] transform -skew-y-6 z-0"></div>
              {[
                { icon: '🎯', title: t.ourMission, description: t.missionDescription },
                { icon: '👁️', title: t.ourVision, description: t.visionDescription },
                { icon: '💎', title: t.ourValues, description: t.valuesDescription }
              ].map((item, index) => (
                <AnimatedElement key={index} className="flex flex-col items-center text-center relative z-10">
                  <div className="w-24 h-24 bg-[#406d70] rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-4xl text-[#fff8ea]">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#806343]">{item.title}</h3>
                  <p>{item.description}</p>
                </AnimatedElement>
              ))}
            </div>

            <AnimatedElement className="bg-[#f2d8a8] p-8 rounded-lg mb-12 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-[#806343]">{t.ourTeam}</h2>
              <p className="mb-4">
                {t.teamDescription1}
              </p>
              <p>
                {t.teamDescription2}
              </p>
            </AnimatedElement>

            <AnimatedElement className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4 text-[#806343]">{t.discoverDifference}</h2>
              <p className="mb-6">
                {t.differenceDescription}
              </p>
              <div
                className="transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
              >
                <Link
                  href="/Contacto"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-[#406d70] text-[#fff8ea] hover:bg-[#806343] h-10 py-2 px-4"
                >
                  {t.contactUsButton}
                </Link>
              </div>
            </AnimatedElement>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {t.features.map((item, index) => (
                <AnimatedElement key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-2 text-[#806343]">{item.title}</h3>
                  <p>{item.description}</p>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#f2d8a8] bg-[#203840] text-[#fff8ea]">
        <p className="text-xs">© 2024 Luxury Now Cancun. {t.footer.rights}</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/TerminosYPolitica" className="text-xs hover:text-[#f2d8a8] transition-colors duration-200">
            {t.footer.terms}
          </Link>
          <Link href="/TerminosYPolitica" className="text-xs hover:text-[#f2d8a8] transition-colors duration-200">
            {t.footer.privacy}
          </Link>
        </nav>
      </footer>
      <WhatsAppButton />
    </div>
  )
}

