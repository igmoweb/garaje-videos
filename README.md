# Vídeos de Garaje de Ideas

Hecho con [Turborepo](https://turbo.build/). Alberga el código de los distintos vídeos que voy realizando para Garaje de Ideas.

## Guía de uso

Una vez clonado el repositorio, ejecuta `npm install`. A continuación:

- `npm run dev` para lanzar todas las aplicaciones a la vez.
- `npx turbo run dev --filter=app-name` para lanzar sólo una aplicación. Por ejemplo:
```bash
turbo run dev --filter=data-fetching
```

## ¿Qué contiene?

Este Turborepo incluye las siguientes aplicaciones/paquetes:

### Videos
- `data-fetching`: [Data Fetching en NextJS 13 paso a paso
  ](https://www.youtube.com/watch?v=7JJjOoV31Xg)
- `data-caching`: [Data Caching en NextJS: todo lo que necesitas saber](https://www.youtube.com/watch?v=-FY5NRvTDrA&t=12s)
- `next-layouts`: [Layouts en NextJS paso a paso](https://github.com/igmoweb/garaje-videos)
- `next-ai`: [Creamos dos aplicaciones de IA con Vercel SDK, OpenAI y Replicate
  ](https://www.youtube.com/watch?v=j5Q8g5dh3aM)

### Apps and Packages
- `eslint-config-custom`: Configuración de ESLint común a todas las aplicaciones
- `tailwind-config`: Configuración Tailwind común a todas las aplicaciones
- `postcss-config`: Configuración PostCSS común a todas las aplicaciones
- `ui`: Paquete común a todas las aplicaciones que incluye componentes (aunque en desuso por ahora)
