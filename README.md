# Aditya Raj Gupta — Portfolio

[![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev)
[![React 19](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com)
[![Oxlint](https://img.shields.io/badge/Oxlint-Passed-brightgreen?style=flat-square)](https://oxc.rs)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

A high-performance personal portfolio engineered with **React 19**, **Vite 8**, **Framer Motion**, and a curated **monochrome dark aesthetic**. Designed to showcase production-scale backend architecture, real-time WebSocket systems, autonomous AI agent pipelines, and mathematical foundations.

---

## Key Highlights

- **Systems Rigor & Scale**: Highlights production impact across Playto and Emplo AI, including `<100ms` P99 SLA FastAPI services and `1,000+` concurrent WebSocket connections.
- **Dual Rigorous Academics**:
  - **Integrated M.Sc. in Mathematics & Computing** — Birla Institute of Technology, Mesra (8.7 CGPA)
  - **B.Sc. in Data Science & Applications** — Indian Institute of Technology Madras
- **Interactive D3 Physics Bubble Cloud**: Interactive skills ecosystem rendered with `d3-force` physics, multi-category centroid gravitation, collision detection, and tactile drag mechanics.
- **Direct Email Transmission (EmailJS)**: Production contact dispatch integrated via `@emailjs/browser` with async status transitions, inline transmission spinners, and automatic `mailto:` fallback.
- **Competitive Programming & Milestones**: Dedicated profile showcase spanning LeetCode, Codeforces, GeeksforGeeks, and CodeChef alongside venture co-founding and academic leadership.
- **Live Visitor Counter**: Real-time visitor tracking badge embedded above the footer using session-deduplicated API calls with local cache persistence.
- **Mobile-First Responsive Layout**: Meticulously tuned for seamless reading and touch navigation across all screen viewports without horizontal clipping.
- **Vercel-Optimized**: Pre-configured with `vercel.json` for single-page application (SPA) rewrites and immutable asset caching.

---

## Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Core** | React 19, JavaScript (ESNext), HTML5 |
| **Styling & Theme** | Pure Vanilla CSS Design System, CSS Custom Properties, Strict Monochrome Dark Palette |
| **Data Visualization & Physics** | D3-force (`forceSimulation`, `forceCollide`, `forceCenter`, `forceX`, `forceY`) |
| **Animations & Interactions** | Framer Motion, React Bits Micro-interactions (`SpotlightCard`, `BlurFade`, `BlurText`, `MagnetButton`) |
| **Communication & Services** | EmailJS (`@emailjs/browser`), Abacus Counter API |
| **Icons & Typography** | React Icons (Feather, Simple Icons), Outfit, Plus Jakarta Sans, JetBrains Mono |
| **Tooling & Linting** | Vite 8, Oxlint (Next-gen Rust-based linter) |
| **Hosting & CI/CD** | Vercel (Automated deployments on `git push` to `main`) |

---

## Subsystems & Architecture

### 1. Interactive Skills Physics Cloud (`SkillBubbleCloud.jsx`)
- Built on `d3-force` running an alpha-decay simulation in SVG coordinates.
- Dynamically clusters 34 competencies into category hubs (Product & Frontend, Distributed Backends, Agentic AI, Cloud & Data, Core CS Foundations).
- Interactive filter bar smoothly re-centers and highlights target clusters while dampening non-selected competencies.
- Includes touch/pointer dragging with velocity release physics and a simulation reset controller.

### 2. Contact Dispatch Service (`Contact.jsx`)
- Powered by `@emailjs/browser` for direct form transmissions from the browser to inbox without needing a custom SMTP server.
- Handles `idle`, `sending`, `success`, and `error` states with custom monochrome indicators.
- Form inputs automatically bundle sender name, email, time stamp, and formatted message payload.
- Automatically falls back to standard client `mailto:` if environment credentials are absent.

### 3. Deep-Dive Architecture Modals (`ProjectModal.jsx`)
- Accessible modal dialogs providing detailed engineering walkthroughs, key architecture challenges, metrics, and repository links.
- Keyboard listeners (`Escape` key dismissal) and automatic background scroll locking.

### 4. Real-Time Visitor Counter (`VisitorCounter.jsx`)
- Calls the Abacus API to record unique session hits while reading cached values on subsequent navigation.
- Guarantees 0-layout shift with offline fallback and session storage deduplication.

---

## Project Structure

```text
portfolio/
├── public/
│   ├── aditya.jpg              # Profile portrait image for social cards
│   └── favicon.svg             # Minimalist monochrome SVG favicon
├── src/
│   ├── assets/                 # Bundled production assets
│   │   ├── aditya.jpg          # Optimized portrait image
│   │   └── github-contributions.png # GitHub contribution graph
│   ├── components/             # Modular UI components
│   │   ├── react-bits/         # Custom animated micro-interaction components
│   │   │   ├── BlurFade.jsx    # Smooth staggered scroll-in blur animation
│   │   │   ├── BlurText.jsx    # Word-by-word blur text reveal
│   │   │   ├── MagnetButton.jsx# Spring-physics magnetic cursor button
│   │   │   └── SpotlightCard.jsx # Radial hover spotlight card surface
│   │   ├── Achievements.jsx    # Competitive programming profiles & leadership
│   │   ├── Contact.jsx         # Direct EmailJS transmission form & contact channels
│   │   ├── Experience.jsx      # Production history, metrics & technical contributions
│   │   ├── Footer.jsx          # Social links, copyright & back-to-top controller
│   │   ├── Hero.jsx            # Headline, credentials, CTAs & portrait framing
│   │   ├── Navbar.jsx          # Floating blur navigation bar & mobile dropdown
│   │   ├── ProjectModal.jsx    # Comprehensive project architecture inspector modal
│   │   ├── Projects.jsx        # Categorized project grid with card expansion
│   │   ├── SkillBubbleCloud.jsx# D3-force physics simulation skill cloud
│   │   ├── Skills.jsx          # Skills section container wrapper
│   │   └── VisitorCounter.jsx  # Live visitor counter badge with session caching
│   ├── data/                   # Structured data stores
│   │   ├── achievements.js     # Coding profiles & leadership milestones
│   │   ├── experience.js       # Career history & impact metrics
│   │   ├── personal.js         # Bio summary, credentials & social links
│   │   ├── projects.js         # Project specifications & architecture highlights
│   │   └── skills.js           # Categorized competencies & bubble radii
│   ├── styles/                 # Modular CSS stylesheets
│   │   ├── Achievements.css
│   │   ├── Contact.css
│   │   ├── Experience.css
│   │   ├── Footer.css
│   │   ├── Hero.css
│   │   ├── Navbar.css
│   │   ├── Projects.css
│   │   ├── SkillBubbleCloud.css
│   │   ├── Skills.css
│   │   └── variables.css       # Global design tokens & CSS custom properties
│   ├── App.css                 # Application root & layout styling
│   ├── App.jsx                 # Main layout & section orchestration
│   ├── index.css               # Global typography, resets & container rules
│   └── main.jsx                # React DOM 19 entry root
├── index.html                  # HTML entry with dark theme & Open Graph meta
├── package.json                # Project dependencies & scripts
├── vercel.json                 # Vercel SPA routing rewrites & asset caching
└── vite.config.js              # Vite bundler configuration
```

---

## Environment Variables Configuration

The portfolio uses EmailJS for sending messages directly from the contact form.

### 1. Configure Local Environment
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Populate the values with your credentials from your [EmailJS Dashboard](https://dashboard.emailjs.com/):

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxx
```

### 2. EmailJS Template Parameters
Ensure your EmailJS email template utilizes the following variables:
- `{{name}}`: Sender's full name
- `{{email}}`: Sender's return email address
- `{{message}}`: Formatted message body
- `{{time}}`: Timestamp of submission

> **Note**: If `.env` is omitted or values are blank, the form automatically falls back to standard client-side `mailto:` dispatch, ensuring zero disruption.

---

## Getting Started Locally

### Prerequisites
- **Node.js**: v18.0.0 or higher recommended
- **Package Manager**: npm (v9+), pnpm, or yarn

### 1. Clone the repository
```bash
git clone https://github.com/CuriousAd/Portfolio.git
cd Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the local development server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Run linter
```bash
npm run lint
```
Uses Oxlint to verify code quality and rule conformance in milliseconds.

### 5. Build for production
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

### 6. Preview production build locally
```bash
npm run preview
```

---

## Deploying to Vercel

The application is pre-configured for zero-config deployment on [Vercel](https://vercel.com):

1. **Import the Project**: Connect your GitHub account and import `CuriousAd/Portfolio`.
2. **Framework Detection**: Vercel will automatically identify **Vite**:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
3. **Set Environment Variables**:
   Under **Project Settings** > **Environment Variables**, add:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. **Deploy**: Click **Deploy**. Continuous deployment is enabled for all commits pushed to `main`.

---

## Connect

- **Live Website**: [aditya-portfolio.vercel.app](https://github.com/CuriousAd/Portfolio)
- **LinkedIn**: [aditya-raj-gupta](https://www.linkedin.com/in/aditya-raj-gupta-41b8092b9/)
- **GitHub**: [@CuriousAd](https://github.com/CuriousAd)
- **Email**: [adityarajcurious@gmail.com](mailto:adityarajcurious@gmail.com)

---

&copy; 2026 Aditya Raj Gupta. All rights reserved.
