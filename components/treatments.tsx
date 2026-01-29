import { Heart, Activity, Sparkles, Leaf, Shield, HelpCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// Mapa para convertir el string de Tina en el componente de Lucide
const iconMap: any = {
  Shield,
  Activity,
  Leaf,
  Sparkles,
  Heart,
}

const treatments = [
  {
    id: "bioestimuladores",
    title: "Bioestimuladores",
    description: "Inyectables de última generación que activan la producción natural de colágeno para restaurar la firmeza.",
    icon: "Sparkles"
  },
  {
    id: "biomodulacion-hormonal",
    title: "Biomodulación hormonal",
    description: "Equilibrio hormonal personalizado mediante pellets para optimizar la energía, salud y bienestar general del paciente.",
    icon: "Heart"
  },
  {
    id: "emsella",
    title: "EMSELLA",
    description: "Tecnología avanzada para fortalecer el piso pélvico y tratar la incontinencia de forma no invasiva.",
    icon: "Shield"
  },
  {
    id: "prp",
    title: "Plasma Rico en Plaquetas",
    description: "Tratamiento regenerativo natural que utiliza tus propias células para bioestimular y rejuvenecer la piel.",
    icon: "Leaf"
  },
  {
    id: "hifu",
    title: "HIFU íntimo femenino",
    description: "Ultrasonido focalizado que regenera el tejido vaginal, mejorando la tensión y la salud íntima integral.",
    icon: "Activity"
  }
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
            Innovación médica y calidez humana al servicio de la restauración y el bienestar vulvovaginal.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment) => {
            const IconComponent = iconMap[treatment.icon] || HelpCircle;

            return (
              <Card
                key={treatment.id}
                className="bg-card border-border hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-5 mx-auto group-hover:bg-accent transition-colors">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-3">{treatment.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {treatment.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  )
}