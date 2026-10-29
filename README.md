# Trazo Vivo

Sitio web de [Trazo Vivo](https://www.trazovivo.com), una agencia de comunicación para organizaciones
comprometidas con el impacto social. Es principalmente un sitio de marketing y portafolio: páginas
estáticas (inicio, quiénes somos, valores, personal, contacto) y una galería de casos de estudio
("proyectos"), cada uno con su propia página. Está disponible en español (idioma por defecto) e
inglés (`/en/...`).

## Tecnologías

- [Gatsby](https://www.gatsbyjs.com/) 4 + React 18 + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) y SCSS (`src/styles/global.scss`)
- `gatsby-plugin-react-i18next` para las traducciones (`es` / `en`)
- `framer-motion` (transiciones de página), `react-spring`, `react-multi-carousel`, `react-player`

## Requisitos

- Node.js 20 (el proyecto se ha usado con v20.20)
- Las imágenes: `src/images/` **no está en git** (son archivos binarios pesados) pero hace falta
  tenerlas localmente para compilar. Cada proyecto tiene su carpeta (`src/images/<slug>/`).

## Instalación

```shell
npm install
npm run develop
```

El sitio queda en http://localhost:8000. El `.npmrc` activa `legacy-peer-deps`.

## Comandos

| Comando                                | Qué hace                                                                      |
| -------------------------------------- | ----------------------------------------------------------------------------- |
| `npm run develop`                      | Servidor de desarrollo en `http://localhost:8000` (expuesto en la red local)   |
| `npm start`                            | Igual que `develop`, pero sin exponerlo a la red                              |
| `npm run build`                        | Compila el sitio de producción en `public/`                                   |
| `npm run serve`                        | Sirve localmente el build de producción                                       |
| `npm run clean`                        | Borra `.cache/` y `public/` (úsalo si ves errores de GraphQL o caché viejo)    |
| `npm run typecheck`                    | Revisa los tipos con `tsc --noEmit`                                           |
| `npm run format`                       | Formatea `src/components`, `src/hooks` y `src/context` con Prettier (tabs)     |
| `npm run i18n:check`                   | Valida las traducciones (ver [Traducciones](#traducciones))                    |
| `npm run i18n:check -- --fix`          | Escribe en cada página la lista de namespaces que necesita                     |
| `npm run i18n:check -- --why <página>` | Explica qué clave obliga a cargar cada namespace en esa página                 |

No hay suite de tests ni linter configurados.

## Estructura

```
locales/{es,en}/        Traducciones, un JSON por namespace
scripts/i18n-check.js   Validador de traducciones
src/
  pages/                Rutas (una por archivo)
    projects/           Una página por caso de estudio
    valores/            Páginas de cada valor
  components/
    layout/             Layout, Header, Menu, Footer, SEO
    home/               Secciones de la página de inicio
    projects/           Bloques para armar páginas de proyecto
    valores/            Layout de las páginas de valores
    shared/             Button, config de carruseles
  data/projects.ts      Registro de proyectos (grilla del home y "siguiente proyecto")
  context/, hooks/      Estado global y hooks
  images/               (fuera de git) imágenes por proyecto
  styles/global.scss
```

Los colores de marca están en `tailwind.config.js`: `tvpink`, `tvpurple` y `tvyellow`.

## Agregar un proyecto nuevo

Ejemplo con el slug `mi-proyecto` y el prefijo de claves `miproy`.

1. **Imágenes.** Pon las imágenes en `src/images/mi-proyecto/` y la imagen para la grilla del
   inicio en `src/images/projects/` (por ejemplo `26.gif`).

2. **Página.** Crea `src/pages/projects/mi-proyecto.tsx`. La forma más fácil es copiar un proyecto
   reciente, como `fundacion-devlyn.tsx`. Todas siguen el mismo patrón:
   - Importa las imágenes y envuelve el contenido en `<Layout color="black">` (o `"white"`).
   - Compón el cuerpo con los bloques de `src/components/projects`: `FullImage`, `HeadTitle`,
     `Paragraph`, `BulletList`, `BigText`, `TwoImagesSpace`, `ImageBand`, `PhoneCarousel`,
     `MultiCarousel`…
   - Los textos van siempre con `<Trans>miproy.t1</Trans>`, nunca escritos directamente.
   - Para las listas "Tareas" y "Objetivos de colaboración" usa
     `<BulletList title="common.tasks" items={[...]} />` y `common.goals`.
   - Termina con `<NextProject slug="mi-proyecto" />`, `<AllProject link="/#projects" />` y
     `<Footer />`.
   - Exporta `Head` con el componente `SEO` (título, imagen para redes y `url="/projects/mi-proyecto"`).
   - Incluye al final la query `locales: allLocale` (cópiala de otra página).

3. **Textos del proyecto.** Crea `locales/es/miproy.json` y `locales/en/miproy.json` con las claves
   del cuerpo (`miproy.t1`, `miproy.t2`…). El nombre del archivo es el prefijo de las claves.

4. **Tarjeta del inicio.** En `locales/es/projects.json` y `locales/en/projects.json` agrega el título
   y el subtítulo de la tarjeta (`miproy.t0`, `miproy.t1`). Los nombres propios se pueden usar
   directamente como título sin clave. Si el texto ya existe en `common.*` o `subtitle.*`, reutilízalo.

5. **Registro.** En `src/data/projects.ts` importa la imagen de la grilla y agrega la entrada
   **al inicio** del arreglo `projects` (el más nuevo va primero):

   ```ts
   {
     slug: "mi-proyecto",
     title: "miproy.t0",
     text: "miproy.t1",
     img: Project26,
   },
   ```

   Con eso aparece en la grilla del inicio y entra en el orden de "Siguiente proyecto"; no hace
   falta editar el `NextProject` del proyecto anterior.

6. **Namespaces de la página.** Ejecuta:

   ```shell
   npm run i18n:check -- --fix   # escribe el filtro `ns` en la query de la página
   npm run i18n:check            # debe terminar sin errores
   npm run typecheck
   ```

7. **Revisa el resultado** con `npm run develop` (en `/projects/mi-proyecto/` y `/en/projects/mi-proyecto/`).

## Traducciones

- Idiomas: `es` (por defecto) y `en`, en `locales/<idioma>/<namespace>.json`. El nombre del archivo
  es el namespace y no se admiten subcarpetas.
- Namespaces: `index` (textos globales: menú, botones, footer; siempre se carga), `contacto`,
  `personal`, `testimonios`, `valores`, `projects` (tarjetas del inicio y textos compartidos
  `common.*` / `subtitle.*`) y uno por proyecto, con el nombre de su prefijo (`devlyn`, `care`, `thi`…).
- Cada página solo carga los namespaces de su query (`ns: { in: [...] }`), lo que reduce mucho el
  tamaño de la página. Esa lista la calcula `npm run i18n:check -- --fix`.
- Si una clave no existe en los namespaces cargados, la página muestra el texto de la clave sin
  traducir y sin error. Por eso conviene correr `npm run i18n:check` después de agregar páginas o
  claves. Comprueba que `es` y `en` tengan las mismas claves, que no falten ni sobren claves
  usadas en el código y que cada página cargue los namespaces que necesita.
- Los textos que se repiten entre proyectos (por ejemplo "Tareas:") van en `common.*` dentro de
  `projects.json`.

## Despliegue

`npm run build` genera el sitio estático en `public/`, que se puede publicar en cualquier hosting estático.
El repositorio tiene además workflows de GitHub Actions para Claude Code (`.github/workflows/`).
