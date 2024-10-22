import Image from 'next/image'
import Link from 'next/link'

export default function NuestrosServicios() {
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
              Nuestros Servicios
            </h1>
            <p className="text-xl text-[#203840] mb-12 max-w-3xl mx-auto text-center">
              En Luxury Now Cancun, ofrecemos una amplia gama de servicios de lujo cuidadosamente diseñados para satisfacer las expectativas de los viajeros más exigentes. Cada experiencia está pensada para brindarte comodidad, exclusividad y un toque de distinción durante tu estancia en Cancún y sus alrededores.
            </p>

            <div className="space-y-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-[#806343]">1. Transporte de Lujo</h2>
                <p className="mb-4">
                  Disfruta de un viaje con clase desde el momento en que aterrizas en Cancún. Nuestra flota de vehículos de alta gama incluye SUVs, limusinas, y coches eléctricos de lujo, todos conducidos por choferes profesionales y capacitados en protocolo VIP. Este servicio garantiza que tu traslado sea no solo cómodo, sino también elegante y sin contratiempos. Ya sea un traslado al aeropuerto o una excursión privada, te llevamos con estilo.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Flota: SUVs, limusinas, sedanes de lujo y coches eléctricos.</li>
                  <li>Servicios adicionales: Wi-Fi a bordo, bebidas premium, y servicio de concierge durante el trayecto.</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-[#806343]">2. Renta de Autos de Lujo</h2>
                <p className="mb-4">
                  Vive la emoción de conducir algunos de los autos más icónicos del mundo. Ofrecemos una selección exclusiva de vehículos de lujo y deportivos, como Ferrari, Lamborghini, Porsche, y más. Perfecto para quienes desean explorar la Riviera Maya al volante de una obra de ingeniería sofisticada, estos autos están disponibles por día o por períodos extendidos.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Marcas: Ferrari, Lamborghini, Porsche, Bentley, entre otros.</li>
                  <li>Experiencias complementarias: Ruta escénica guiada, acceso VIP a eventos automovilísticos.</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-[#806343]">3. Actividades Personalizadas de Lujo</h2>
                <p className="mb-4">
                  Te ofrecemos experiencias a medida que van más allá del turismo tradicional. Desde tours privados a los sitios arqueológicos de Tulum y Chichén Itzá, hasta paseos en helicóptero sobre Cancún y la Riviera Maya. ¿Quieres disfrutar de una cena privada en un cenote? ¿O un evento exclusivo en una playa privada? Todo es posible. Nuestros especialistas en turismo crearán un itinerario adaptado a tus gustos y necesidades.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Opciones de actividades: Vuelos en helicóptero, tours en yates, cenas privadas en ubicaciones exclusivas.</li>
                  <li>Destinos: Chichén Itzá, Tulum, Cozumel, cenotes privados, playas exclusivas.</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-[#806343]">4. Experiencia de Yates de Lujo</h2>
                <p className="mb-4">
                  Navega por las cristalinas aguas del Caribe mexicano a bordo de un yate de lujo. Ofrecemos alquileres privados con tripulación completa, comidas gourmet y actividades a bordo como pesca, snorkel, o simplemente disfrutar de la vista. Ideal para celebraciones especiales, despedidas de soltero(a), o un día de relajación absoluta.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Tamaños de yates: Desde pequeños yates de lujo hasta mega yates para grandes grupos.</li>
                  <li>Servicios adicionales: Chef privado, DJ a bordo, actividades acuáticas (snorkel, paddleboard).</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-[#806343]">5. Eventos Privados</h2>
                <p className="mb-4">
                Creamos eventos inolvidables en los lugares más exclusivos de Cancún y la Riviera Maya. Organizamos desde bodas íntimas en playas privadas hasta grandes celebraciones en impresionantes mansiones y hoteles de lujo. Nuestro equipo de planificación y diseño se encarga de cada detalle, asegurando que cada evento refleje tu estilo y preferencias.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Tipos de eventos: Bodas, aniversarios, fiestas privadas, lanzamientos de productos.</li>
                  <li>Locaciones: Villas privadas, playas exclusivas, hoteles de lujo.</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-[#806343]">6. Pago con Criptomonedas</h2>
                <p className="mb-4">
                  Entendemos la necesidad de flexibilidad y privacidad en los pagos, por eso en Luxury Now Cancun aceptamos criptomonedas como método de pago. Ya sea que elijas pagar en Bitcoin (BTC), Ethereum (ETH), o stablecoins como USDT, nuestro sistema de pagos está diseñado para ofrecerte una transacción segura, rápida y confidencial. De esta manera, puedes disfrutar de nuestros servicios exclusivos sin preocupaciones.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Criptomonedas aceptadas: Bitcoin (BTC), Ethereum (ETH), USDT, entre otras.</li>
                  <li>Ventajas: Seguridad, anonimato, transacciones internacionales sin fronteras.</li>
                </ul>
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