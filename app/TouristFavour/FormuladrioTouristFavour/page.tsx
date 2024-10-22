'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function TouristFavorForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    favorType: '',
    description: '',
    date: '',
    budget: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch('https://formspree.io/f/xanynovz', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (response.ok) {
        alert('Gracias por su solicitud. Nos pondremos en contacto pronto.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          favorType: '',
          description: '',
          date: '',
          budget: '',
        })
      } else {
        throw new Error('Error al enviar el formulario')
      }
    } catch (error) {
      alert('Hubo un error al enviar su solicitud. Por favor, inténtelo de nuevo.')
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#fff8ea] text-[#203840]">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-[#f2d8a8]">
        <div className="flex items-center space-x-2">
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
        </div>
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
          <Link href="/TouristFavour" className="text-sm font-medium hover:text-[#406d70]">
            Tourist Favour
          </Link>
          <Link href="/Contacto" className="text-sm font-medium hover:text-[#406d70]">
            Contacto
          </Link>
          
        </nav>
      </header>

      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-center text-[#806343] mb-8">
              Solicitud de Favor Turístico
            </h1>
            <p className="text-xl text-[#203840] mb-12 max-w-3xl mx-auto text-center">
              Cuéntanos sobre la experiencia única que deseas vivir en Cancún. Nuestro equipo de expertos se encargará de hacer realidad tus sueños más ambiciosos.
            </p>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-[#203840] mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-[#f2d8a8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#406d70]"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-[#203840] mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-[#f2d8a8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#406d70]"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-[#203840] mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-[#f2d8a8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#406d70]"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="favorType" className="block text-sm font-medium text-[#203840] mb-2">
                  Tipo de Favor Turístico
                </label>
                <select
                  id="favorType"
                  name="favorType"
                  value={formData.favorType}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-[#f2d8a8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#406d70]"
                >
                  <option value="">Seleccione una opción</option>
                  <option value="Experiencia Personalizada">Experiencia Personalizada</option>
                  <option value="Servicio de Concierge VIP">Servicio de Concierge VIP</option>
                  <option value="Transporte de Lujo">Transporte de Lujo</option>
                  <option value="Celebración Especial">Celebración Especial</option>
                  <option value="Acceso VIP">Acceso VIP</option>
                  <option value="Aventura Exclusiva">Aventura Exclusiva</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="description" className="block text-sm font-medium text-[#203840] mb-2">
                  Descripción de su Favor Turístico
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-[#f2d8a8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#406d70]"
                ></textarea>
              </div>

              <div className="mb-6">
                <label htmlFor="date" className="block text-sm font-medium text-[#203840] mb-2">
                  Fecha Deseada
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-[#f2d8a8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#406d70]"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="budget" className="block text-sm font-medium text-[#203840] mb-2">
                  Presupuesto Estimado (USD)
                </label>
                <input
                  type="number"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="Ej: 5000"
                  className="w-full px-3 py-2 border border-[#f2d8a8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#406d70]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#406d70] text-white py-2 px-4 rounded-md hover:bg-[#806343] transition-colors duration-300"
              >
                Enviar Solicitud
              </button>
            </form>
          </div>
        </section>
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