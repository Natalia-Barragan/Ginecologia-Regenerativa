"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="relative h-15 w-15 overflow-hidden">
              <Image
                src="/logogine.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-serif text-xl text-foreground">Ginecología Regenerativa</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#equipo"
              className="text-foreground/80 hover:text-primary transition-colors text-base"
            >
              Equipo
            </a>
            <a
              href="#tratamientos"
              className="text-foreground/80 hover:text-primary transition-colors text-base"
            >
              Tratamientos
            </a>
            <a
              href="#contacto"
              className="text-foreground/80 hover:text-primary transition-colors text-base"
            >
              Contacto
            </a>
            <Button asChild className="bg-secondary-foreground/90 text-secondary hover:bg-secondary-foreground">
              <a href="#contacto">Agendar Turno</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#equipo"
              className="block text-foreground/80 hover:text-primary transition-colors text-base py-2"
              onClick={() => setIsOpen(false)}
            >
              Equipo
            </a>
            <a
              href="#tratamientos"
              className="block text-foreground/80 hover:text-primary transition-colors text-base py-2"
              onClick={() => setIsOpen(false)}
            >
              Tratamientos
            </a>
            <a
              href="#contacto"
              className="block text-foreground/80 hover:text-primary transition-colors text-base py-2"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </a>
            <Button asChild className="w-full bg-secondary-foreground/90 text-secondary hover:bg-secondary-foreground">
              <a href="#contacto" onClick={() => setIsOpen(false)}>
                Agendar Turno
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
