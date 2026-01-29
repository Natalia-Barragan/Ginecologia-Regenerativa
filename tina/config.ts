import { defineConfig } from "tinacms";


export default defineConfig({
    branch: "main",
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    token: process.env.TINA_TOKEN,
    build: {
        outputFolder: "admin",
        publicFolder: "public",
    },
    media: {
        tina: {
            mediaRoot: "uploads",
            publicFolder: "public",
        },
    },
    schema: {
        collections: [
            {
                name: "tratamiento",
                label: "Tratamientos",
                path: "content/tratamientos",
                fields: [
                    { type: "string", name: "title", label: "Título", isTitle: true, required: true },
                    { type: "string", name: "description", label: "Descripción" },
                    {
                        type: "string",
                        name: "icon",
                        label: "Icono",
                        options: ["Shield", "Activity", "Leaf", "Sparkles", "Heart"]
                    },
                ],
            },
            {
                name: "doctora",
                label: "Nuestras Especialistas",
                path: "content/doctoras",
                format: "md",
                fields: [
                    { type: "string", name: "name", label: "Nombre Completo", isTitle: true, required: true },
                    { type: "string", name: "specialty", label: "Especialidad y Matrícula" },
                    { type: "image", name: "image", label: "Foto de Perfil" },
                    {
                        type: "string",
                        name: "bio",
                        label: "Biografía/Diplomaturas",
                        ui: { component: "textarea" }
                    },
                    { type: "string", name: "location", label: "Consultorio y Teléfono" },
                ],
            }
        ],
    },
});