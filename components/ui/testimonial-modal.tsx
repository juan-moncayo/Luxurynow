'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Star } from 'lucide-react'

interface TestimonialModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: TestimonialFormData) => void
  initialData?: TestimonialFormData
  mode: 'add' | 'edit' | 'delete'
  title: string
  translations: {
    name: string
    location: string
    comment: string
    rating: string
    submit: string
    cancel: string
  }
}

export interface TestimonialFormData {
  email: string;
  nombre: string;
  ubicacion: string;
  comentario: string;
  calificacion: number;
}

export function TestimonialModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  mode,
  title,
  translations
}: TestimonialModalProps) {
  const [formData, setFormData] = useState<TestimonialFormData>(
    initialData || {
      email: '',
      nombre: '',
      ubicacion: '',
      comentario: '',
      calificacion: 5
    }
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              disabled={mode !== 'add'}
            />
          </div>
          {mode !== 'delete' && (
            <>
              <div className="space-y-2">
                <Label htmlFor="nombre">{translations.name}</Label>
                <Input
                  id="nombre"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ubicacion">{translations.location}</Label>
                <Input
                  id="ubicacion"
                  required
                  value={formData.ubicacion}
                  onChange={(e) => setFormData({ ...formData, ubicacion: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="comentario">{translations.comment}</Label>
                <Textarea
                  id="comentario"
                  required
                  value={formData.comentario}
                  onChange={(e) => setFormData({ ...formData, comentario: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>{translations.rating}</Label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, calificacion: star })}
                    >
                      <Star
                        className={`h-6 w-6 ${
                          star <= formData.calificacion ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={onClose} className="border-[#406d70] text-[#406d70] hover:bg-[#406d70] hover:text-white">
              {translations.cancel}
            </Button>
            <Button type="submit" variant={mode === 'delete' ? 'destructive' : 'default'} className={mode === 'delete' ? 'bg-[#806343] hover:bg-[#5a4530] text-white' : 'bg-[#406d70] hover:bg-[#203840] text-white'}>
              {translations.submit}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

