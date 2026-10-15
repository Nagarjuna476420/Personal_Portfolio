# Nagarjuna Reddy Chintala · 3D Developer Portfolio

A modern, interactive 3D developer portfolio engineered with **React 19**, **WebGL 3D Graphics**, and **Vite**. Showcases full-stack software engineering projects, backend architectures, performance optimizations, and technical skills across **.NET Core**, **C#**, **TypeScript**, **React**, and **SQL Server**.

---

## ✨ Features

- **Interactive 3D WebGL Background**: Built with WebGL featuring wireframe geometries (Icosahedron, Torus Knot, Octahedron) and a responsive 700-particle starfield reacting to cursor movements and scroll parallax.
- **Glassmorphic Design System**: Modern dark aesthetic with tailored HSL gradients, frosted glass panels, ambient pointer glow follower, and subtle micro-animations.
- **Dynamic Sticky Navigation & Storytelling**:
  - Sticky capsule navigation with active section scroll-spy tracking.
  - Sticky career experience timeline with interactive company indicator (`Duri` → `SIA` → `WorkEasy`).
  - Scroll-driven featured project story with dynamic progress bar and morphing ambient orb.
- **3D Card Hover Tilt**: Interactive 3D perspective tilt on hover using custom React hooks.
- **Responsive Architecture**: Zero-overflow responsive grid layouts with custom-styled terminal code snippets adapting to mobile, tablet, and ultra-wide displays.
- **Accessibility & Motion Safety**: Respects `prefers-reduced-motion` to smoothly disable 3D camera shifts and intensive animations.
- **Resilient Error Handling**: Wrapped in a custom React `ErrorBoundary` with fallback UI and real-time form validation with toast notifications.

---

## 🛠️ Tech Stack

- **Core**: React 19, JavaScript (ES6+), HTML5
- **3D / Graphics**: WebGL 3D Engine
- **Styling**: Vanilla CSS, Design Tokens, CSS Modules, Glassmorphism
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Typography**: Google Fonts (Bricolage Grotesque, DM Sans, Fira Code)

---

## 📁 Project Structure

```
├── public/
│   └── favicon.svg                  # Custom NR Monogram SVG Favicon
├── src/
│   ├── assets/                      # Static assets
│   ├── components/
│   │   ├── common/                  # Reusable UI primitives
│   │   │   ├── Button/              # Primary, glass, and icon buttons
│   │   │   ├── Chip/                # Tech stack badge with hover glow
│   │   │   ├── CursorGlow/          # Fluid pointer glow follower
│   │   │   ├── ErrorBoundary/       # Runtime render error catcher
│   │   │   ├── GlassCard/           # 3D tilt-enabled glassmorphic container
│   │   │   ├── SectionHeading/      # Consistent section headers with gradient accents
│   │   │   └── Toast/               # Action feedback notification
│   │   ├── layout/                  # Structural layout components
│   │   │   ├── Navbar/              # Sticky pill navigation with scrollspy
│   │   │   ├── Footer/              # Footer with back-to-top feature
│   │   │   └── SectionContainer/    # Intersection observer reveal container
│   │   ├── sections/                # Page sections
│   │   │   ├── Hero/                # Intro with parallax and CTA buttons
│   │   │   ├── About/               # Bio narrative, core chips, and stat metrics
│   │   │   ├── Skills/              # Categorized skills grid with 3D tilt cards
│   │   │   ├── Experience/          # Sticky company indicator and career timeline
│   │   │   ├── Projects/            # Case studies with responsive code terminals
│   │   │   ├── Featured/            # Scroll-locked multi-step project story
│   │   │   ├── Highlights/          # Key performance benchmark metrics
│   │   │   ├── TechMarquee/         # Seamless infinite technology ticker
│   │   │   ├── Education/           # Academic degree and college details
│   │   │   ├── ResumeCTA/           # Resume download action card
│   │   │   └── Contact/             # Interactive form with validation & toast alerts
│   │   └── background/
│   │       └── SceneBackground.jsx  # WebGL 3D canvas and particle physics
│   ├── data/
│   └── portfolioData.js             # Centralized single source of truth for portfolio content
│   ├── hooks/
│   │   ├── useReducedMotion.js      # Accessibility detection
│   │   ├── useScrollSpy.js          # Active navigation section tracker
│   │   └── useTiltEffect.js         # 3D mouse perspective tilt hook
│   ├── styles/
│   │   ├── animations.css           # Keyframe animations
│   │   ├── global.css               # Resets, typography, custom scrollbar
│   │   └── variables.css            # Centralized design tokens
│   ├── App.jsx                      # App root component
│   └── main.jsx                     # Application entry point
├── index.html                       # SEO metadata & font preconnects
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Nagarjuna476420/Personal_Portfolio.git
   cd Personal_Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

---

## 👤 Author

**Nagarjuna Reddy Chintala**
- Role: Full Stack Developer (.NET Core & React.js)
- Email: [chintalanagarjuna420@gmail.com](mailto:chintalanagarjuna420@gmail.com)
- Location: India
