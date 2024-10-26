import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const services = [
    {
      title: "Transportaciones",
      description: "Flota de vehículos de alta gama incluyendo SUVs, limusinas y coches eléctricos de lujo. Choferes profesionales con protocolo VIP.",
      image: "/Transportaciones.png",
      link: "/servicios/transportaciones"
    },
    {
      title: "Actividades",
      description: "Experiencias únicas desde tours privados a sitios arqueológicos hasta cenas exclusivas en cenotes y aventuras acuáticas.",
      image: "/Actividades.png",
      link: "/servicios/actividades"
    },
    {
      title: "Eventos y Nightlife",
      description: "Acceso VIP a los mejores clubes, fiestas exclusivas y eventos especiales. Organización de eventos privados a medida.",
      image: "/Night.png",
      link: "/servicios/eventos-nightlife"
    },
    {
      title: "LocalTip",
      description: "Servicio de concierge personal que hace realidad tus deseos más exigentes con recomendaciones locales exclusivas.",
      image: "/LocalTip.png",
      link: "/servicios/localtip"
    }
  ]

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

        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
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
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src="/placeholder-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#fff8ea]">
                  Luxury Now Cancun
                </h1>
                <p className="mx-auto max-w-[700px] text-[#f2d8a8] md:text-xl font-semibold">
                  Tailored Elite Travel Experiences Just for You
                </p>
              </div>
              <div className="space-x-4">
                <Link 
                  href="#servicios"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-[#806343] text-[#fff8ea] hover:bg-[#406d70] h-10 py-2 px-4"
                >
                  Explorar Servicios
                </Link>
                <Link
                  href="/Contacto"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 text-[#fff8ea] border-[#fff8ea] hover:bg-[#fff8ea] hover:text-[#203840]"
                >
                  Contactar
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 bg-[#203840]">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#f2d8a8]">
              Nuestros Servicios 
            </h2>
            <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg h-[calc(100vh-6rem)] md:h-[calc(50vh-3rem)] lg:h-[calc(70vh-4rem)]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="text-[#fff8ea] text-2xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-[#f2d8a8] text-sm mb-4">
                      {service.description}
                    </p>
                    <Link 
                      href="/Servicios"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-[#406d70] text-[#fff8ea] hover:bg-[#806343] h-10 py-2 px-4 w-full sm:w-auto"
                    >
                      Más información
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>


#agregar 



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