# Plan: Implementación de i18n (Español/Inglés)

## Resumen del Proyecto
Agregar soporte completo de internacionalización al portfolio, detectando el idioma del navegador en la página raíz y permitiendo cambio manual entre ES/EN.

---

## Fase 1: Configuración de traducciones

**Archivo: `src/i18n/ui.ts`**

Keys a agregar (~50 traducciones):
```
# Nav
nav.home, nav.about, nav.works, nav.contact

# Hero  
hero.role, hero.years

# Biography
bio.title, bio.greeting, bio.paragraphs[], bio.resume

# Process
process.title, process.steps[].title, process.steps[].description

# Projects
projects.title, projects.visit_website, projects.code

# Caption
caption.text

# Testimonials
testimonials.title, testimonials.prev, testimonials.next

# Contact
contact.title, contact.subtitle

# Footer
footer.copyright

# General
general.close
```

---

## Fase 2: Detector de idioma del navegador

**Archivo: `src/pages/index.astro`**

1. Agregar lógica para detectar `navigator.language`
2. Si `es` → redirigir a contenido en español
3. Si otro idioma → mostrar contenido en inglés
4. Usar cookie para recordar selección del usuario

**Alternativa más simple:** Renderizar contenido condicionalmente basado en detección del navegador (SSR)

---

## Fase 3: Actualizar Layout

**Archivo: `src/layouts/Layout.astro`**

1. Aceptar prop `lang` 
2. Pasar `lang` al `<html lang={lang}>`
3. Exportar función helper para obtener idioma actual

---

## Fase 4: Actualizar componentes

| Componente | Acción |
|------------|--------|
| `Nav.astro` | Usar `useTranslations()` para textos |
| `Hero.astro` | Ya tiene traducciones parciales |
| `Biography.astro` | Traducir todos los párrafos |
| `Process.astro` | Traducir título y steps |
| `Projects.astro` | Traducir "visit website" |
| `Caption.astro` | Traducir texto |
| `Testimonials.astro` | Traducir título y aria-labels |
| `Contact.astro` | Traducir "LET'S WORK TOGETHER" |
| `Footer.astro` | Traducir copyright |

---

## Fase 5: Selector de idioma

**Archivo: `src/components/ui/LanguageSelector.astro`**

1. Mostrar "ES | EN" (texto, sin banderas)
2. Cambiar idioma: togglear entre ES/EN
3. Persistir selección en cookie o localStorage
4. Descomentar en `Header.astro`

**Lógica:**
- Si está en raíz `/`: usar cookie o detección de navegador
- Click en "ES" → set cookie y recargar en español
- Click in "EN" → set cookie y recargar en inglés

---

## Fase 6: Pruebas

1. Verificar detección de idioma del navegador
2. Verificar cambio manual ES ↔ EN
3. Verificar persistencia de selección
4. Ejecutar `npm run build` para validar

---

## Archivos a modificar

```
src/i18n/ui.ts              # Agregar traducciones
src/pages/index.astro        # Detectar idioma navegador
src/layouts/Layout.astro     # Soporte lang dinámico
src/components/Nav.astro     # Traducir navegación
src/components/Hero.astro     # Ya tiene parcialmente
src/components/Biography.astro
src/components/Process.astro
src/components/Projects.astro
src/components/Caption.astro
src/components/Testimonials.astro
src/components/Contact.astro
src/components/Footer.astro
src/components/Header.astro   # Descomentar LanguageSelector
src/components/ui/LanguageSelector.astro  # Implementar toggle
```
