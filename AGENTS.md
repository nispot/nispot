# AGENTS.md - Agentic Coding Guidelines

This is an Astro-based portfolio website using Tailwind CSS for styling. It supports i18n with English (default) and Spanish locales.

## Project Structure

```
/
├── src/
│   ├── components/      # Astro components
│   ├── components/ui/   # Reusable UI components
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages (en/, es/)
│   └── i18n/            # Internationalization utilities
├── public/              # Static assets
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind configuration
└── package.json
```

## Build Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Run type checks and build to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro -- <cmd>` | Run Astro CLI commands |

**Running type checks**: `npm run astro -- check`

## Code Style Guidelines

### Formatting (Prettier)
- Single quotes for strings
- Semicolons at end of statements
- Print width: 80 characters
- Tab width: 2 spaces
- Trailing commas in ES5 contexts
- Bracket spacing enabled
- Format on save enabled

### Tailwind CSS
- Use Tailwind utility classes for all styling
- Custom colors available:
  - `brand` (#FB581C) - primary accent
  - `cream` (#F4F3EF) - background
  - `beige` (#E5E2DB) - secondary background
  - `black` (#373737) - default text (with 50-900 variants)
  - `gray` (#636363) - muted text
  - `white` (#FFFFFF)
- Font family: Inter (via @fontsource-variable/inter)

### Astro Components
- Frontmatter in code fence (`---`) at top of file
- Use curly braces `{}` for expressions in templates
- Map over arrays with `.map()` for repeated elements
- Use kebab-case for class names (Tailwind convention)

### TypeScript
- Enable type checking with `@astrojs/check`
- Use explicit types in frontmatter when beneficial
- `.astro` files support TypeScript in frontmatter

### Naming Conventions
- Components: PascalCase (e.g., `Nav.astro`, `Button.astro`)
- Variables/functions: camelCase
- Constants: UPPER_SNAKE_CASE (if truly constant)
- CSS classes: kebab-case (Tailwind)

### Imports
- Use relative paths for local imports
- Sort imports logically (standard library, external, local)
- Group related imports together

### Error Handling
- Astro components handle errors gracefully via built-in error boundaries
- For interactive components, use try/catch in client-side scripts
- Validate props with TypeScript types

### Internationalization (i18n)
- Locales: `en` (default), `es`
- Use `src/i18n/ui.ts` for translated strings
- Use `src/i18n/utils.ts` for helper functions
- Page routes: `/`, `/en/`, `/es/` (index.astro handles locale detection)

## Component Patterns

### Basic Astro Component
```astro
---
// Frontmatter: define props, imports, logic
interface Props {
  title: string;
}
const { title } = Astro.props;
---

<!-- Template: use props and render -->
<h1 class="text-2xl font-bold">{title}</h1>
```

### Component with Slots
```astro
---
// Component that accepts children
---
<div class="card">
  <slot />
</div>
```

### Using Components
```astro
---
import Button from '../components/ui/Button.astro';
---
<Button variant="primary">Click me</Button>
```

## Common Tasks

### Adding a new page
1. Create `src/pages/<route>.astro` or `src/pages/<locale>/<route>.astro`
2. Import and use the Layout component
3. Add navigation link in Nav.astro if needed

### Adding a new component
1. Create in appropriate directory (`components/` for core, `components/ui/` for reusable)
2. Define Props interface with TypeScript
3. Use Tailwind classes for styling
4. Export for use in other components

### Modifying styles
- Edit `tailwind.config.mjs` for theme changes
- Use utility classes directly in components for one-off styles
- Avoid custom CSS unless necessary

## Important Notes

- No testing framework currently configured
- Build includes `astro check` for type validation
- Production build outputs to `./dist/`
- No environment variables required for basic operation