import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="pt-8 pb-20 md:pt-12 md:pb-28 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo Placeholder */}
        <div className="mx-auto mb-8 w-80 h-80 md:w-80 md:h-80 relative flex items-center justify-center">
          <Image
            src="/logo.jpg"
            alt="Ginecología Regenerativa Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 text-balance">
          Ginecología Regenerativa
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          Tecnología de avanzada dedicada exclusivamente a la restauración y el bienestar vulvovaginal integral.
        </p>

        <Button
          asChild
          size="lg"
          className="bg-secondary text-secondary-foreground hover:bg-accent text-base px-8 py-6"
        >
          <a href="#contacto">Agendar una Consulta</a>
        </Button>
      </div>
    </section>
  )
}
