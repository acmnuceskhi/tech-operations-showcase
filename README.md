# Tech Operations Showcase 2025 - 2026

A modern, interactive showcase website for the Tech Operations team featuring animated particle backgrounds, project highlights, team member profiles, and a headless CMS for easy content management.

## ✨ Features

- **Animated Particle Background** - Dynamic white circles with connecting lines that react to proximity
- **Retro Arcade Theme** - Press Start 2P pixel font with neon glow effects
- **Hero Section** - Full-viewport landing with fade-on-scroll overlay
- **Scroll Animations** - Smooth slide-up animations for content sections
- **Project Cards** - Showcase top projects with images and links
- **Tech Stack Display** - Interactive icons using React Icons
- **Team Profiles** - Member cards with LinkedIn and GitHub links
- **Content Management** - Tina CMS integration for easy content editing through a visual admin UI

## 🚀 Tech Stack

- **React 19** - UI framework
- **Vite** - Fast build tool
- **Tailwind CSS 4** - Utility-first styling
- **React Icons** - Icon library
- **Canvas API** - Particle animation system
- **Tina CMS** - Git-based headless CMS for content management

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server with Tina CMS (recommended)
npm run dev:tina

# Run development server without Tina CMS
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎛️ Content Management with Tina CMS

This project uses Tina CMS for managing content (members, projects, tech stack) through a visual admin interface.

### Local Development

1. Start the development server with Tina:
   ```bash
   npm run dev:tina
   ```

2. Access the admin UI at:
   ```
   http://localhost:5173/admin
   ```

3. Edit content through the visual interface:
   - **Members** - Add/edit team member profiles
   - **Projects** - Manage project information
   - **Tech Stack** - Update technology logos and details

4. Changes are automatically saved to JSON files in the `/content` directory

### Content Structure

```
content/
├── members/         # Team member profiles
│   ├── 1.json
│   ├── 2.json
│   └── ...
├── projects/        # Project information
│   ├── p1.json
│   ├── p2.json
│   └── ...
└── tech-stack/      # Technology stack items
    ├── 1.json
    ├── 2.json
    └── ...
```

### Production Deployment

For production, you'll need to set up Tina Cloud:

1. Sign up at [tina.io](https://app.tina.io)
2. Connect your GitHub repository
3. Get your credentials from the Tina Cloud dashboard
4. Set environment variables in your deployment platform:
   ```
   VITE_TINA_CLIENT_ID=your_client_id
   VITE_TINA_TOKEN=your_token
   VITE_TINA_BRANCH=main
   ```

See `.env.example` for environment variable template.

## 📁 Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Background.jsx
│   ├── LineCanvas.jsx
│   ├── WhiteCircleCanvas.jsx
│   ├── Member.jsx
│   ├── ProjectCard.jsx
│   ├── FeaturedProjectCard.jsx
│   ├── InterstitialText.jsx
│   ├── Sidebar.jsx
│   ├── TechChip.jsx
│   └── LoadingSpinner.jsx
├── pages/            # Page components
│   ├── HomePage.jsx
│   ├── AllMembersPage.jsx
│   ├── ProjectsPage.jsx
│   ├── ProjectPage.jsx
│   ├── MemberProfilePage.jsx
│   └── TinaAdminPage.jsx
├── hooks/            # Custom React hooks
│   └── useTinaData.js
├── utils/            # Helper functions
│   ├── circleAnimation.js
│   ├── lineAnimation.js
│   └── iconMapper.js
├── tina/             # Tina CMS client
│   └── client.js
└── App.jsx           # Root component

content/              # CMS-managed content (JSON)
├── members/
├── projects/
└── tech-stack/

tina/                 # Tina CMS configuration
└── config.ts

scripts/              # Utility scripts
└── migrate-to-json.js
```

## 🎨 Customization

- **Background**: Adjust circle count and speed in `utils/circleAnimation.js`
- **Content**: Edit team members, projects, and tech stack through the Tina CMS admin UI at `/admin`
- **Styling**: Modify Tailwind classes in component files
- **Routes**: Update routes in `src/App.jsx`

## 📝 License

This project is part of ACM Tech Operations team showcase.
