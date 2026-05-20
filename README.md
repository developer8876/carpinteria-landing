# AM La Carpintería — Sitio Web

Next.js 14 · Tailwind CSS · Galería dinámica automática

---

## Arrancar el proyecto

```bash
cd la-carpinteria
npm install      # primera vez solamente (~1 min)
npm run dev      # abre http://localhost:3000
```

Para producción:
```bash
npm run build
npm start
```

---

## Agregar fotos al portfolio

La galería se llena **sola** — no hay que tocar código.

1. Creá una carpeta dentro de `public/images/` con el nombre del proyecto:
   ```
   public/images/Pilar - Cocina minimalista/
   public/images/CABA - Vestidor suite principal/
   public/images/Trenque Lauquen - Living comedor/
   ```

2. Tirá las fotos (JPG, PNG, WebP) adentro de la carpeta.

3. Reiniciá el servidor (`npm run dev`) o refrescá la página en producción.

### Convención de nombres de carpeta

| Formato | Resultado en la grilla |
|---------|------------------------|
| `Ciudad - Descripción` | título: "Ciudad — Descripción" |
| Primera foto (alfabéticamente) | portada del proyecto |

### Categorías auto-detectadas

| Palabra en el nombre | Categoría |
|---------------------|-----------|
| cocina / kitchen | Cocinas |
| placard / vestidor | Vestidores |
| living / comedor / salon | Living |
| baño / bano | Baños |
| oficina / estudio | Oficinas |
| (ninguna) | General |

---

## Personalizar datos de contacto

Editá `components/Contact.tsx` y `components/Footer.tsx`:
- Número de WhatsApp (`wa.me/54...`)
- Email
- Handle de Instagram
- Acción del formulario (reemplazá `REPLACE_ME` con tu ID de Formspree en https://formspree.io)

## Imágenes principales

- Hero principal → `public/hero/hero.jpg`
- Foto de Nosotros → `public/hero/about.jpg`

---

## Estructura del proyecto

```
la-carpinteria/
├── app/
│   ├── api/gallery/route.ts   ← API que lee /public/images/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Process.tsx
│   ├── Materials.tsx
│   ├── Gallery.tsx            ← cliente: fetch + filtros + lightbox
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ScrollReveal.tsx
├── lib/
│   └── gallery.ts             ← lógica de parsing de carpetas
└── public/
    ├── logo-am-bordo.svg
    ├── hero/
    │   ├── hero.jpg
    │   └── about.jpg
    └── images/                ← TUS CARPETAS DE PROYECTOS VAN ACÁ
```
