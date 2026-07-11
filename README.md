# Página web personal — Guillermo Droppelmann, PhD

Sitio web académico estático (HTML/CSS puro, sin dependencias). Listo para publicar gratis en **GitHub Pages**.

## Cómo publicarlo (10 minutos)

Tu repositorio ya existe: https://github.com/GuillermoDroppelmann/GuillermoDroppelmann.github.io

1. Abre el repositorio y haz clic en **Add file → Upload files**
2. Arrastra TODO el contenido de esta carpeta (`index.html`, `publications.html`, `talks.html`, `teaching.html`, `cv.html`, `sitemap.xml`, `robots.txt`, y las carpetas `css` e `images`)
3. Clic en **Commit changes**
4. **Listo.** En 1-2 minutos tu sitio estará en https://guillermodroppelmann.github.io

## Antes o después de publicar

- **Tu foto:** guarda una foto profesional (cuadrada, ideal 400×400 px) como `images/profile.jpg`. Mientras no exista, se muestra un círculo con tus iniciales.
- **LinkedIn:** el link actual es `https://www.linkedin.com/in/guillermo-droppelmann`. Si tu URL de LinkedIn es distinta, edita `index.html` (y el sidebar aparece en todas las páginas — se genera desde el mismo archivo, busca "linkedin" en cada .html y reemplaza).
- **Email:** verifica que `guillermo.droppelmann@meds.cl` sea correcto (en tu CV aparecía "mesds.cl", asumí que era un error de tipeo).

## Para mejorar visibilidad (LinkedIn + Google Scholar)

1. **LinkedIn:** agrega la URL del sitio en tu perfil → sección "Información de contacto" → "Sitio web". También en el titular o en "Acerca de".
2. **Google Scholar:** en tu perfil de Scholar, clic en el lápiz (editar) y agrega la URL en "Página principal". Verifica tu email institucional para que el perfil aparezca en búsquedas.
3. **Firma de email:** agrega la URL a tu firma.
4. **Google Search Console** (opcional): registra https://guillermodroppelmann.github.io en https://search.google.com/search-console y envía el `sitemap.xml` (ya incluido) para acelerar la indexación en Google.
5. **Mantén Publications al día:** cada paper nuevo = editar `publications.html` copiando el bloque `<li class="pub">...</li>` de otro paper.

## Estructura

- `index.html` — About: perfil, áreas de investigación, cargos, educación, proyectos, contacto (incluye datos estructurados schema.org para Google)
- `publications.html` — 41 artículos + 13 capítulos de libro + 8 manuscritos en revisión. Cada uno con botón **Cite** (copia la referencia) y link a **Google Scholar**
- `talks.html` — 40 presentaciones agrupadas por año
- `teaching.html` — docencia, supervisión de tesis y mentoría
- `cv.html` — CV condensado
- `css/style.css` — estilos (color de acento: cambiar `--accent` en la primera línea)
