import Image from 'next/image'
import Link from 'next/link'

export default function FavorTuristico() {
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
              Favor Turístico
            </h1>
            <p className="text-xl text-[#203840] mb-12 max-w-3xl mx-auto text-center">
              En Luxury Now Cancun, vamos más allá de los servicios turísticos convencionales. Nuestro programa de Favor Turístico está diseñado para hacer realidad tus deseos más exclusivos y crear experiencias verdaderamente inolvidables.
            </p>

            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-[#406d70] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-3xl text-[#fff8ea]">🌟</span>
                </div>
                <h2 className="text-xl font-semibold mb-4 text-[#806343] text-center">Experiencias Personalizadas</h2>
                <p className="text-center">Diseñamos experiencias únicas basadas en tus intereses y deseos específicos. Desde cenas privadas con chefs de renombre hasta tours exclusivos a lugares poco conocidos.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-[#406d70] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-3xl text-[#fff8ea]">🎁</span>
                </div>
                <h2 className="text-xl font-semibold mb-4 text-[#806343] text-center">Servicios de Concierge VIP</h2>
                <p className="text-center">Nuestro equipo de concierge está disponible 24/7 para atender cualquier solicitud, desde reservas en restaurantes exclusivos hasta la organización de eventos privados.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-[#406d70] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-3xl text-[#fff8ea]">🍾</span>
                </div>
                <h2 className="text-xl font-semibold mb-4 text-[#806343] text-center">Celebraciones Especiales</h2>
                <p className="text-center">Hacemos que tus momentos especiales sean inolvidables. Ya sea una propuesta de matrimonio, un aniversario o un cumpleaños, nos encargamos de cada detalle.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-[#406d70] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-3xl text-[#fff8ea]">🚁</span>
                </div>
                <h2 className="text-xl font-semibold mb-4 text-[#806343] text-center">Transporte de Lujo</h2>
                <p className="text-center">Desde jets privados hasta yates de lujo, te ofrecemos las mejores opciones de transporte para que tu viaje sea cómodo y exclusivo desde el principio hasta el final.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-[#406d70] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-3xl text-[#fff8ea]">🏆</span>
                </div>
                <h2 className="text-xl font-semibold mb-4 text-[#806343] text-center">Acceso VIP</h2>
                <p className="text-center">Te brindamos acceso exclusivo a eventos, clubes y lugares que normalmente están fuera del alcance del público general. Vive Cancún como un verdadero VIP.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-[#406d70] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-3xl text-[#fff8ea]">🌴</span>
                </div>
                <h2 className="text-xl font-semibold mb-4 text-[#806343] text-center">Aventuras Exclusivas</h2>
                <p className="text-center">Desde buceo con tiburones ballena hasta exploración de cenotes privados, ofrecemos aventuras únicas que no encontrarás en ningún otro lugar.</p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-6 text-[#806343]">¿Listo para vivir una experiencia extraordinaria?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Nuestro equipo de expertos está listo para hacer realidad tus sueños más ambiciosos. No hay solicitud demasiado grande o demasiado única para nosotros.
              </p>
              <Link
                href="/TouristFavour/FormuladrioTouristFavour"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-[#406d70] text-[#fff8ea] hover:bg-[#806343] h-10 py-2 px-4"
              >
                Solicita tu Favor Turístico
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