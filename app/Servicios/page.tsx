'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { CarIcon, MapIcon, MoonIcon, HelpCircleIcon, Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { translations, vehicleImages, type Language } from '@/lib/servicios-translations'
import { ImageCarousel } from '@/components/ImageCarousel'
import { AnimatedElement } from '@/components/AnimatedElement'
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

export default function Servicios() {
  const { language } = useLanguage()
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

  return (
    <div className="flex flex-col min-h-screen bg-[#fff8ea] text-[#203840]" style={{ scrollBehavior: 'smooth' }}>
      <header className={`fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-20 flex items-center justify-between transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fff8ea]/80 backdrop-blur-md shadow-md text-[#203840]'
          : 'bg-transparent text-[#203840]'}`}>
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
            className="absolute w-full h-full object-cover transform scale-105"
            style={{ animation: 'slowZoom 20s infinite alternate' }}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <AnimatedElement className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{t.ourServices}</h1>
            <p className="text-xl md:text-2xl">{t.formDescription}</p>
          </AnimatedElement>
        </section>

        <div className="container mx-auto px-4 py-12">
          <AnimatedElement>
            <section className="mb-16">
              <h2 className="text-3xl font-semibold text-[#406d70] mb-6 flex items-center">
                <CarIcon className="mr-2" />
                {t.transportation}
              </h2>
              <Tabs defaultValue="terrestrial" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="terrestrial" className="px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#406d70] hover:text-white">{t.terrestrial}</TabsTrigger>
                  <TabsTrigger value="aerial" className="px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#406d70] hover:text-white">{t.aerial}</TabsTrigger>
                  <TabsTrigger value="additional" className="px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#406d70] hover:text-white">{t.additional}</TabsTrigger>
                </TabsList>
                <TabsContent value="terrestrial">
                  <AnimatedElement className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(vehicleImages).map(([vehicle, images]) => (
                      <Card key={vehicle} className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <CardHeader>
                          <CardTitle className="group-hover:text-primary transition-colors duration-300">{vehicle.replace('px', ' px')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Image
                            src={images[0]}
                            alt={vehicle}
                            width={300}
                            height={200}
                            className="rounded-md mb-4"
                          />
                          <CardDescription className="mt-4">{t.luxuryTransportation}</CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </AnimatedElement>
                </TabsContent>
                <TabsContent value="aerial">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <CardHeader>
                        <CardTitle className="group-hover:text-primary transition-colors duration-300">{t.helicopter}</CardTitle>
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
                    <Card className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <CardHeader>
                        <CardTitle className="group-hover:text-primary transition-colors duration-300">{t.privateJet}</CardTitle>
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
                  <Card className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle className="group-hover:text-primary transition-colors duration-300">{t.additional}</CardTitle>
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
          </AnimatedElement>

          <AnimatedElement>
            <section className="mb-16">
              <h2 className="text-3xl font-semibold text-[#406d70] mb-6 flex items-center">
                <MapIcon className="mr-2" />
                {t.activities}
              </h2>
              <Tabs defaultValue="cultural" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  <TabsTrigger value="cultural" className="px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#406d70] hover:text-white">{t.cultural}</TabsTrigger>
                  <TabsTrigger value="adventure" className="px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#406d70] hover:text-white">{t.adventure}</TabsTrigger>
                  <TabsTrigger value="aquatic" className="px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#406d70] hover:text-white">{t.aquatic}</TabsTrigger>
                  <TabsTrigger value="parks" className="px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#406d70] hover:text-white">{t.parks}</TabsTrigger>
                </TabsList>
                <TabsContent value="cultural">
                  <AnimatedElement className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {['Tulum', 'Chichen', 'Coba', 'Ekbalam', 'SianKan', 'Coloradas', 'Bacalar', 'Akumal'].map((tour) => (
                      <Card key={tour} className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <CardHeader>
                          <CardTitle className="group-hover:text-primary transition-colors duration-300">{tour}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4">
                          <ImageCarousel
                            images={[`/${tour}.png`, `/${tour}2.png`, `/${tour}3.png`, `/${tour}4.png`]}
                            alt={tour}
                          />
                          <CardDescription className="mt-4">{t.discoverHistory}</CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </AnimatedElement>
                </TabsContent>
                <TabsContent value="adventure">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {['Snorkeling', 'ATVs / Quads 4x4', 'Cenotes', 'Tirolesas', 'Jetski / Motos Acuáticas', 'Speedboat', 'Buceo', 'Rio Secreto', 'Parasailing', 'Paracaidismo', 'Camellos y Caballos', 'Delfines'].map((activity) => (
                      <Card key={activity} className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <CardHeader>
                          <CardTitle className="group-hover:text-primary transition-colors duration-300">{activity}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4">
                          <ImageCarousel images={[`/${activity}.png`, `/${activity}_2.png`, `/${activity}_3.png`, `/${activity}_4.png`]} alt={activity} />
                          <CardDescription className="mt-2 text-sm">{t.liveExcitement}</CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="aquatic">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {['Catamarán Compartido Isla Mujeres', 'Catamarán Compartido Puerto Morelos o Puerto Aventuras', 'Yate o Catamarán Privado Isla Mujeres', 'Yate o Catamarán Privado Puerto Morelos o Puerto Aventuras'].map((excursion) => (
                      <Card key={excursion} className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <CardHeader>
                          <CardTitle className="group-hover:text-primary transition-colors duration-300">{excursion}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4">
                          <ImageCarousel images={[`/${excursion}.png`, `/${excursion}_2.png`, `/${excursion}_3.png`, `/${excursion}_4.png`]} alt={excursion} />
                          <CardDescription className="mt-2 text-sm">
                            {excursion.includes('Compartido') ? t.allInclusiveOption : t.extraServices}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="parks">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {['Xcaret', 'Xel-Ha', 'Xplor', 'Xenses', 'Xoximilco', 'Xav age'].map((park) => (
                      <Card key={park} className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <CardHeader>
                          <CardTitle className="group-hover:text-primary transition-colors duration-300">{park}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4">
                          <ImageCarousel images={[`/${park}.png`, `/${park}_2.png`, `/${park}_3.png`, `/${park}_4.png`]} alt={park} />
                          <CardDescription className="mt-2 text-sm">{t.enjoyExperiences}</CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </section>
          </AnimatedElement>

          <AnimatedElement>
            <section className="mb-16">
              <h2 className="text-3xl font-semibold text-[#406d70] mb-6 flex items-center">
                <MoonIcon className="mr-2" />
                {t.eventsAndNightlife}
              </h2>
              <Tabs defaultValue="nightlife" className="w-full">
                <TabsList className="grid w-full grid-cols-1 mb-8">
                  <TabsTrigger value="nightlife" className="px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#406d70] hover:text-white">{t.nightlifeActivities}</TabsTrigger>
                </TabsList>
                <TabsContent value="nightlife">
                  <AnimatedElement className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {['Coco', 'Cirque', 'Variedad'].map((venue) => (
                      <Card key={venue} className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <CardHeader>
                          <CardTitle className="group-hover:text-primary transition-colors duration-300">{venue}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4">
                          <ImageCarousel images={[`/${venue}.png`, `/${venue}2.png`, `/${venue}3.png`, `/${venue}4.png`]} alt={venue} />
                          <CardDescription className="mt-4">{t.experienceNightlife}</CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </AnimatedElement>
                </TabsContent>
              </Tabs>
            </section>
          </AnimatedElement>

          <AnimatedElement>
            <section className="mb-16">
              <h2 className="text-3xl font-semibold text-[#406d70] mb-6 flex items-center">
                <HelpCircleIcon className="mr-2" />
                {t.localTip}
              </h2>
              <Card className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">{t.localTipForm}</CardTitle>
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
                          { id: 'nightlife', label: t.nightlifeActivities }
                        ].map((activity) => (
                          <div className="flex items-center space-x-2" key={activity.id}>
                            <Checkbox
                              id={activity.id}
                              checked={formData.activities.includes(activity.id)}
                              onCheckedChange={() => handleCheckboxChange(activity.id)}
                              className="transition-all duration-300 focus:ring-2 focus:ring-[#406d70]"
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
                          <RadioGroupItem value="half_day" id="half_day" className="transition-all duration-300 focus:ring-2 focus:ring-[#406d70]" />
                          <Label htmlFor="half_day">{t.halfDay}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="full_day" id="full_day" className="transition-all duration-300 focus:ring-2 focus:ring-[#406d70]" />
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
                            <RadioGroupItem value={transport.toLowerCase()} id={transport.toLowerCase()} className="transition-all duration-300 focus:ring-2 focus:ring-[#406d70]" />
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
                            <RadioGroupItem value={event.id} id={event.id} className="transition-all duration-300 focus:ring-2 focus:ring-[#406d70]" />
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
                        className="transition-all duration-300 focus:ring-2 focus:ring-[#406d70]"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-[#406d70] hover:bg-[#203840] transition-colors duration-300">{t.sendRequest}</Button>
                  </form>
                </CardContent>
              </Card>
            </section>
          </AnimatedElement>
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
      <WhatsAppButton />
      <style jsx global>{`
        @keyframes slowZoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  )
}

