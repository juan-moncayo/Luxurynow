import Image from 'next/image'
import Link from 'next/link'

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/1234567890" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-20 z-50 transition-transform duration-300 hover:scale-105 animate-slow-bounce"
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative w-16 h-16">
        <Image
          src="/whatsapp-logo.png"
          alt="WhatsApp"
          width={64}
          height={64}
          priority
        />
      </div>
    </Link>
  )
}

