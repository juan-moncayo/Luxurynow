'use client'

import { useState, useRef, useEffect } from 'react'
import { Star, Plus, Edit, Trash } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { TestimonialModal } from './ui/testimonial-modal'
import { VerificationModal } from './ui/verification-modal'
import { useLanguage } from '@/contexts/language-context'
import { translations } from '@/lib/transtlationsTestimonials'

interface Testimonio {
  id: string
  email: string
  nombre: string
  ubicacion: string
  comentario: string
  calificacion: number
}

export default function TestimonialsSection() {
  const { language } = useLanguage()
  const t = translations[language].testimonials
  const testimonialRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const scrollPositionRef = useRef(0)
  const [testimonios, setTestimonios] = useState<Testimonio[]>([
    {
      id: '1',
      email: 'maria@example.com',
      nombre: "María González",
      ubicacion: "Ciudad de México",
      comentario: "Excelente servicio y atención personalizada. El agente fue muy profesional y me ayudó a encontrar el seguro perfecto para mis necesidades.",
      calificacion: 5,
    },
    {
      id: '2',
      email: 'carlos@example.com',
      nombre: "Carlos Rodríguez",
      ubicacion: "Guadalajara",
      comentario: "Muy satisfecho con el servicio. El proceso fue rápido y eficiente. Recomiendo ampliamente sus servicios.",
      calificacion: 5,
    },
    {
      id: '3',
      email: 'ana@example.com',
      nombre: "Ana Martínez",
      ubicacion: "Monterrey",
      comentario: "La mejor experiencia que he tenido con una aseguradora. El personal es muy amable y siempre están dispuestos a ayudar.",
      calificacion: 5,
    },
  ])

  // Modal states
  const [verificationModalOpen, setVerificationModalOpen] = useState(false)
  const [testimonialModalOpen, setTestimonialModalOpen] = useState(false)
  const [modalMode, setModalMode] = useState<'add' | 'edit' | 'delete'>('add')
  const [selectedTestimonio, setSelectedTestimonio] = useState<Testimonio | null>(null)

  useEffect(() => {
    const testimonialContainer = testimonialRef.current
    if (!testimonialContainer) return

    let animationFrameId: number
    let lastTimestamp: number = 0

    const scroll = (timestamp: number) => {
      if (lastTimestamp === 0) {
        lastTimestamp = timestamp
      }

      const deltaTime = timestamp - lastTimestamp
      lastTimestamp = timestamp

      if (!isPaused) {
        scrollPositionRef.current += deltaTime * 0.05
        if (scrollPositionRef.current >= testimonialContainer.scrollHeight) {
          scrollPositionRef.current = 0
        }
        testimonialContainer.scrollTop = scrollPositionRef.current
      }

      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [isPaused])

  const handleVerify = (email: string) => {
    const testimonio = testimonios.find(t => t.email === email)
    if (testimonio) {
      setSelectedTestimonio(testimonio)
      setVerificationModalOpen(false)
      setTestimonialModalOpen(true)
    } else {
      alert(t.errorNoTestimonial)
    }
  }

  const handleAddTestimonio = async (data: Omit<Testimonio, 'id'>) => {
    try {
      const response = await fetch('https://formspree.io/f/myzyraoz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        const newTestimonio = {
          id: Date.now().toString(),
          ...data,
        };
        setTestimonios([...testimonios, newTestimonio]);
        setTestimonialModalOpen(false);
      } else {
        alert(t.errorSubmitting);
      }
    } catch (error) {
      console.error('Error:', error);
      alert(t.errorSubmitting);
    }
  }

  const handleEditTestimonio = async (data: Testimonio) => {
    try {
      const response = await fetch('https://formspree.io/f/myzyraoz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, action: 'edit' }),
      });
      
      if (response.ok) {
        setTestimonios(testimonios.map(t => 
          t.email === data.email ? { ...t, ...data } : t
        ));
        setTestimonialModalOpen(false);
      } else {
        alert(t.errorEditing);
      }
    } catch (error) {
      console.error('Error:', error);
      alert(t.errorEditing);
    }
  }

  const handleDeleteTestimonio = async (data: Testimonio) => {
    try {
      const response = await fetch('https://formspree.io/f/myzyraoz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, action: 'delete' }),
      });
      
      if (response.ok) {
        setTestimonios(testimonios.filter(t => t.email !== data.email));
        setTestimonialModalOpen(false);
      } else {
        alert(t.errorDeleting);
      }
    } catch (error) {
      console.error('Error:', error);
      alert(t.errorDeleting);
    }
  }

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-6 w-6 ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          />
        ))}
      </div>
    )
  }

  return (
    <section id="testimonios" className="py-24 bg-[#fff8ea]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-4xl mb-4 text-[#203840]">{t.title}</h2>
          <p className="text-[#406d70] text-xl mb-6">{t.subtitle}</p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div 
            ref={testimonialRef}
            className="h-[400px] overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {testimonios.concat(testimonios).map((testimonio, index) => (
              <div key={`${testimonio.id}-${index}`} className="mb-6 bg-white shadow-lg border-2 border-[#f2d8a8] p-6 rounded-lg transition-all duration-300 hover:shadow-xl hover:border-[#806343]">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-[#406d70] rounded-full flex items-center justify-center text-white text-xl font-bold">
                      {testimonio.nombre.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#203840]">{testimonio.nombre}</h3>
                    <p className="text-[#406d70]">{testimonio.ubicacion}</p>
                  </div>
                </div>
                <p className="text-[#203840] mb-4">{testimonio.comentario}</p>
                <StarRating rating={testimonio.calificacion} />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={() => {
                setModalMode('add')
                setSelectedTestimonio(null)
                setTestimonialModalOpen(true)
              }}
              className="bg-[#406d70] hover:bg-[#203840] text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              {t.addTestimonial}
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setModalMode('edit')
                setSelectedTestimonio(null)
                setVerificationModalOpen(true)
              }}
              className="border-[#406d70] text-[#406d70] hover:bg-[#406d70] hover:text-white"
            >
              <Edit className="w-4 h-4 mr-2" />
              {t.editTestimonial}
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                setModalMode('delete')
                setSelectedTestimonio(null)
                setVerificationModalOpen(true)
              }}
              className="bg-[#806343] hover:bg-[#5a4530] text-white"
            >
              <Trash className="w-4 h-4 mr-2" />
              {t.deleteTestimonial}
            </Button>
          </div>
        </div>
      </div>

      <VerificationModal
        isOpen={verificationModalOpen}
        onClose={() => setVerificationModalOpen(false)}
        onVerify={handleVerify}
        title={t.verifyEmail}
        emailPlaceholder={t.emailPlaceholder}
        verifyButtonText={t.verify}
      />

      <TestimonialModal
        isOpen={testimonialModalOpen}
        onClose={() => {
          setTestimonialModalOpen(false)
          setSelectedTestimonio(null)
        }}
        onSubmit={
          modalMode === 'add'
            ? handleAddTestimonio
            : modalMode === 'edit'
            ? handleEditTestimonio
            : handleDeleteTestimonio
        }
        initialData={selectedTestimonio || undefined}
        mode={modalMode}
        title={
          modalMode === 'add'
            ? t.addTestimonial
            : modalMode === 'edit'
            ? t.editTestimonial
            : t.deleteTestimonial
        }
        translations={{
          name: t.name,
          location: t.location,
          comment: t.comment,
          rating: t.rating,
          submit: t.submit,
          cancel: t.cancel,
        }}
      />
    </section>
  )
}

