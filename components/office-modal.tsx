"use client"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Sparkles } from "lucide-react"

export function OfficeModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="flex justify-center mt-12 px-4">
                    <Button
                        size="lg"
                        className="w-full sm:w-auto font-serif text-xl px-8 py-8 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-primary text-primary-foreground group"
                    >
                        Conocenos más
                        <Sparkles className="ml-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
                    </Button>
                </div>
            </DialogTrigger>

            {/* EL CAMBIO ESTÁ ACÁ: Quitamos el transform manual y usamos clases de Shadcn nativas */}
            <DialogContent className="w-[95vw] max-w-5xl p-0 overflow-hidden bg-gray-50 border-none rounded-2xl">
                <div className="flex flex-col max-h-[90vh]">

                    {/* Header Fijo */}
                    <DialogHeader className="p-6 bg-white border-b flex-shrink-0">
                        <DialogTitle className="font-serif text-2xl md:text-3xl text-primary text-center">
                            Nuestro Equipo
                        </DialogTitle>
                    </DialogHeader>

                    {/* Contenido con Scroll Interno Independiente */}
                    <div className="flex-1 overflow-y-auto p-4 md:p-8">
                        <div className="grid lg:grid-cols-2 gap-8 items-start">

                            {/* Columna Carrusel */}
                            <div className="w-full px-2">
                                <Carousel className="w-full">
                                    <CarouselContent>
                                        {[1, 2, 3].map((n) => (
                                            <CarouselItem key={n}>
                                                <div className="aspect-[4/5] bg-white rounded-xl shadow-md overflow-hidden border border-rose-100">
                                                    <img
                                                        src={`/images/equipo-${n}.jpg`}
                                                        alt={`Equipo ${n}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious className="flex left-2 sm:-left-4 bg-white/80 hover:bg-white border-primary/20 text-primary" />
                                    <CarouselNext className="flex right-2 sm:-right-4 bg-white/80 hover:bg-white border-primary/20 text-primary" />
                                </Carousel>
                            </div>

                            {/* Columna Texto - Ajustada para legibilidad */}
                            <div className="text-muted-foreground space-y-5 text-sm md:text-lg leading-relaxed px-2">
                                <p className="font-medium text-primary/90">
                                    Somos un equipo interdisciplinario de tres médicas ginecólogas con una misión clara: integrar la ginecología tradicional con los últimos avances en medicina regenerativa y funcional.
                                </p>
                                <p>
                                    Contamos con una sólida formación académica, incluyendo posgrados en menopausia y andropausia, además de una diplomatura en ginecología regenerativa, estética y funcional.
                                </p>
                                <p>
                                    Nuestra mirada es integral; trabajamos para restablecer el bienestar y optimizar el escenario biológico de cada paciente de forma personalizada.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}