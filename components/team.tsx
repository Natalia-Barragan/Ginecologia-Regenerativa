import { Card, CardContent } from "@/components/ui/card"

const doctors = [
  {
    name: "Dra. Patricia Alvarez",
    specialty: "Médica Especialista en Ginecología y Obstetricia UNLP. MP 93492. MN 98120",
    image: "/images/alvarez.jpg",
    bio: "Diplomada en Ginecología Regenerativa, Estética y Funcional. Posgrado en Menopausia y Andropausia.",
    location: "Consultorio Corpus, Tel. 2317-523636/37",
  },
  {
    name: "Dra. Alejandra Buonanno",
    specialty: "Médica Especialista en Ginecología y Obstetricia UNLP. MP 70817",
    image: "/images/buonanno.jpg",
    bio: "Diplomada en Ginecología Regenerativa, Estética y Funcional. Posgrado en Menopausia y Andropausia.",
    location: "Consultorios Galeno, Tel. 2317-612842",
  },
  {
    name: "Dra. Cecilia Zega",
    specialty: "Médica Especialista en Ginecología y Obstetricia UNLP. MP 111765",
    image: "/images/zega.jpg",
    bio: "Diplomada en Ginecología Regenerativa, Estética y Funcional. Posgrado en Menopausia y Andropausia.",
    location: "Consultorio Salta Salud, Tel. 2317-522612",
  },
]

import { OfficeModal } from "./office-modal"

export function Team() {
  return (
    <section id="equipo" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Nuestras Especialistas
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un equipo de profesionales dedicadas a tu salud y bienestar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <Card
              key={doctor.name}
              className="bg-card border-border hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6 text-center">
                <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-2 border-secondary">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="font-serif text-xl text-foreground mb-2">{doctor.name}</h3>
                <p className="text-primary text-sm font-medium mb-4">{doctor.specialty}</p>
                <p className="text-muted-foreground text-base leading-relaxed mb-4">{doctor.bio}</p>
                <div className="flex items-start justify-center text-sm text-primary font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 mt-0.5 shrink-0"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-center">{doctor.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <OfficeModal />
      </div>
    </section>
  )
}
