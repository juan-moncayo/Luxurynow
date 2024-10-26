'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { CarIcon, MapIcon, MoonIcon, HelpCircleIcon } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'

export default function Servicios() {
  const [formData, setFormData] = useState({
    activities: [],
    timeAvailable: '',
    transport: '',
    specialEvent: '',
    additionalNotes: ''
  })

  const [activeTab, setActiveTab] = useState({
    transportaciones: null,
    actividades: null,
    eventos: null
  })

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
    try {
      const response = await fetch('https://formspree.io/f/mwpkpyyp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      if (response.ok) {
        alert('Formulario enviado con éxito!')
        setFormData({
          activities: [],
          timeAvailable: '',
          transport: '',
          specialEvent: '',
          additionalNotes: ''
        })
      } else {
        throw new Error('Error al enviar el formulario')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.')
    }
  }

  const handleTabChange = (section: string, value: string) => {
    setActiveTab(prev => ({ ...prev, [section]: value }))
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#fff8ea] text-[#203840]">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-[#f2d8a8]">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-bold text-xl text-[#806343]">LNC</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href="/" className="text-sm font-medium hover:text-[#406d70]">
            Inicio
          </Link>
          <Link href="/Servicios" className="text-sm font-medium hover:text-[#406d70]">
            Servicios 
          </Link>
          <Link href="/SobreNosotros" className="text-sm font-medium hover:text-[#406d70]">
            Sobre Nosotros
          </Link>

          <Link href="/Contacto" className="text-sm font-medium hover:text-[#406d70]">
            Contacto
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center text-[#806343] mb-12">Nuestros Servicios</h1>
          
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-[#406d70] mb-6 flex items-center">
              <CarIcon className="mr-2" />
              Transportaciones
            </h2>
            <Tabs value={activeTab.transportaciones || ''} onValueChange={(value) => handleTabChange('transportaciones', value)} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="terrestres">Terrestres</TabsTrigger>
                <TabsTrigger value="aereos">Aéreos</TabsTrigger>
                <TabsTrigger value="adicionales">Adicionales</TabsTrigger>
              </TabsList>
              <TabsContent value="terrestres">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {['SUV', 'Limusina', 'Van 10 px', 'Van 16 px', 'Van 21 px'].map((vehicle) => (
                    <Card key={vehicle} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                      <CardHeader>
                        <CardTitle>{vehicle}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Image
                          src={`/placeholder.svg?height=200&width=300`}
                          alt={vehicle}
                          width={300}
                          height={200}
                          className="rounded-md mb-4"
                        />
                        <CardDescription>Transporte terrestre de lujo para su comodidad.</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="aereos">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <CardTitle>Helicóptero</CardTitle>
                      <CardDescription>(Cancún-Tulum-Cozumel-Playa Del Carmen)</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src={`/placeholder.svg?height=200&width=300`}
                        alt="Helicóptero"
                        width={300}
                        height={200}
                        className="rounded-md mb-4"
                      />
                      <p className="text-sm text-[#406d70]">Requiere 24-48 horas de anticipación</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <CardTitle>Jet Privado</CardTitle>
                      <CardDescription>(Dependiendo del vuelo)</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src={`/placeholder.svg?height=200&width=300`}
                        alt="Jet Privado"
                        width={300}
                        height={200}
                        className="rounded-md mb-4"
                      />
                      <p className="text-sm text-[#406d70]">Requiere 24-48 horas de anticipación</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="adicionales">
                <Card className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle>Servicios Adicionales</CardTitle>
                    <CardDescription>Mejore su experiencia de transporte con nuestros servicios adicionales</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Champagne o Bebidas específicas</li>
                      <li>Snacks</li>
                      <li>Seguridad Privada (Costo extra por camionetas adicionales)</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-[#406d70] mb-6 flex items-center">
              <MapIcon className="mr-2" />
              Actividades
            </h2>
            <Tabs value={activeTab.actividades || ''} onValueChange={(value) => handleTabChange('actividades', value)} className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="culturales">Culturales</TabsTrigger>
                <TabsTrigger value="aventura">Aventura</TabsTrigger>
                <TabsTrigger value="acuaticas">Acuáticas</TabsTrigger>
                <TabsTrigger value="parques">Parques</TabsTrigger>
              </TabsList>
              <TabsContent value="culturales">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {['Tulum', 'Chichen Itzá', 'Coba', 'Ek Balam', 'Sian Ka\'an', 'Las Coloradas', 'Bacalar', 'Akumal Monkey Sanctuary'].map((tour) => (
                    <Card key={tour} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                      <CardHeader>
                        <CardTitle>{tour}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Image
                          src={`/placeholder.svg?height=200&width=300`}
                          alt={tour}
                          width={300}
                          height={200}
                          className="rounded-md mb-4"
                        />
                        <CardDescription>Descubre la rica historia y cultura de la región.</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="aventura">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {['Snorkeling', 'ATVs / Quads 4x4', 'Cenotes', 'Tirolesas', 'Jetski / Motos Acuáticas', 'Speedboat', 'Buceo', 'Rio Secreto', 'Parasailing', 'Paracaidismo', 'Camellos y Caballos', 'Delfines'].map((activity) => (
                    <Card key={activity} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                      <CardHeader>
                        <CardTitle>{activity}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Image
                          src={`/placeholder.svg?height=200&width=300`}
                          alt={activity}
                          width={300}
                          height={200}
                          className="rounded-md mb-4"
                        />
                        <CardDescription>Vive la emoción y la adrenalina en el paraíso.</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="acuaticas">
                <div className="grid md:grid-cols-2 gap-6">
                  {['Catamarán Compartido Isla Mujeres', 'Catamarán Compartido Puerto Morelos o Puerto Aventuras', 'Yate o Catamarán Privado Isla Mujeres', 'Yate o Catamarán Privado Puerto Morelos o Puerto Aventuras'].map((excursion) => (
                    <Card key={excursion} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                      <CardHeader>
                        <CardTitle>{excursion}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Image
                          src={`/placeholder.svg?height=200&width=300`}
                          alt={excursion}
                          width={300}
                          height={200}
                          className="rounded-md mb-4"
                        />
                        <CardDescription>
                          {excursion.includes('Compartido') ? 'Opción All Inclusive disponible.' : 'Servicios extra como DJ, Comida, Barra Libre, Bebidas Específicas, Snorkeling disponibles bajo petición.'}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="parques">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {['Xcaret', 'Xel-Ha', 'Xplor', 'Xenses', 'Xoximilco', 'Xavage'].map((park) => (
                    <Card key={park} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                      <CardHeader>
                        <CardTitle>{park}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Image
                          src={`/placeholder.svg?height=200&width=300`}
                          alt={park}
                          width={300}
                          height={200}
                          className="rounded-md mb-4"
                        />
                        <CardDescription>Disfruta de increíbles experiencias en parques temáticos de clase mundial.</CardDescription>
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
              Eventos y Nightlife
            </h2>
            <Tabs value={activeTab.eventos || ''} onValueChange={(value) => handleTabChange('eventos', value)} className="w-full">
              <TabsList className="grid w-full grid-cols-1 mb-8">
                <TabsTrigger value="nightlife">Entretenimiento Nocturno</TabsTrigger>
              </TabsList>
              <TabsContent value="nightlife">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {['Cocobongo', 'Cirque du Soleil Joya at Vidanta', 'Variedad de Bares y Restaurantes'].map((venue) => (
                    <Card key={venue} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                      <CardHeader>
                        <CardTitle>{venue}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Image
                          src={`/placeholder.svg?height=200&width=300`}
                          alt={venue}
                          width={300}
                          height={200}
                          className="rounded-md mb-4"
                        />
                        <CardDescription>Vive la emocionante vida nocturna de Cancún.</CardDescription>
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
              LocalTip
            </h2>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle>Formulario LocalTip</CardTitle>
                <CardDescription>Personaliza tu experiencia con nuestro servicio exclusivo</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">1. Tipo de Actividades Preferidas:</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {['Cultura y arqueología', 'Aventuras al aire libre', 'Experiencias acuáticas', 'Relajación y bienestar', 'Gastronomía local', 'Vida nocturna'].map((activity) => (
                        <div className="flex items-center space-x-2" key={activity}>
                          <Checkbox id={activity} onCheckedChange={() => handleCheckboxChange(activity)} />
                          <Label htmlFor={activity}>{activity}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">2. Tiempo Disponible para Actividades:</h3>
                    <RadioGroup onValueChange={(value) => handleInputChange({ target: { name: 'timeAvailable', value } } as React.ChangeEvent<HTMLInputElement>)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="medio_dia" id="medio_dia" />
                        <Label htmlFor="medio_dia">Medio día</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="dia_completo" id="dia_completo" />
                        <Label htmlFor="dia_completo">Día completo</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">3. Preferencias de Transporte:</h3>
                    <RadioGroup onValueChange={(value) => handleInputChange({ target: { name: 'transport', value } } as React.ChangeEvent<HTMLInputElement>)}>
                      {['SUV', 'Limusina', 'Van'].map((transport) => (
                        <div className="flex items-center space-x-2" key={transport}>
                          <RadioGroupItem value={transport.toLowerCase()} id={transport.toLowerCase()} />
                          <Label htmlFor={transport.toLowerCase()}>{transport}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">4. ¿Tienes algún evento especial durante tu estancia?</h3>
                    <RadioGroup onValueChange={(value) => handleInputChange({ target: { name: 'specialEvent', value } } as React.ChangeEvent<HTMLInputElement>)}>
                      {['Cumpleaños', 'Aniversario', 'Celebración corporativa'].map((event) => (
                        <div className="flex items-center space-x-2" key={event}>
                          <RadioGroupItem value={event.toLowerCase()} id={event.toLowerCase()} />
                          <Label htmlFor={event.toLowerCase()}>{event}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">5. Notas Adicionales o Solicitudes Especiales:</h3>
                    <Textarea 
                      placeholder="Escribe aquí tus notas o solicitudes especiales" 
                      name="additionalNotes"
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">Enviar Solicitud</Button>
                </form>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#f2d8a8] bg-[#203840] text-[#fff8ea]">
        <p className="text-xs">© 2024 Luxury Now Cancun. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/TerminosYPolitica" className="text-xs hover:text-[#f2d8a8]">
            Términos de Servicio
          </Link>
          <Link href="/TerminosYPolitica" className="text-xs hover:text-[#f2d8a8]">
            Política de Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  )
}