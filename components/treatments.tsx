import { Heart, Activity, Sparkles, Leaf, Shield, HelpCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import client from "../tina/__generated__/client" // Ajusta la ruta según tu carpeta

// Mapa para convertir el string de Tina en el componente de Lucide
const iconMap: any = {
  Shield,
  Activity,
  Leaf,
  Sparkles,
  Heart,
}

export async function Treatments() {
  // 1. Pedimos los datos a Tina
  const response = await client.queries.tratamientoConnection();
  const treatmentsData = response.data.tratamientoConnection.edges;

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
          {treatmentsData?.map((item: any) => {
            const treatment = item.node;
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