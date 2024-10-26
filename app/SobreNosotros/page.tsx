import Image from 'next/image'
import Link from 'next/link'

export default function AboutUs() {
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

          <Link href="/Contacto" className="text-sm font-medium hover:text-[#406d70]">
            Contacto
          </Link>

        </nav>
      </header>

      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-center text-[#806343] mb-8">
              Sobre Luxury Now Cancun
            </h1>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-xl text-[#203840] mb-6">
                Luxury Now Cancun es líder en experiencias de viaje de lujo personalizadas en el Caribe mexicano. Nos especializamos en crear momentos inolvidables para viajeros exigentes que buscan lo mejor en cada aspecto de su viaje.
              </p>
              <p className="text-xl text-[#203840]">
                Desde 2015, hemos estado redefiniendo el significado del lujo en destinos como Cancún, Playa del Carmen, Cozumel y Tulum.
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 mb-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-[#406d70] rounded-full flex items-center justify-center mb-4">
                  <span className="text-4xl text-[#fff8ea]">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#806343]">Nuestra Misión</h3>
                <p>Proporcionar experiencias de viaje excepcionales y personalizadas que superen las expectativas de nuestros clientes más exigentes.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-[#406d70] rounded-full flex items-center justify-center mb-4">
                  <span className="text-4xl text-[#fff8ea]">👁️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#806343]">Nuestra Visión</h3>
                <p>Ser reconocidos globalmente como el referente en turismo de lujo personalizado en el Caribe mexicano.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-[#406d70] rounded-full flex items-center justify-center mb-4">
                  <span className="text-4xl text-[#fff8ea]">💎</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#806343]">Nuestros Valores</h3>
                <p>Excelencia, Personalización, Discreción, Innovación y Compromiso con la satisfacción del cliente.</p>
              </div>
            </div>

            <div className="bg-[#f2d8a8] p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold mb-4 text-[#806343]">Nuestro Equipo</h2>
              <p className="mb-4">
                Nuestro equipo está compuesto por expertos en turismo de lujo, cada uno con años de experiencia en la industria y un profundo conocimiento de los destinos que ofrecemos.
              </p>
              <p>
                Desde nuestros planificadores de viajes hasta nuestros concierges personales, cada miembro de Luxury Now Cancun está dedicado a hacer realidad los sueños de viaje de nuestros clientes.
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 text-[#806343]">Descubre la Diferencia de Luxury Now Cancun</h2>
              <p className="mb-6">
                Ya sea que esté buscando una escapada romántica, una aventura familiar o un retiro corporativo exclusivo, en Luxury Now Cancun tenemos la experiencia y los recursos para hacer que su viaje sea verdaderamente extraordinario.
              </p>
              <Link
                href="/Contacto"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-[#406d70] text-[#fff8ea] hover:bg-[#806343] h-10 py-2 px-4"
              >
                Contáctenos para Comenzar su Viaje de Lujo
              </Link>
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