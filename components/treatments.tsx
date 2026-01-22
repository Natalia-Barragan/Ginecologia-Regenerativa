import { Heart, Activity, Sparkles, Stethoscope, Leaf, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const treatments = [
  {
    icon: Sparkles,
    title: "Rejuvenecimiento",
    description:
      "Tratamientos de vanguardia para el rejuvenecimiento íntimo, devolviendo confort y bienestar.",
  },
  {
    icon: Stethoscope,
    title: "Consultas Generales",
    description:
      "Atención ginecológica integral con un enfoque preventivo y personalizado para cada etapa de tu vida.",
  },
  {
    icon: Activity,
    title: "Tratamientos Hormonales",
    description:
      "Equilibrio hormonal a través de terapias especializadas para mejorar tu calidad de vida.",
  },
  {
    icon: Heart,
    title: "Salud Sexual",
    description:
      "Abordaje integral de la salud sexual femenina en un ambiente de confianza y respeto.",
  },
  {
    icon: Leaf,
    title: "Medicina Natural",
    description:
      "Opciones de tratamiento con enfoque natural y complementario para tu bienestar general.",
  },
  {
    icon: Shield,
    title: "Prevención",
    description:
      "Programas de prevención y detección temprana para cuidar tu salud a largo plazo.",
  },
]

export function Treatments() {
  return (
    <section id="tratamientos" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Nuestros Tratamientos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluciones especializadas para cada necesidad, con tecnología de punta y calidez humana
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment) => (
            <Card
              key={treatment.title}
              className="bg-card border-border hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-5 group-hover:bg-accent transition-colors">
                  <treatment.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">{treatment.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {treatment.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
