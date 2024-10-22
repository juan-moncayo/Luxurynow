import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
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
              Nuestros Servicios Exclusivos
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-[#fff8ea] border border-[#f2d8a8] rounded-lg p-6 flex flex-col items-center">
                <div className="mb-4 text-4xl text-[#406d70]">🚗</div>
                <h3 className="text-[#806343] text-2xl font-semibold mb-2 text-center">Transporte de Lujo</h3>
                <p className="text-lg text-center">
                  Flota de vehículos de alta gama incluyendo SUVs, limusinas y coches eléctricos de lujo. Choferes profesionales con protocolo VIP.
                </p>
                <ul className="mt-4 text-sm">
                  <li>Wi-Fi a bordo</li>
                  <li>Bebidas premium</li>
                  <li>Servicio de concierge durante el trayecto</li>
                </ul>
              </div>
              <div className="bg-[#fff8ea] border border-[#f2d8a8] rounded-lg p-6 flex flex-col items-center">
                <div className="mb-4 text-4xl text-[#406d70]">🏎️</div>
                <h3 className="text-[#806343] text-2xl font-semibold mb-2 text-center">Renta de Autos de Lujo</h3>
                <p className="text-lg text-center">
                  Conduce vehículos icónicos como Ferrari, Lamborghini, Porsche y más. Disponibles por día o períodos extendidos.
                </p>
                <ul className="mt-4 text-sm">
                  <li>Ruta escénica guiada</li>
                  <li>Acceso VIP a eventos automovilísticos</li>
                </ul>
              </div>
              <div className="bg-[#fff8ea] border border-[#f2d8a8] rounded-lg p-6 flex flex-col items-center">
                <div className="mb-4 text-4xl text-[#406d70]">🚁</div>
                <h3 className="text-[#806343] text-2xl font-semibold mb-2 text-center">Actividades Personalizadas de Lujo</h3>
                <p className="text-lg text-center">
                  Experiencias únicas desde tours privados a sitios arqueológicos hasta cenas exclusivas en cenotes.
                </p>
                <ul className="mt-4 text-sm">
                  <li>Vuelos en helicóptero</li>
                  <li>Tours en yates</li>
                  <li>Cenas privadas en ubicaciones exclusivas</li>
                </ul>
              </div>
              <div className="bg-[#fff8ea] border border-[#f2d8a8] rounded-lg p-6 flex flex-col items-center">
                <div className="mb-4 text-4xl text-[#406d70]">⛵</div>
                <h3 className="text-[#806343] text-2xl font-semibold mb-2 text-center">Experiencia de Yates de Lujo</h3>
                <p className="text-lg text-center">
                  Navega por el Caribe mexicano en yates de lujo con tripulación completa y servicios gourmet.
                </p>
                <ul className="mt-4 text-sm">
                  <li>Chef privado</li>
                  <li>DJ a bordo</li>
                  <li>Actividades acuáticas (snorkel, paddleboard)</li>
                </ul>
              </div>
              <div className="bg-[#fff8ea] border border-[#f2d8a8] rounded-lg p-6 flex flex-col items-center">
                <div className="mb-4 text-4xl text-[#406d70]">🎉</div>
                <h3 className="text-[#806343] text-2xl font-semibold mb-2 text-center">Eventos Privados</h3>
                <p className="text-lg text-center">
                  Organizamos eventos inolvidables en los lugares más exclusivos de Cancún y la Riviera Maya.
                </p>
                <ul className="mt-4 text-sm">
                  <li>Bodas en playas privadas</li>
                  <li>Fiestas en mansiones de lujo</li>
                  <li>Lanzamientos de productos</li>
                </ul>
              </div>
              <div className="bg-[#fff8ea] border border-[#f2d8a8] rounded-lg p-6 flex flex-col items-center">
                <div className="mb-4 text-4xl text-[#406d70]">💱</div>
                <h3 className="text-[#806343] text-2xl font-semibold mb-2 text-center">Pago con Criptomonedas</h3>
                <p className="text-lg text-center">
                  Aceptamos criptomonedas para una experiencia de pago flexible y privada.
                </p>
                <ul className="mt-4 text-sm">
                  <li>Bitcoin (BTC)</li>
                  <li>Ethereum (ETH)</li>
                  <li>USDT y otras stablecoins</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="tourist-favour" className="w-full py-12 md:py-24 lg:py-32 bg-[#fff8ea]">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#806343]">
                  Servicio "Tourist Favour"
                </h2>
                <p className="text-[#203840] md:text-xl">
                  Nuestro exclusivo servicio de concierge personal que hace realidad tus deseos más exigentes
                </p>
                <Link
                  href="/TouristFavour"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-[#406d70] text-[#fff8ea] hover:bg-[#806343] h-10 py-2 px-4"
                >
                  Solicitar Información
                </Link>
              </div>
              <div className="aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg"
                  alt="Luxury Concierge Service"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
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