import Image from "next/image"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-10 bg-foreground text-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-2 mb-4">
              <div className="relative h-12 w-12 overflow-hidden">
                <Image
                  src="/logofnegro.png"
                  alt="Logo"
                  fill
                  className="object-contain mix-blend-screen"
                />
              </div>
              <p className="font-serif text-lg">Ginecología Regenerativa</p>
            </div>
            <p className="text-card/70 text-sm">
              Salud integral para la mujer en todas sus etapas
            </p>
          </div>

          <a
            href="https://www.instagram.com/ginecologiaregenerativa9dj?igsh=NjVoYmQxenpwNndt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group transition-all hover:scale-110"
          >
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-lg text-white group-hover:shadow-pink-500/50 transition-all duration-300">
              <Instagram className="h-7 w-7" />
            </div>
            {/* <span className="text-card/70 text-sm group-hover:text-card transition-colors">
              ¡Seguinos en Instagram!
            </span> */}
          </a>

          <div className="flex items-center gap-6">
            <a
              href="#equipo"
              className="text-card/70 hover:text-card transition-colors text-sm"
            >
              Equipo
            </a>
            <a
              href="#tratamientos"
              className="text-card/70 hover:text-card transition-colors text-sm"
            >
              Tratamientos
            </a>
            <a
              href="#contacto"
              className="text-card/70 hover:text-card transition-colors text-sm"
            >
              Contacto
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-card/20 text-center">
          <p className="text-card/60 text-sm">
            © {new Date().getFullYear()} Ginecología Regenerativa. Hecho por <a className="text-card/70 hover:text-primary hover:scale-105 inline-block transition-all duration-300 text-sm font-medium" href="https://nbdigital.lat/" target="_blank" rel="noopener noreferrer">NBDigital</a>.
          </p>
        </div>
      </div>
    </footer>
  )
}
