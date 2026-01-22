import { Card, CardContent } from "@/components/ui/card"

const doctors = [
  {
    name: "Dra. Alvarez",
    specialty: "Especialista en Ginecología Regenerativa",
    bio: "Con más de 15 años de experiencia, la Dra. Alvarez se dedica a brindar atención integral y personalizada, acompañando a cada mujer en su camino hacia el bienestar.",
  },
  {
    name: "Dra. Buonanno",
    specialty: "Especialista en Tratamientos Hormonales",
    bio: "La Dra. Buonanno combina su amplia formación médica con un enfoque humano y cercano, especializándose en el equilibrio hormonal y la salud femenina.",
  },
  {
    name: "Dra. Zega",
    specialty: "Especialista en Medicina Estética Ginecológica",
    bio: "La Dra. Zega aporta innovación y cuidado en cada consulta, enfocándose en tratamientos de rejuvenecimiento y bienestar íntimo para la mujer moderna.",
  },
]

export function Team() {
  return (
    <section id="equipo" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Nuestras Especialistas
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un equipo de profesionales dedicadas a tu salud y bienestar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <Card
              key={doctor.name}
              className="bg-card border-border hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6 text-center">
                {/* Photo Placeholder */}
                <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-accent/60 flex items-center justify-center">
                    <span className="font-serif text-primary text-xl">
                      {doctor.name.split(" ")[1]?.charAt(0) || "D"}
                    </span>
                  </div>
                </div>

                <h3 className="font-serif text-xl text-foreground mb-2">{doctor.name}</h3>
                <p className="text-primary text-sm font-medium mb-4">{doctor.specialty}</p>
                <p className="text-muted-foreground text-base leading-relaxed">{doctor.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
