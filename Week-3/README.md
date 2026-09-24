# NEXORA — Interactive 3D Web Experience

> ALGORYX Technologies Frontend Internship — Week 3

## Overview

NEXORA is a creative technology studio website demonstrating how real-time 3D can be integrated into a modern, professional web experience. Built with React, Three.js, React Three Fiber, and Framer Motion.

The site is minimal, editorial, and performance-focused — designed to feel like a real product studio website, not a template.

## Features

- Sticky responsive navbar with mobile hamburger menu
- Hero section with embedded interactive 3D model
- Experience section with scroll-reveal feature blocks
- Capabilities section with Lucide icons and hover interactions
- System/Process section with 4-step workflow and tech stack panel
- Dedicated 3D Experience section with large interactive canvas
- Contact form with client-side validation and success state
- Footer with navigation links
- Framer Motion entrance and scroll animations
- `prefers-reduced-motion` support
- Accessible semantic HTML with ARIA labels
- Fully responsive: 1920px → 390px

## Technologies

| Technology | Version | Role |
|---|---|---|
| React | 19.x | UI component layer |
| React DOM | 19.x | DOM rendering |
| Vite | 8.x | Build tooling |
| Three.js | 0.186.x | 3D rendering engine |
| @react-three/fiber | 9.x | React renderer for Three.js |
| @react-three/drei | 10.x | Three.js helpers (OrbitControls, Environment, etc.) |
| Framer Motion | 13.x | Animation system |
| Lucide React | 1.x | Icon library |

## Project Structure

```
week3/
├── public/
│   └── models/
│       ├── algoryx-community-robot.glb   ← PLACE OFFICIAL ASSET HERE
│       └── PLACE_OFFICIAL_ASSET_HERE.txt
├── src/
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── CommunityModel.jsx   ← Loads official GLB, fallback geometry
│   │   │   └── RobotScene.jsx       ← Canvas, lights, OrbitControls, shadows
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Experience.jsx
│   │   ├── Capabilities.jsx
│   │   ├── SystemSection.jsx
│   │   ├── ThreeExperience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 3D Asset

This application uses an **Algoryx Community 3D asset**.

Official reference: https://www.algoryx.in/3d-assets/robot/

### Expected file path

```
public/models/algoryx-community-robot.glb
```

### ⚠ IMPORTANT — Official GLB must be added manually

The official Algoryx Community GLB file is **not included** in this repository (it must be downloaded from the Algoryx website).

**Steps to add the official asset:**

1. Visit https://www.algoryx.in/3d-assets/robot/
2. Download the GLB file
3. Rename it to `algoryx-community-robot.glb`
4. Place it at `public/models/algoryx-community-robot.glb`
5. Restart the dev server: `npm run dev`

**Without the official GLB**, the application displays a development fallback geometry (a procedural robot shape). This fallback does **not** satisfy the Week 3 internship requirement. The official Algoryx Community asset must be present for the requirement to be complete.

## Installation

```bash
npm install --legacy-peer-deps
```

> `--legacy-peer-deps` is required because React 19 has peer dependency conflicts with `@react-three/fiber` and `@react-three/drei`.

## Run

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload the dist/ folder to Netlify, or connect the GitHub repo
```

Both platforms auto-detect Vite. Build command: `npm run build`. Output directory: `dist`.

## Week 3 Requirements Checklist

| Requirement | Status |
|---|---|
| Modern professional website | ✅ |
| Responsive layout | ✅ |
| Professional navbar | ✅ |
| Hero section | ✅ |
| Multiple sections (6+) | ✅ |
| At least one Algoryx Community 3D asset | ⚠ App is ready — official GLB must be added manually |
| Footer | ✅ |
| Good typography | ✅ |
| Smooth transitions | ✅ |
| Professional UI/UX | ✅ |
| Desktop/tablet/mobile responsiveness | ✅ |
| Good performance | ✅ |
| Clean reusable React components | ✅ |
| Organized project structure | ✅ |
| GitHub-ready | ✅ |
| Deployment-ready | ✅ |
| README documentation | ✅ |

> **Week 3 is NOT 100% complete until the official Algoryx Community GLB is placed at `public/models/algoryx-community-robot.glb`.**
