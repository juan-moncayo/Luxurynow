'use client'

import React, { useState, useContext, createContext, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { CarIcon, MapIcon, MoonIcon, HelpCircleIcon, Menu, X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'
import Video from 'next/video'

// Define the LanguageContextType
type LanguageContextType = {
  language: 'en' | 'fr' | 'es';
  setLanguage: React.Dispatch<React.SetStateAction<'en' | 'fr' | 'es'>>;
};

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
});

const translations = {
  en: {
    services: "Services",
    aboutUs: "About Us",
    contact: "Contact",
    ourServices: "Our Services",
    formDescription: "Customize your experience with us",
    transportation: "Transportation",
    activities: "Activities",
    eventsAndNightlife: "Events and Nightlife",
    localTip: "LocalTip",
    dressCode: "Dress Code",
    informal: "Informal",
    terrestrial: "Terrestrial",
    aerial: "Aerial",
    additional: "Additional",
    cultural: "Cultural",
    adventure: "Adventure",
    aquatic: "Aquatic",
    parks: "Parks",
    nightlife: "Nightlife",
    localTipForm: "LocalTip Form",
    customizeExperience: "Customize your experience with our exclusive service",
    preferredActivities: "1. Preferred Activities:",
    cultureAndArchaeology: "Culture and archaeology",
    aquaticExperiences: "Aquatic experiences",
    localGastronomy: "Local gastronomy",
    outdoorAdventures: "Outdoor adventures",
    relaxationAndWellness: "Relaxation and wellness",
    timeAvailable: "2. Time Available for Activities:",
    halfDay: "Half day",
    fullDay: "Full day",
    transportPreferences: "3. Transport Preferences:",
    specialEvent: "4. Do you have any special event during your stay?",
    birthday: "Birthday",
    anniversary: "Anniversary",
    corporateCelebration: "Corporate celebration",
    additionalNotes: "5. Additional Notes or Special Requests:",
    notesPlaceholder: "Write your notes or special requests here",
    sendRequest: "Send Request",
    allRightsReserved: "All rights reserved",
    termsOfService: "Terms of Service",
    privacyPolicy: "Privacy Policy",
    home: "Home",
    luxuryTransportation: "Luxury transportation for your comfort.",
    helicopter: "Helicopter",
    privateJet: "Private Jet",
    requiresAdvanceNotice: "Requires 24-48 hours advance notice",
    improveExperience: "Improve your transportation experience with our additional services",
    champagneOrSpecificDrinks: "Champagne or specific drinks",
    snacks: "Snacks",
    privateSecurityExtra: "Private Security (Extra cost for additional vans)",
    discoverHistory: "Discover the rich history and culture of the region.",
    liveExcitement: "Experience the excitement and adrenaline in paradise.",
    allInclusiveOption: "All Inclusive option available.",
    extraServices: "Extra services such as DJ, Food, Open Bar, Specific Drinks, Snorkeling available upon request.",
    enjoyExperiences: "Enjoy incredible experiences in world-class theme parks.",
    experienceNightlife: "Experience the exciting nightlife of Cancun."
  },
  fr: {
    services: "Services",
    aboutUs: "À propos de nous",
    contact: "Contact",
    ourServices: "Nos Services",
    formDescription: "Personnalisez votre expérience avec nous",
    transportation: "Transport",
    activities: "Activités",
    eventsAndNightlife: "Événements et Vie Nocturne",
    localTip: "Conseil Local",
    dressCode: "Code Vestimentaire",
    informal: "Décontracté",
    terrestrial: "Terrestre",
    aerial: "Aérien",
    additional: "Supplémentaire",
    cultural: "Culturel",
    adventure: "Aventure",
    aquatic: "Aquatique",
    parks: "Parcs",
    nightlife: "Vie Nocturne",
    localTipForm: "Formulaire LocalTip",
    customizeExperience: "Personnalisez votre expérience avec notre service exclusif",
    preferredActivities: "1. Activités Préférées :",
    cultureAndArchaeology: "Culture et archéologie",
    aquaticExperiences: "Expériences aquatiques",
    localGastronomy: "Gastronomie locale",
    outdoorAdventures: "Aventures en plein air",
    relaxationAndWellness: "Relaxation et bien-être",
    nightlife: "Vie nocturne",
    timeAvailable: "2. Temps Disponible pour les Activités :",
    halfDay: "Demi-journée",
    fullDay: "Journée complète",
    transportPreferences: "3. Préférences de Transport :",
    specialEvent: "4. Avez-vous un événement spécial pendant votre séjour ?",
    birthday: "Anniversaire",
    anniversary: "Anniversaire de mariage",
    corporateCelebration: "Célébration d'entreprise",
    additionalNotes: "5. Notes Supplémentaires ou Demandes Spéciales :",
    notesPlaceholder: "Écrivez vos notes ou demandes spéciales ici",
    sendRequest: "Envoyer la Demande",
    allRightsReserved: "Tous droits réservés",
    termsOfService: "Conditions d'utilisation",
    privacyPolicy: "Politique de confidentialité",
    home: "Accueil",
    luxuryTransportation: "Transport de luxe pour votre confort.",
    helicopter: "Hélicoptère",
    privateJet: "Jet Privé",
    requiresAdvanceNotice: "Nécessite un préavis de 24 à 48 heures",
    improveExperience: "Améliorez votre expérience de transport avec nos services supplémentaires",
    champagneOrSpecificDrinks: "Champagne ou boissons spécifiques",
    snacks: "Collations",
    privateSecurityExtra: "Sécurité privée (Coût supplémentaire pour les camionnettes supplémentaires)",
    discoverHistory: "Découvrez la riche histoire et la culture de la région.",
    liveExcitement: "Vivez l'excitation et l'adrénaline au paradis.",
    allInclusiveOption: "Option tout compris disponible.",
    extraServices: "Services supplémentaires tels que DJ, nourriture, bar ouvert, boissons spécifiques, plongée avec tuba disponibles sur demande.",
    enjoyExperiences: "Profitez d'expériences incroyables dans des parcs à thème de classe mondiale.",
    experienceNightlife: "Découvrez la vie nocturne animée de Cancun."
  },
  es: {
    services: "Servicios",
    aboutUs: "Sobre Nosotros",
    contact: "Contacto",
    ourServices: "Nuestros Servicios",
    formDescription: "Personaliza tu experiencia con nosotros",
    transportation: "Transportaciones",
    activities: "Actividades",
    eventsAndNightlife: "Eventos y Vida Nocturna",
    localTip: "Consejo Local",
    dressCode: "Código de Vestimenta",
    informal: "Informal",
    terrestrial: "Terrestres",
    aerial: "Aéreos",
    additional: "Adicionales",
    cultural: "Culturales",
    adventure: "Aventura",
    aquatic: "Acuáticas",
    parks: "Parques",
    nightlife: "Entretenimiento Nocturno",
    localTipForm: "Formulario LocalTip",
    customizeExperience: "Personaliza tu experiencia con nuestro servicio exclusivo",
    preferredActivities: "1. Tipo de Actividades Preferidas:",
    cultureAndArchaeology: "Cultura y arqueología",
    aquaticExperiences: "Experiencias acuáticas",
    localGastronomy: "Gastronomía local",
    outdoorAdventures: "Aventuras al aire libre",
    relaxationAndWellness: "Relajación y bienestar",
    nightlife: "Vida nocturna",
    timeAvailable: "2. Tiempo Disponible para Actividades:",
    halfDay: "Medio día",
    fullDay: "Día completo",
    transportPreferences: "3. Preferencias de Transporte:",
    specialEvent: "4. ¿Tienes algún evento especial durante tu estancia?",
    birthday: "Cumpleaños",
    anniversary: "Aniversario",
    corporateCelebration: "Celebración corporativa",
    additionalNotes: "5. Notas Adicionales o Solicitudes Especiales:",
    notesPlaceholder: "Escribe aquí tus notas o solicitudes especiales",
    sendRequest: "Enviar Solicitud",
    allRightsReserved: "Todos los derechos reservados",
    termsOfService: "Términos de Servicio",
    privacyPolicy: "Política de Privacidad",
    home: "Inicio",
    luxuryTransportation: "Transporte de lujo para su comodidad.",
    helicopter: "Helicóptero",
    privateJet: "Jet Privado",
    requiresAdvanceNotice: "Requiere 24-48 horas de anticipación",
    improveExperience: "Mejore su experiencia de transporte con nuestros servicios adicionales",
    champagneOrSpecificDrinks: "Champagne o Bebidas específicas",
    snacks: "Snacks",
    privateSecurityExtra: "Seguridad Privada (Costo extra por camionetas adicionales)",
    discoverHistory: "Descubre la rica historia y cultura de la región.",
    liveExcitement: "Vive la emoción y la adrenalina en el paraíso.",
    allInclusiveOption: "Opción All Inclusive disponible.",
    extraServices: "Servicios extra como DJ, Comida, Barra Libre, Bebidas Específicas, Snorkeling disponibles bajo petición.",
    enjoyExperiences: "Disfruta de increíbles experiencias en parques temáticos de clase mundial.",
    experienceNightlife: "Vive la emocionante vida nocturna de Cancún."
  }
}

function LanguageSwitcher() {
  const { language, setLanguage } = useContext(LanguageContext)
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
        className="inline-flex justify-center items-center w-full rounded-md border border-gray-300 px-4 py-2 bg-[#203840] text-sm font-medium text-white hover:bg-[#2d4f5a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-[#203840] transition-colors duration-200"
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
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#fff8ea] ring-1 ring-black ring-opacity-5">
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
        </div>
      )}
    </div>
  )
}

function ImageCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="relative w-full h-64">
      <Image
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        layout="fill"
        objectFit="cover"
        className="rounded-md"
      />
      <button
        
        onClick={prevImage}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#203840] text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#203840] text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}

export default function Servicios() {
  const [language, setLanguage] = useState<'en' | 'fr' | 'es'>('en')
  const t = translations[language]
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [formData, setFormData] = useState({
    activities: [] as string[],
    timeAvailable: '',
    transport: '',
    specialEvent: '',
    additionalNotes: ''
  })

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCheckboxChange = (activity: string) => {
    setFormData(prev => ({
      ...prev,
      activities: prev.activities.includes(activity)
        ? prev.activities.filter(a => a !== activity)
        : [...prev.activities, activity]
    }))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
  }

  const vehicleImages = {
    'SUV': ['/SUV.png', '/SUV_2.png', '/SUV_3.png', '/SUV_4.png'],
    'Limo8px': ['/Limo8px.png', '/Limo8px_2.png', '/Limo8px_3.png', '/Limo8px_4.png'],
    'Limo10px': ['/Limo10px.png', '/Limo10px_2.png', '/Limo10px_3.png', '/Limo10px_4.png'],
    'Van 8px': ['/Van 8px.png', '/Van 8px_2.png', '/Van 8px_3.png', '/Van 8px_4.png'],
    'Van10px': ['/Van10px.png', '/Van10px_2.png', '/Van10px_3.png', '/Van10px_4.png'],
    'Van19px': ['/Van19px.png', '/Van19px_2.png', '/Van19px_3.png', '/Van19px_4.png']
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
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
              className="md:hidden ml-4 p-2 rounded-md bg-[#203840] text-[#fff8ea] hover:bg-[#406d70] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#203840] focus:ring-[#f2d8a8] transition-colors duration-200"
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
              src="/VideoServicios.webm"
              autoPlay
              loop
              muted
              playsInline
              className="absolute w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{t.ourServices}</h1>
              <p className="text-xl md:text-2xl">{t.formDescription}</p>
            </div>
          </section>

          <div className="container mx-auto px-4 py-12">
            <section className="mb-16">
              <h2 className="text-3xl font-semibold text-[#406d70] mb-6 flex items-center">
                <CarIcon className="mr-2" />
                {t.transportation}
              </h2>
              <Tabs defaultValue="terrestrial" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="terrestrial">{t.terrestrial}</TabsTrigger>
                  <TabsTrigger value="aerial">{t.aerial}</TabsTrigger>
                  <TabsTrigger value="additional">{t.additional}</TabsTrigger>
                </TabsList>
                <TabsContent value="terrestrial">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(vehicleImages).map(([vehicle, images]) => (
                      <Card key={vehicle} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                          <CardTitle>{vehicle.replace('px', ' px')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Image
                            src={images[0]}
                            alt={vehicle}
                            width={300}
                            height={200}
                            className="rounded-md mb-4"
                          />
                          <CardDescription>{t.luxuryTransportation}</CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="aerial">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                      <CardHeader>
                        <CardTitle>{t.helicopter}</CardTitle>
                        <CardDescription>(Cancún-Tulum-Cozumel-Playa Del Carmen)</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Image
                          src="/Helicóptero.png"
                          alt="Helicóptero"
                          width={300}
                          height={200}
                          className="rounded-md mb-4"
                        />
                        <p className="text-sm text-[#406d70]">{t.requiresAdvanceNotice}</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                      <CardHeader>
                        <CardTitle>{t.privateJet}</CardTitle>
                        <CardDescription>(Dependiendo del vuelo)</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Image
                          src="/Private Jetts.png"
                          alt="Jet Privado"
                          width={300}
                          height={200}
                          className="rounded-md mb-4"
                        />
                        <p className="text-sm text-[#406d70]">{t.requiresAdvanceNotice}</p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="additional">
                  <Card className="bg-white shadow-lg">
                    <CardHeader>
                      <CardTitle>{t.additional}</CardTitle>
                      <CardDescription>{t.improveExperience}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2">
                        <li>{t.champagneOrSpecificDrinks}</li>
                        <li>{t.snacks}</li>
                        <li>{t.privateSecurityExtra}</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold text-[#406d70] mb-6 flex items-center">
                <MapIcon className="mr-2" />
                {t.activities}
              </h2>
              <Tabs defaultValue="cultural" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  <TabsTrigger value="cultural">{t.cultural}</TabsTrigger>
                  <TabsTrigger value="adventure">{t.adventure}</TabsTrigger>
                  <TabsTrigger value="aquatic">{t.aquatic}</TabsTrigger>
                  <TabsTrigger value="parks">{t.parks}</TabsTrigger>
                </TabsList>
                <TabsContent value="cultural">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {['Tulum', 'Chichen', 'Coba', 'Ekbalam', 'SianKan', 'Coloradas', 'Bacalar', 'Akumal'].map((tour) => (
                      <Card key={tour} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                          <CardTitle>{tour}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ImageCarousel images={[`/${tour}.png`, `/${tour}2.png`, `/${tour}3.png`, `/${tour}4.png`]} />
                          <CardDescription>{t.discoverHistory}</CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="adventure">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {['Snorkeling', 'ATVs / Quads 4x4', 'Cenotes', 'Tirolesas', 'Jetski / Motos Acuáticas', 'Speedboat', 'Buceo', 'Rio Secreto', 'Parasailing', 'Paracaidismo', 'Camellos y Caballos', 'Delfines'].map((activity) => (
                      <Card key={activity} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                          <CardTitle>{activity}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ImageCarousel images={[`/${activity}.png`, `/${activity}_2.png`, `/${activity}_3.png`, `/${activity}_4.png`]} />
                          <CardDescription>{t.liveExcitement}</CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="aquatic">
                  <div className="grid md:grid-cols-2 gap-6">
                    {['Catamarán Compartido Isla Mujeres', 'Catamarán Compartido Puerto Morelos o Puerto Aventuras', 'Yate o Catamarán Privado Isla Mujeres', 'Yate o Catamarán Privado Puerto Morelos o Puerto Aventuras'].map((excursion) => (
                      <Card key={excursion} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                          <CardTitle>{excursion}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ImageCarousel images={[`/${excursion}.png`, `/${excursion}_2.png`, `/${excursion}_3.png`, `/${excursion}_4.png`]} />
                          <CardDescription>
                            {excursion.includes('Compartido') ? t.allInclusiveOption : t.extraServices}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="parks">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {['Xcaret', 'Xel-Ha', 'Xplor', 'Xenses', 'Xoximilco', 'Xav age'].map((park) => (
                      <Card key={park} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                          <CardTitle>{park}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ImageCarousel images={[`/${park}.png`, `/${park}_2.png`, `/${park}_3.png`, `/${park}_4.png`]} />
                          <CardDescription>{t.enjoyExperiences}</CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold text-[#406d70] mb-6 flex items-center">
                <MoonIcon className="mr-2" />
                {t.eventsAndNightlife}
              </h2>
              <Tabs defaultValue="nightlife" className="w-full">
                <TabsList className="grid w-full grid-cols-1 mb-8">
                  <TabsTrigger value="nightlife">{t.nightlife}</TabsTrigger>
                </TabsList>
                <TabsContent value="nightlife">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {['Coco', 'Cirque', 'Variedad'].map((venue) => (
                      <Card key={venue} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                          <CardTitle>{venue}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ImageCarousel images={[`/${venue}.png`, `/${venue}2.png`, `/${venue}3.png`, `/${venue}4.png`]} />
                          <CardDescription>{t.experienceNightlife}</CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold text-[#406d70] mb-6 flex items-center">
                <HelpCircleIcon className="mr-2" />
                {t.localTip}
              </h2>
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle>{t.localTipForm}</CardTitle>
                  <CardDescription>{t.customizeExperience}</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">{t.preferredActivities}</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { id: 'culture', label: t.cultureAndArchaeology },
                          { id: 'aquatic', label: t.aquaticExperiences },
                          { id: 'gastronomy', label: t.localGastronomy },
                          { id: 'outdoor', label: t.outdoorAdventures },
                          { id: 'relaxation', label: t.relaxationAndWellness },
                          { id: 'nightlife', label: t.nightlife }
                        ].map((activity) => (
                          <div className="flex items-center space-x-2" key={activity.id}>
                            <Checkbox
                              id={activity.id}
                              checked={formData.activities.includes(activity.id)}
                              onCheckedChange={() => handleCheckboxChange(activity.id)}
                            />
                            <Label htmlFor={activity.id}>{activity.label}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">{t.timeAvailable}</h3>
                      <RadioGroup
                        name="timeAvailable"
                        value={formData.timeAvailable}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, timeAvailable: value }))}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="half_day" id="half_day" />
                          <Label htmlFor="half_day">{t.halfDay}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="full_day" id="full_day" />
                          <Label htmlFor="full_day">{t.fullDay}</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">{t.transportPreferences}</h3>
                      <RadioGroup
                        name="transport"
                        value={formData.transport}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, transport: value }))}
                      >
                        {['SUV', 'Limusina', 'Van'].map((transport) => (
                          <div className="flex items-center space-x-2" key={transport}>
                            <RadioGroupItem value={transport.toLowerCase()} id={transport.toLowerCase()} />
                            <Label htmlFor={transport.toLowerCase()}>{transport}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">{t.specialEvent}</h3>
                      <RadioGroup
                        name="specialEvent"
                        value={formData.specialEvent}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, specialEvent: value }))}
                      >
                        {[
                          { id: 'birthday', label: t.birthday },
                          { id: 'anniversary', label: t.anniversary },
                          { id: 'corporate', label: t.corporateCelebration }
                        ].map((event) => (
                          <div className="flex items-center space-x-2" key={event.id}>
                            <RadioGroupItem value={event.id} id={event.id} />
                            <Label htmlFor={event.id}>{event.label}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">{t.additionalNotes}</h3>
                      <Textarea
                        placeholder={t.notesPlaceholder}
                        name="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={handleInputChange}
                      />
                    </div>

                    <Button type="submit" className="w-full">{t.sendRequest}</Button>
                  </form>
                </CardContent>
              </Card>
            </section>
          </div>
        </main>

        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#f2d8a8] bg-[#203840] text-[#fff8ea]">
          <p className="text-xs">© 2024 Luxury Now Cancun. {t.allRightsReserved}</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link href="/TerminosYPolitica" className="text-xs hover:text-[#f2d8a8]">
              {t.termsOfService}
            </Link>
            <Link href="/TerminosYPolitica" className="text-xs hover:text-[#f2d8a8]">
              {t.privacyPolicy}
            </Link>
          </nav>
        </footer>
      </div>
    </LanguageContext.Provider>
  )
}