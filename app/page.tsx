'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef, createContext, useContext } from 'react'
import { Star, Globe, Menu } from 'lucide-react'

// Language context
const LanguageContext = createContext({
  language: 'en',
  setLanguage: (lang: string) => {},
})

// Translations
const translations = {
  en: {
    services: "Services",
    aboutUs: "About Us",
    contact: "Contact",
    heroTitle: "Luxury Now Cancun",
    heroSubtitle: "Tailored Elite Travel Experiences Just for You",
    exploreServices: "Explore Services",
    ourServices: "Our Services",
    moreInfo: "More Information",
    experienceTitle: "How was your experience?",
    thankYou: "Thank you for sharing your experience!",
    submitButton: "Submit",
    placeholderText: "Tell us more about your experience...",
    footer: {
      rights: "All rights reserved.",
      references: "References",
      terms: "Terms of Service",
      privacy: "Privacy Policy"
    },
    serviceCards: [
      {
        title: "Transportation",
        description: "Fleet of high-end vehicles including SUVs, limousines, and luxury electric cars. Professional drivers with VIP protocol.",
      },
      {
        title: "Activities",
        description: "Unique experiences from private tours to archaeological sites to exclusive dinners in cenotes and water adventures.",
      },
      {
        title: "Events and Nightlife",
        description: "VIP access to the best clubs, exclusive parties, and special events. Organization of custom private events.",
      },
      {
        title: "LocalTip",
        description: "Personal concierge service that makes your most demanding wishes come true with exclusive local recommendations.",
      }
    ]
  },
  fr: {
    services: "Services",
    aboutUs: "À propos de nous",
    contact: "Contact",
    heroTitle: "Luxury Now Cancun",
    heroSubtitle: "Expériences de voyage d'élite sur mesure pour vous",
    exploreServices: "Explorer les services",
    ourServices: "Nos services",
    moreInfo: "Plus d'informations",
    experienceTitle: "Comment était votre expérience ?",
    thankYou: "Merci d'avoir partagé votre expérience !",
    submitButton: "Envoyer",
    placeholderText: "Parlez-nous plus de votre expérience...",
    footer: {
      rights: "Tous droits réservés.",
      references: "Références",
      terms: "Conditions d'utilisation",
      privacy: "Politique de confidentialité"
    },
    serviceCards: [
      {
        title: "Transport",
        description: "Flotte de véhicules haut de gamme comprenant SUV, limousines et voitures électriques de luxe. Chauffeurs professionnels avec protocole VIP.",
      },
      {
        title: "Activités",
        description: "Expériences uniques allant des visites privées de sites archéologiques aux dîners exclusifs dans les cénotes et aventures aquatiques.",
      },
      {
        title: "Événements et vie nocturne",
        description: "Accès VIP aux meilleurs clubs, fêtes exclusives et événements spéciaux. Organisation d'événements privés sur mesure.",
      },
      {
        title: "ConseilLocal",
        description: "Service de conciergerie personnel qui réalise vos souhaits les plus exigeants avec des recommandations locales exclusives.",
      }
    ]
  },
  es: {
    services: "Servicios",
    aboutUs: "Sobre Nosotros",
    contact: "Contacto",
    heroTitle: "Luxury Now Cancun",
    heroSubtitle: "Experiencias de Viaje de Élite Personalizadas para Ti",
    exploreServices: "Explorar Servicios",
    ourServices: "Nuestros Servicios",
    moreInfo: "Más información",
    experienceTitle: "¿Cómo fue tu experiencia?",
    thankYou: "¡Gracias por compartir tu experiencia!",
    submitButton: "Enviar",
    placeholderText: "Cuéntanos más sobre tu experiencia...",
    footer: {
      rights: "Todos los derechos reservados.",
      references: "Referencias",
      terms: "Términos de Servicio",
      privacy: "Política de Privacidad"
    },
    serviceCards: [
      {
        title: "Transportaciones",
        description: "Flota de vehículos de alta gama incluyendo SUVs, limusinas y coches eléctricos de lujo. Choferes profesionales con protocolo VIP.",
      },
      {
        title: "Actividades",
        description: "Experiencias únicas desde tours privados a sitios arqueológicos hasta cenas exclusivas en cenotes y aventuras acuáticas.",
      },
      {
        title: "Eventos y Nightlife",
        description: "Acceso VIP a los mejores clubes, fiestas exclusivas y eventos especiales. Organización de eventos privados a medida.",
      },
      {
        title: "LocalTip",
        description: "Servicio de concierge personal que hace realidad tus deseos más exigentes con recomendaciones locales exclusivas.",
      }
    ]
  }
}

const imagePaths = {
  en: {
    Transportation: "/Transportaciones.png",
    Activities: "/Actividades.png",
    "Events and Nightlife": "/Night.png",
    LocalTip: "/LocalTip.png"
  },
  fr: {
    Transport: "/Transportaciones.png",
    Activités: "/Actividades.png",
    "Événements et vie nocturne": "/Night.png",
    ConseilLocal: "/LocalTip.png"
  },
  es: {
    Transportaciones: "/Transportaciones.png",
    Actividades: "/Actividades.png",
    "Eventos y Nightlife": "/Night.png",
    LocalTip: "/LocalTip.png"
  }
}

// Language switcher component
function LanguageSwitcher() {
  const { language, setLanguage } = useContext(LanguageContext)
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  const changeLanguage = (lang: string) => {
    setLanguage(lang)
    setIsOpen(false)
  }

  return (
    <div className="relative inline-block text-left z-50">
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex justify-center items-center w-full rounded-md border border-[#f2d8a8] px-4 py-2 bg-[#203840] text-sm font-medium text-[#fff8ea] hover:bg-[#406d70] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#203840] focus:ring-[#f2d8a8] transition-colors duration-200"
        id="language-menu"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Globe className="mr-2 h-5 w-5" aria-hidden="true" />
        {language.toUpperCase()}
        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#fff8ea] ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="language-menu">
            {['en', 'fr', 'es'].map((lang) => (
              <button
                key={lang}
                onClick={() => changeLanguage(lang)}
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

export default function Home() {
  const [language, setLanguage] = useState('en')
  const t = translations[language]
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const services = t.serviceCards

  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [description, setDescription] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
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

    return () => observer.disconnect()
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
    <LanguageContext.Provider value={{ language, setLanguage }}>
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
      `}</style>
      <div className="flex flex-col min-h-screen bg-[#fff8ea] text-[#203840]">
        <header className="px-4 lg:px-6 h-20 flex items-center justify-between border-b border-[#f2d8a8]">
          <Link href="/" className="flex items-center space-x-2 ml-4">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={100}
              height={70}
              className="rounded-full"
            />
          </Link>
          <div className="flex-1 flex justify-center">
            <nav className="hidden md:flex gap-7">
              {[
                { href: "/Servicios", label: t.services},
                {href: "/SobreNosotros", label: t.aboutUs},
                {href: "/Contacto", label: t.contact}
              ].map((item) => (
                <Link
                  key={item.href}
                  
                  href={item.href}
                  className="text-lg font-medium relative group"
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#406d70] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </Link>
              ))}
            </nav>
          </div>
          <div className="mr-4">
            <LanguageSwitcher />
          </div>
          <button
            className="md:hidden ml-4 p-2 rounded-md bg-[#203840] text-[#fff8ea] hover:bg-[#406d70] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#203840] focus:ring-[#f2d8a8] transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </header>
        
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#203840] text-[#fff8ea] py-4">
            <nav className="flex flex-col items-center">
              {[
                {href: "/Servicios", label: t.services},
                {href: "/SobreNosotros", label: t.aboutUs},
                {href: "/Contacto", label: t.contact}
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
        
        <main className="flex-1">
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
                    className={`service-card relative overflow-hidden rounded-lg h-[calc(100vh-12rem)] ${index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <Image
                      src={imagePaths[language][service.title]}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
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

          <section className="w-full py-12 md:py-24 lg:py-32 bg-[#fff8ea]">
            <div className="container px-4 md:px-6 mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-[#203840] animate-on-scroll">
                {t.experienceTitle}
              </h2>
              <div className="max-w-md mx-auto animate-on-scroll" style={{ animationDelay: '200ms' }}>
                {submitted ? (
                  <div className="flex flex-col items-center">
                    <p className="text-xl mb-4 text-[#203840]">{t.thankYou}</p>
                    <div className="flex mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-8 h-8 ${
                            star <= rating ? 'text-[#806343] fill-[#806343]' : 'text-[#203840]'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-[#203840]">{description}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="flex justify-center mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-8 h-8 cursor-pointer ${
                            star <= (hover || rating) ? 'text-[#806343] fill-[#806343]' : 'text-[#203840]'
                          }`}
                          onMouseEnter={() => setHover(star)}
                          onMouseLeave={() => setHover(0)}
                          onClick={() => handleRatingChange(star)}
                          role="button"
                          tabIndex={0}
                          aria-label={`Rate ${star} stars`}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              handleRatingChange(star)
                            }
                          }}
                        />
                      ))}
                    </div>
                    <textarea
                      value={description}
                      onChange={handleDescriptionChange}
                      className="w-full p-2 border border-[#203840] rounded-md mb-4"
                      rows={4}
                      placeholder={t.placeholderText}
                    ></textarea>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-[#806343] text-[#fff8ea] hover:bg-[#406d70] h-10 py-2 px-4 w-full"
                    >
                      {t.submitButton}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </section>
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
    </LanguageContext.Provider>
  )
}