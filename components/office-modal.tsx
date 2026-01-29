"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
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
                <div className="flex justify-center mt-12">
                    <Button
                        size="lg"
                        className="font-serif text-xl !pl-12 !pr-8 py-8 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-primary text-primary-foreground group"
                    >
                        Conocenos más
                        <Sparkles className="ml-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
                    </Button>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-6xl overflow-y-auto max-h-[95vh] p-6 lg:p-8 bg-gray-100">
                <DialogHeader className="sm:text-center mb-2">
                    <DialogTitle className="font-serif text-3xl text-primary">Nuestro Equipo</DialogTitle>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-8 py-0 items-center">
                    {/* Carousel */}
                    <div className="w-full">
                        <Carousel className="w-full">
                            <CarouselContent>
                                <CarouselItem>
                                    <div className="p-1">
                                        <div className="h-[75vh] bg-background rounded-xl flex items-center justify-center shadow-[0_20px_60px_-10px_rgba(190,18,60,0.3)] overflow-hidden">
                                            <img
                                                src="/images/equipo-1.jpg"
                                                alt="Ginecología Regenerativa Equipo 1"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="p-1">
                                        <div className="h-[75vh] bg-background rounded-xl flex items-center justify-center shadow-[0_20px_60px_-10px_rgba(190,18,60,0.3)] overflow-hidden">
                                            <img
                                                src="/images/equipo-2.jpg"
                                                alt="Ginecología Regenerativa Equipo 2"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="p-1">
                                        <div className="h-[75vh] bg-background rounded-xl flex items-center justify-center shadow-[0_20px_60px_-10px_rgba(190,18,60,0.3)] overflow-hidden">
                                            <img
                                                src="/images/equipo-3.jpg"
                                                alt="Ginecología Regenerativa Equipo 3"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious className="left-4" />
                            <CarouselNext className="right-4" />
                        </Carousel>
                    </div>

                    {/* Text */}
                    <div className="text-muted-foreground space-y-6 leading-relaxed text-justify px-4 text-lg/8 h-full flex flex-col justify-center">
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
            </DialogContent>
        </Dialog>
    )
}
