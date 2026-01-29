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
            <DialogContent
                className="fixed left-[50%] top-[50%] z-50 w-full max-w-[95vw] sm:max-w-6xl overflow-hidden max-h-[95vh] p-0 bg-gray-100 rounded-lg shadow-xl outline-none focus:outline-none translate-x-[-50%] translate-y-[-50%] flex flex-col"
            >
                <DialogHeader className="pt-5 pb-4 px-6 bg-white border-b flex-shrink-0">
                    <DialogTitle className="font-serif text-xl md:text-3xl text-primary text-center">Nuestro Equipo</DialogTitle>
                </DialogHeader>
                <div className="flex-1 overflow-y-auto md:overflow-hidden p-4 md:p-6">
                    <div className="grid md:grid-cols-2 gap-3 md:gap-8 items-start h-full">
                        {/* Carousel */}
                        <div className="w-full">
                            <Carousel className="w-full">
                                <CarouselContent>
                                    {[1, 2, 3].map((n) => (
                                        <CarouselItem key={n}>
                                            <div className="p-1">
                                                <div className="h-48 md:h-[70vh] bg-background rounded-xl flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(190,18,60,0.3)] overflow-hidden">
                                                    <img
                                                        src={`/images/equipo-${n}.jpg`}
                                                        alt={`Ginecología Regenerativa Equipo ${n}`}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="flex left-2 md:left-4 bg-white/80 hover:bg-white border-primary/20 text-primary z-10" />
                                <CarouselNext className="flex right-2 md:right-4 bg-white/80 hover:bg-white border-primary/20 text-primary z-10" />
                            </Carousel>
                        </div>

                        {/* Text */}
                        <div className="text-muted-foreground space-y-3 md:space-y-4 leading-normal md:leading-relaxed text-justify px-1 md:px-4 text-xs sm:text-sm md:text-lg/8">
                            <p>
                                Somos un equipo interdisciplinario de tres médicas ginecólogas con una misión clara: integrar la ginecología tradicional con los últimos avances en medicina regenerativa y funcional.
                            </p>
                            <p>
                                Contamos con una sólida formación académica, incluyendo posgrados en menopausia y andropausia, además de una diplomatura en ginecología regenerativa, estética y funcional. Nuestra actualización es permanente; participamos activamente en congresos y sociedades científicas para garantizar tratamientos basados en la evidencia más reciente.
                            </p>
                            <p>
                                Más allá de la técnica, nos define una mirada integral de la salud femenina. Trabajamos para restablecer el bienestar, biomodular el entorno hormonal y optimizar el escenario biológico de cada paciente, ofreciendo siempre un abordaje médico personalizado y cercano.
                            </p>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}