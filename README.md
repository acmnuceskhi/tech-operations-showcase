# Tech Operations Showcase

A modern, interactive showcase website for the Tech Operations team featuring animated particle backgrounds, project highlights, and team member profiles.

## ✨ Features

- **Animated Particle Background** - Dynamic white circles with connecting lines that react to proximity
- **Retro Arcade Theme** - Press Start 2P pixel font with neon glow effects
- **Hero Section** - Full-viewport landing with fade-on-scroll overlay
- **Scroll Animations** - Smooth slide-up animations for content sections
- **Project Cards** - Showcase top projects with images and links
- **Tech Stack Display** - Interactive icons using React Icons
- **Team Profiles** - Member cards with LinkedIn and GitHub links

## 🚀 Tech Stack

- **React 19** - UI framework
- **Vite** - Fast build tool
- **Tailwind CSS 4** - Utility-first styling
- **React Icons** - Icon library
- **Canvas API** - Particle animation system

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Background.jsx
│   ├── LineCanvas.jsx
│   ├── WhiteCircleCanvas.jsx
│   ├── Member.jsx
│   ├── ProjectCard.jsx
│   └── TechChip.jsx
├── pages/            # Page components
│   └── HomePage.jsx
├── data/             # Static data
│   ├── projects.js
│   ├── members.js
│   └── logos.js
├── utils/            # Helper functions
│   ├── circleAnimation.js
│   └── lineAnimation.js
└── App.jsx           # Root component
```

## 🎨 Customization

- **Background**: Adjust circle count and speed in `utils/circleAnimation.js`
- **Team Members**: Update profiles in `src/data/members.js`
- **Projects**: Add projects in `src/data/projects.js`
- **Tech Stack**: Modify icons in `src/data/logos.js`

## 📝 License

This project is part of ACM Tech Operations team showcase.
