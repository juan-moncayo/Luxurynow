import Image from 'next/image'
import Link from 'next/link'

export default function TermsAndPolicies() {
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
          <Link href="/TouristFavour" className="text-sm font-medium hover:text-[#406d70]">
            Tourist Favour
          </Link>
          <Link href="/Contacto" className="text-sm font-medium hover:text-[#406d70]">
            Contacto
          </Link>
        </nav>
      </header>

      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-center text-[#806343] mb-8">
            Términos y Políticas
          </h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#406d70] mb-4">Términos de Servicio</h2>
            <div className="space-y-4">
              <p>
                Bienvenido a Luxury Now Cancun. Al utilizar nuestros servicios, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones:
              </p>
              <h3 className="text-xl font-semibold text-[#806343]">1. Uso del Servicio</h3>
              <p>
                Nuestros servicios están diseñados para proporcionar experiencias de lujo personalizadas. Usted se compromete a utilizar nuestros servicios solo para fines legales y de acuerdo con estos términos.
              </p>
              <h3 className="text-xl font-semibold text-[#806343]">2. Reservaciones y Pagos</h3>
              <p>
                Todas las reservaciones están sujetas a disponibilidad. Los pagos deben realizarse según los términos especificados en el momento de la reserva. Aceptamos varias formas de pago, incluyendo criptomonedas seleccionadas.
              </p>
              <h3 className="text-xl font-semibold text-[#806343]">3. Cancelaciones y Reembolsos</h3>
              <p>
                Nuestra política de cancelación varía según el servicio. Por favor, consulte los términos específicos de cada reserva. Los reembolsos se procesarán de acuerdo con nuestra política de cancelación.
              </p>
              <h3 className="text-xl font-semibold text-[#806343]">4. Responsabilidad</h3>
              <p>
                Luxury Now Cancun no se hace responsable de circunstancias fuera de nuestro control, como condiciones climáticas adversas o cambios en los servicios de terceros.
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-[#406d70] mb-4">Política de Privacidad</h2>
            <div className="space-y-4">
              <p>
                En Luxury Now Cancun, valoramos y respetamos su privacidad. Esta política describe cómo recopilamos, usamos y protegemos su información personal.
              </p>
              <h3 className="text-xl font-semibold text-[#806343]">1. Recopilación de Información</h3>
              <p>
                Recopilamos información que usted nos proporciona directamente, como su nombre, información de contacto y preferencias de viaje, para personalizar y mejorar su experiencia.
              </p>
              <h3 className="text-xl font-semibold text-[#806343]">2. Uso de la Información</h3>
              <p>
                Utilizamos su información para proporcionar y mejorar nuestros servicios, procesar reservas y pagos, y comunicarnos con usted sobre su experiencia.
              </p>
              <h3 className="text-xl font-semibold text-[#806343]">3. Protección de Datos</h3>
              <p>
                Implementamos medidas de seguridad para proteger su información personal contra acceso no autorizado y uso indebido.
              </p>
              <h3 className="text-xl font-semibold text-[#806343]">4. Compartir Información</h3>
              <p>
                No vendemos su información personal. Podemos compartir información con proveedores de servicios terceros solo cuando sea necesario para proporcionar nuestros servicios.
              </p>
              <h3 className="text-xl font-semibold text-[#806343]">5. Sus Derechos</h3>
              <p>
                Usted tiene derecho a acceder, corregir o eliminar su información personal. Para ejercer estos derechos, por favor contáctenos a través de los medios proporcionados en nuestra página de contacto.
              </p>
            </div>
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