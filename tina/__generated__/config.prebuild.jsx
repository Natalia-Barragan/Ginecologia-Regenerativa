// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "tratamiento",
        label: "Tratamientos",
        path: "content/tratamientos",
        fields: [
          { type: "string", name: "title", label: "T\xEDtulo", isTitle: true, required: true },
          { type: "string", name: "description", label: "Descripci\xF3n" },
          {
            type: "string",
            name: "icon",
            label: "Icono",
            options: ["Shield", "Activity", "Leaf", "Sparkles", "Heart"]
          }
        ]
      },
      {
        name: "doctora",
        label: "Nuestras Especialistas",
        path: "content/doctoras",
        format: "md",
        fields: [
          { type: "string", name: "name", label: "Nombre Completo", isTitle: true, required: true },
          { type: "string", name: "specialty", label: "Especialidad y Matr\xEDcula" },
          { type: "image", name: "image", label: "Foto de Perfil" },
          {
            type: "string",
            name: "bio",
            label: "Biograf\xEDa/Diplomaturas",
            ui: { component: "textarea" }
          },
          { type: "string", name: "location", label: "Consultorio y Tel\xE9fono" }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
