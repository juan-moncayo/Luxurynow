'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Star, Menu, X } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { LanguageSwitcher } from '@/components/language-switcher'
import { translations, imagePaths } from '@/lib/translations'
import TestimonialsSection from '@/components/testimonials-section'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Home() {
  const { language } = useLanguage()
  const t = translations[language]
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const services = t.serviceCards

  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [description, setDescription] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)

    const savedReview = localStorage.getItem('luxuryNowReview')
    if (savedReview) {
      const { rating: savedRating, description: savedDescription, submitted: savedSubmitted } = JSON.parse(savedReview)
      setRating(savedRating)
      setDescription(savedDescription)
      setSubmitted(savedSubmitted)
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          entry.target.classList.remove('animate-out')
        } else {
          entry.target.classList.remove('animate-in')
          entry.target.classList.add('animate-out')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el)
    })

    if (servicesRef.current) {
      const serviceCards = servicesRef.current.querySelectorAll('.service-card')
      serviceCards.forEach((card) => {
        observer.observe(card)
      })
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  const saveReview = (newRating: number, newDescription: string, newSubmitted: boolean) => {
    const reviewData = { rating: newRating, description: newDescription, submitted: newSubmitted }
    localStorage.setItem('luxuryNowReview', JSON.stringify(reviewData))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (rating === 0) {
      setError('Please select a rating.')
      return
    }

    if (description.trim() === '') {
      setError('Please describe your experience.')
      return
    }

    const response = await fetch('https://formspree.io/f/xjkvgyro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rating, description }),
    })

    if (response.ok) {
      setSubmitted(true)
      saveReview(rating, description, true)
    } else {
      setError('There was an error submitting the form. Please try again.')
    }
  }

  const handleRatingChange = (newRating: number) => {
    setRating(newRating)
    saveReview(newRating, description, submitted)
  }

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value)
    saveReview(rating, e.target.value, submitted)
  }

  return (
    <>
      <style jsx global>{`
        @keyframes fadeInTop {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeOutTop {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(20px); }
        }
        @keyframes fadeOutLeft {
          from { opacity: 1; transform: translateX(0); }
          to { opacity: 0; transform: translateX(-100px); }
        }
        @keyframes fadeOutRight {
          from { opacity: 1; transform: translateX(0); }
          to { opacity: 0; transform: translateX(100px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
        }
        .animate-in {
          animation: fadeInTop 0.5s ease-out forwards;
        }
        .animate-out {
          animation: fadeOutTop 0.5s ease-out forwards;
        }
        .service-card {
          opacity: 0;
          transition: transform 0.3s ease-in-out;
        }
        .service-card:hover {
          transform: translateY(-10px);
        }
        .service-card.animate-in.fade-in-left {
          animation: fadeInLeft 0.5s ease-out forwards;
        }
        .service-card.animate-in.fade-in-right {
          animation: fadeInRight 0.5s ease-out forwards;
        }
        .service-card.animate-out.fade-in-left {
          animation: fadeOutLeft 0.5s ease-out forwards;
        }
        .service-card.animate-out.fade-in-right {
          animation: fadeOutRight 0.5s ease-out forwards;
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
      <div className="flex flex-col min-h-screen bg-[#fff8ea] text-[#203840]">
        <header className={`fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-20 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'bg-[#fff8ea] text-[#203840]' : 'bg-transparent text-[#203840]'}`}>
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
              className="md:hidden ml-4 p-2 rounded-md bg-[#406d70] text-[#fff8ea] hover:bg-[#f2d8a8] hover:text-[#203840] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#203840] focus:ring-[#f2d8a8] transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </header>
        
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-[#203840] text-[#fff8ea] pt-20">
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
                  className="text-lg font-medium py-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
        
        <main className="flex-1 pt-20">
          <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute w-full h-full object-cover"
            >
              <source src="/Fondo.webm" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#fff8ea] animate-on-scroll">
                    {t.heroTitle}
                  </h1>
                  <p className="mx-auto max-w-[700px] text-[#f2d8a8] md:text-xl font-semibold animate-on-scroll">
                    {t.heroSubtitle}
                  </p>
                </div>
                <div className="space-x-4 animate-on-scroll">
                  <Link 
                    href="#our-services"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-[#806343] text-[#fff8ea] hover:bg-[#406d70] h-10 py-2 px-4"
                  >
                    {t.exploreServices}
                  </Link>
                  <Link
                    href="/Contacto"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 text-[#fff8ea] border-[#fff8ea] hover:bg-[#fff8ea] hover:text-[#203840]"
                  >
                    {t.contact}
                  </Link>
                </div>
              </div>
            </div>
          </section>
          
          <section id="our-services" className="w-full py-12 md:py-24 lg:py-20 bg-[#203840]">
            <div className="container px-4 md:px-6 max-w-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#f2d8a8] animate-on-scroll">
                {t.ourServices}
              </h2>
              <div ref={servicesRef} className="grid gap-8 md:grid-cols-2 max-w-7xl mx-auto">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className={`service-card group relative overflow-hidden rounded-lg h-[calc(100vh-12rem)] ${index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'} transition-all duration-300 hover:shadow-lg`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <Image
                      src={imagePaths[language][service.title]}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end transition-transform duration-300 group-hover:translate-y-[-10px]">
                      <h3 className="text-[#fff8ea] text-3xl font-semibold mb-4">{service.title}</h3>
                      <p className="text-[#f2d8a8] text-lg mb-6">
                        {service.description}
                      </p>
                      <Link 
                        href="/Servicios"
                        className="inline-flex items-center justify-center rounded-md text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-[#406d70] text-[#fff8ea] hover:bg-[#806343] h-12 py-2 px-6 w-full sm:w-auto"
                      >
                        {t.moreInfo}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <TestimonialsSection />
        
        </main>

        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#f2d8a8] bg-[#203840] text-[#fff8ea]">
          <p className="text-xs">© 2024 Luxury Now Cancun. {t.footer.rights}</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link href="/TerminosYPolitica" className="text-xs hover:text-[#f2d8a8]">
              {t.footer.references}
            </Link>
            <Link href="/TerminosYPolitica" className="text-xs hover:text-[#f2d8a8]">
              {t.footer.terms}
            </Link>
            <Link href="/TerminosYPolitica" className="text-xs hover:text-[#f2d8a8]">
              {t.footer.privacy}
            </Link>
          </nav>
        </footer>
      </div>
      <WhatsAppButton />
    </>
  )
}

