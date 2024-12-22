'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { translations } from '@/lib/contact-translations'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/language-context'

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  const changeLanguage = (lang: 'en' | 'fr' | 'es') => {
    setLanguage(lang)
    setIsOpen(false)
  }

  return (
    <div className="relative inline-block text-left z-50">
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex justify-center items-center w-full rounded-md border border-gray-300 px-4 py-2 bg-[#203840] text-sm font-medium text-white hover:bg-[#406d70] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-[#203840] transition-all duration-300 transform hover:scale-105"
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#fff8ea] ring-1 ring-black ring-opacity-5"
          >
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="language-menu">
              {['en', 'fr', 'es'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => changeLanguage(lang as 'en' | 'fr' | 'es')}
                  className="block w-full text-left px-4 py-2 text-sm text-[#203840] hover:bg-[#f2d8a8] transition-colors duration-200"
                  role="menuitem"
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Contact() {
  const { language } = useLanguage()
  const t = translations[language]
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const WHATSAPP_NUMBER = "3163535347";

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Formspree submission
    try {
      const response = await fetch("https://formspree.io/f/xnnqkvqb", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        }
      });
      
      if (response.ok) {
        console.log("Form submitted successfully to Formspree");
      } else {
        console.error("Formspree submission failed");
      }
    } catch (error) {
      console.error("Error submitting to Formspree:", error);
    }

    // Construct WhatsApp message
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank')

    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#fff8ea] text-[#203840]">
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
              { href: "/", label: t.home },
              { href: "/Servicios", label: t.services },
              { href: "/SobreNosotros", label: t.aboutUs },
              { href: "/Contacto", label: t.contact }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-lg font-medium relative group transition-colors duration-300 ${isScrolled ? 'text-[#203840]' : 'text-[#203840]'}`}
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
            className="md:hidden ml-4 p-2 rounded-md bg-[#203840] text-[#fff8ea] hover:bg-[#406d70] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#203840] focus:ring-[#f2d8a8] transition-colors duration-200"
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
                { href: "/", label: t.home },
                { href: "/Servicios", label: t.services },
                { href: "/SobreNosotros", label: t.aboutUs },
                { href: "/Contacto", label: t.contact }
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
        className="flex-1 pt-20 animate-fadeIn"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section className="py-12 md:py-24 lg:py-32">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="container px-4 md:px-6 mx-auto">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-center text-[#806343] mb-8">
                {t.contactUs.title}
              </h1>
              <div className="grid md:grid-cols-2 gap-12">
                <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>{t.contactForm.title}</CardTitle>
                    <CardDescription>{t.contactForm.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name">{t.contactForm.name}</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="transition-all duration-200 focus:ring-2 focus:ring-[#406d70] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">{t.contactForm.email}</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="transition-all duration-200 focus:ring-2 focus:ring-[#406d70] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <Label htmlFor="message">{t.contactForm.message}</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="transition-all duration-200 focus:ring-2 focus:ring-[#406d70] focus:border-transparent"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-[#406d70] text-white hover:bg-[#806343] transition-colors duration-300 transform hover:scale-105"
                      >
                        {t.contactForm.send}
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>{t.contactInfo.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold">{t.contactInfo.address}</h3>
                      <p>{t.contactInfo.addressValue}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">{t.contactInfo.phone}</h3>
                      <p>{t.contactInfo.phoneValue}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">{t.contactInfo.email}</h3>
                      <p>{t.contactInfo.emailValue}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">{t.contactInfo.hours}</h3>
                      <p>{t.contactInfo.hoursValue}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">{t.socialMedia.title}</h3>
                      <div className="flex space-x-4 mt-2">
                        <a href={t.socialMedia.facebook} className="text-[#406d70] hover:text-[#806343] transition-colors duration-300 transform hover:scale-110">
                          <span className="sr-only">Facebook</span>
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                          </svg>
                        </a>
                        <a href={t.socialMedia.instagram} className="text-[#406d70] hover:text-[#806343] transition-colors duration-300 transform hover:scale-110">
                          <span className="sr-only">Instagram</span>
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                          </svg>
                        </a>
                        <a href={t.socialMedia.twitter} className="text-[#406d70] hover:text-[#806343] transition-colors duration-300 transform hover:scale-110">
                          <span className="sr-only">Twitter</span>
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </section>
      </motion.main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#f2d8a8] bg-[#203840] text-[#fff8ea]">
        <p className="text-xs">© 2024 Luxury Now Cancun. {t.footer.copyright}</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/TerminosYPolitica" className="text-xs hover:text-[#f2d8a8]">
            {t.footer.terms}
          </Link>
          <Link href="/TerminosYPolitica" className="text-xs hover:text-[#f2d8a8]">
            {t.footer.privacy}
          </Link>
        </nav>
      </footer>
      <WhatsAppButton />
    </div>
  )
}

