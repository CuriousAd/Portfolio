# Aditya Raj Gupta — Portfolio

[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev)
[![React 19](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com)
[![Oxlint](https://img.shields.io/badge/Oxlint-Checked-brightgreen?style=flat-square)](https://oxc.rs)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

A high-performance, minimalist personal portfolio engineered with **React 19**, **Vite**, **Framer Motion**, and a curated monochrome aesthetic. Designed to showcase production-scale backend architecture, real-time WebSocket systems, autonomous AI pipelines, and mathematical foundations.

---

## Key Highlights

- **Systems Rigor & Scale**: Highlights production impact across Playto and Emplo AI, including `<100ms` P99 SLA FastAPI services and `1,000+` concurrent WebSocket connections.
- **Dual Rigorous Academics**:
  - **Integrated M.Sc. in Mathematics & Computing** — Birla Institute of Technology, Mesra (8.7 CGPA)
  - **B.Sc. in Data Science & Applications** — Indian Institute of Technology Madras
- **Interactive UI & Animations**: Powered by customized React Bits components (`SpotlightCard`, `BlurFade`, `BlurText`, `ShinyText`, `MagnetButton`).
- **Live Visitor Counter**: Real-time visitor counter badge embedded in the footer that increments on every unique session.
- **Full SEO & Open Graph Metadata**: Configured for high-fidelity social share previews across LinkedIn, X/Twitter, WhatsApp, and Discord.
- **Vercel-Optimized**: Pre-configured with `vercel.json` for single-page app (SPA) rewrites and immutable asset caching headers.

---

## Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Core** | React 19, JavaScript (ESNext), HTML5 |
| **Styling** | Pure Vanilla CSS Design System, CSS Variables, Glassmorphism |
| **Animations & Effects** | Framer Motion, React Bits Micro-interactions, Canvas Confetti |
| **Icons & Typography** | React Icons (Feather), Outfit, Plus Jakarta Sans, JetBrains Mono |
| **Tooling & Linting** | Vite 8, Oxlint (Next-gen Rust-based linter) |
| **Hosting & CI/CD** | Vercel (Auto-deployments on `git push` to `main`) |

---

## Project Structure

```text
portfolio/
├── public/
│   ├── aditya.jpg            # Profile portrait image
│   ├── favicon.svg           # Custom vector favicon
│   └── icons.svg             # SVG symbol sprite definitions
├── src/
│   ├── assets/               # Local bundled assets
│   ├── components/           # Modular UI components
│   │   ├── react-bits/       # Custom animated micro-interaction components
│   │   │   ├── BlurFade.jsx
│   │   │   ├── BlurText.jsx
│   │   │   ├── MagnetButton.jsx
│   │   │   ├── ShinyText.jsx
│   │   │   └── SpotlightCard.jsx
│   │   ├── About.jsx         # Background, thesis & dual academic degrees
│   │   ├── Contact.jsx       # Contact form, direct details & copy action
│   │   ├── Experience.jsx    # Work history & production achievements
│   │   ├── Footer.jsx        # Footer links & live visitor counter
│   │   ├── Hero.jsx          # Hero presentation & quick navigation
│   │   ├── Navbar.jsx        # Floating blur navigation bar
│   │   ├── Projects.jsx      # Production & research projects grid
│   │   ├── Skills.jsx        # Categorized tech stack & competencies
│   │   └── VisitorCounter.jsx# Live visitor counter with session persistence
│   ├── data/                 # Data stores for projects, experience & skills
│   │   ├── experience.js
│   │   ├── personal.js
│   │   ├── projects.js
│   │   └── skills.js
│   ├── styles/               # Section-level style definitions & variables
│   │   └── variables.css     # Global CSS design tokens
│   ├── App.jsx               # Main application component
│   └── main.jsx              # React DOM entry point
├── index.html                # Entry HTML with Open Graph & Google Fonts
├── vercel.json               # Vercel SPA routing rewrites & cache policy
├── vite.config.js            # Vite configuration
└── package.json              # Project dependencies & scripts
```

---

## Getting Started Locally

### Prerequisites

- Node.js (v18.0.0 or higher recommended)
- npm, yarn, or pnpm

### 1. Clone the repository
```bash
git clone https://github.com/CuriousAd/Portfolio.git
cd Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Build for production
```bash
npm run build
```
Production output is created inside the `dist/` directory.

### 5. Run linter
```bash
npm run lint
```

---

## Deploying to Vercel

The repository is pre-configured for zero-config Vercel hosting:

1. Import the repository on [Vercel](https://vercel.com/new).
2. Vercel automatically detects **Vite**:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Click **Deploy**.
4. All pushes to the `main` branch trigger automated continuous deployments.

---

## Connect

- **Portfolio**: [Live Website](https://github.com/CuriousAd/Portfolio)
- **LinkedIn**: [aditya-raj-gupta](https://www.linkedin.com/in/aditya-raj-gupta-41b8092b9/)
- **GitHub**: [@CuriousAd](https://github.com/CuriousAd)
- **Email**: [adityarajcurious@gmail.com](mailto:adityarajcurious@gmail.com)

---

&copy; 2026 Aditya Raj Gupta. All rights reserved.
