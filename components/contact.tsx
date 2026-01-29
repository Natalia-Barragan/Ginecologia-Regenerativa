"use client"

import React from "react"

import { useState } from "react"
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    reason: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `Hola, mi nombre es ${formData.name}. Me gustaría realizar una consulta.
    
Motivo: ${formData.reason}
Teléfono de contacto: ${formData.phone}`

    const whatsappUrl = `https://wa.me/542317474858?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')

    setFormData({ name: "", phone: "", reason: "" })
  }

  return (
    <section id="contacto" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Contacto y Reservas
          </h2>
          <p className="text-muted-foreground text-lg max-w-none mx-auto whitespace-nowrap">
            Estamos acá para acompañarte. Agenda tu consulta o comunicate con nosotras.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="flex flex-col gap-6 lg:h-full lg:justify-between">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground text-base">+54 2317 47-4858</p>
                    <p className="text-sm text-muted-foreground mt-1">Respuesta rápida</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">Teléfono</h3>
                    <p className="text-muted-foreground text-base">+54 11 4567-8900</p>
                    <p className="text-sm text-muted-foreground mt-1">Línea directa</p>
                  </div>
                </div>
              </CardContent>
            </Card> */}

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">Dirección</h3>
                    {/* <p className="text-muted-foreground text-base">Av. Santa Fe 1234, Piso 5</p> */}
                    <p className="text-sm text-muted-foreground mt-1">9 de Julio, Buenos Aires, Argentina</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">Horarios</h3>
                    <p className="text-muted-foreground text-base">Lunes a Viernes: 9:00 - 19:00</p>
                    {/* <p className="text-sm text-muted-foreground mt-1">Sábados: 9:00 - 13:00</p> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="font-serif text-3xl text-foreground mb-4">Agendar Turno</h3>
              <p className="text-muted-foreground mb-6">
                Completá el formulario y te contactaremos a la brevedad.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-foreground text-base mb-2">
                    Nombre completo
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background border-input text-foreground placeholder:text-muted-foreground/60 text-base h-12"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-foreground text-base mb-2">
                    Teléfono
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+54 11 4567-8900"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-background border-input text-foreground placeholder:text-muted-foreground/60 text-base h-12"
                  />
                </div>

                <div>
                  <label htmlFor="reason" className="block text-foreground text-base mb-2">
                    Motivo de consulta
                  </label>
                  <Textarea
                    id="reason"
                    placeholder="Contanos brevemente el motivo de tu consulta"
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    rows={4}
                    className="bg-background border-input text-foreground placeholder:text-muted-foreground/60 text-base resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base h-12"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enviar Consulta
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
