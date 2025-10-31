# Tech Operations Showcase

A modern React project built with Vite and styled with Tailwind CSS.

## Features

- ⚡️ **Vite** - Lightning-fast build tool and dev server
- ⚛️ **React 19** - Latest version of React with modern features
- 🎨 **Tailwind CSS v4** - Utility-first CSS framework for rapid UI development
- 🔥 **Hot Module Replacement (HMR)** - Instant updates during development
- 📦 **ESLint** - Code quality and consistency

## Getting Started

### Prerequisites

- Node.js 20.x or later
- npm 10.x or later

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

Create a production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

### Lint

Run ESLint to check code quality:
```bash
npm run lint
```

## Project Structure

```
tech-operations-showcase/
├── public/          # Static assets
├── src/
│   ├── assets/      # Images and other assets
│   ├── App.jsx      # Main application component
│   ├── index.css    # Global styles with Tailwind imports
│   └── main.jsx     # Application entry point
├── index.html       # HTML template
├── package.json     # Project dependencies and scripts
└── vite.config.js   # Vite configuration
```

## Tailwind CSS

This project uses Tailwind CSS v4, which has a simplified setup process. The Tailwind directives are imported in `src/index.css`:

```css
@import "tailwindcss";
```

You can use any Tailwind utility classes in your React components.

## Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
