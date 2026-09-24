# NEXORA — Interactive 3D Web Experience

Week 3 submission for the Algoryx Frontend Internship: a professional, responsive
website built around a real-time, interactive 3D model rendered with React Three Fiber.

## Overview

NEXORA is a fictional creative-technology studio site built to demonstrate how a
3D asset from the **Algoryx Community** can be integrated into a modern, production-style
web experience — not as a gimmick, but as the centerpiece of the page.

## Features

- Sticky, responsive navbar with a mobile hamburger menu and smooth-scroll links
- Animated hero with an interactive 3D model
- Experience, Capabilities, and System/Process sections with scroll-reveal animation
- Dedicated 3D Experience section with drag-to-orbit interaction and a live asset-source
  indicator (tells you whether it's showing the real Algoryx asset or the dev placeholder)
- Validated contact form (required fields, email format, inline errors, success message)
- Full keyboard focus states, semantic HTML, `aria-*` attributes on form fields
- Respects `prefers-reduced-motion`
- Fully responsive from 1920px down to 390px

## Technologies

- React 19 + Vite
- Tailwind CSS v4
- Three.js, @react-three/fiber, @react-three/drei
- Framer Motion
- Lucide React (icons)

## Project Structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    Experience.jsx
    Capabilities.jsx
    SystemSection.jsx
    ThreeExperience.jsx
    Contact.jsx
    Footer.jsx
  components/3d/
    RobotScene.jsx        # Canvas, camera, lighting, OrbitControls
    CommunityModel.jsx    # Loads the Algoryx GLB, falls back to a placeholder if missing
  App.jsx
  main.jsx
  styles.css

public/
  models/
    algoryx-community-robot.glb   ← you add this file (see below)

README.md
package.json
index.html
```

## 3D Asset — read this before you submit

The 3D model is meant to be the **official Algoryx Community asset**, not a
placeholder. This project does **not** ship with that file, because it has to be
downloaded from your own Algoryx account.

1. Create or sign in to an Algoryx account.
2. Go to the Community 3D Assets section, e.g. `https://www.algoryx.in/3d-assets/robot/`.
3. Download the asset and place it at exactly:
   ```
   public/models/algoryx-community-robot.glb
   ```
4. Delete `public/models/PUT-ALGORYX-COMMUNITY-GLB-HERE.txt`.

**Until you do this**, the site automatically shows a clearly-labeled procedural
placeholder model (a faceted copper shape) instead — it checks whether the real
file exists and never claims the placeholder is the official asset. You'll see a
"Development placeholder" notice next to the 3D viewer in the 3D Experience section
that disappears once the real file is in place.

## Installation

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Responsive Design

Layout, type sizes, and the 3D canvas height are tuned with Tailwind breakpoints
and tested at 1920 / 1440 / 1024 / 768 / 480 / 390px. Below `md` the hero stacks
into a single column, the navbar collapses to a hamburger menu, and the footer
switches from three columns to one.

## 3D Interaction

`OrbitControls` (from `@react-three/drei`) lets visitors drag to orbit the model
horizontally; vertical rotation is clamped so the model stays framed. Zoom and pan
are disabled to keep the interaction predictable on both desktop and touch devices.
A subtle idle float (via `useFrame`) keeps the scene alive when no one is
interacting with it.

## Performance

- Pixel ratio is capped at `Math.min(devicePixelRatio, 2)`
- The model and its `Suspense` boundary are the only heavy assets on the page —
  everything else is CSS/SVG
- `ContactShadows` and `Environment` are lightweight, pre-baked lighting helpers
  rather than real-time global illumination
- No post-processing pipeline, since it isn't needed for a single centered model

## Deployment

**Vercel**
```bash
npm install -g vercel
vercel
```
Framework preset: Vite. No environment variables required.

**Netlify**
- Build command: `npm run build`
- Publish directory: `dist`

## GitHub

```bash
git init
git add .
git commit -m "NEXORA — Week 3 Algoryx internship submission"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

## Internship Requirements Checklist

| Requirement | Status |
|---|---|
| Modern, professional website | ✅ |
| Responsive layout | ✅ |
| Professional navbar | ✅ |
| Hero section | ✅ |
| Multiple content sections | ✅ (Hero, Experience, Capabilities, System, 3D Experience, Contact, Footer) |
| At least one Algoryx Community 3D asset | ⚠️ You must add `algoryx-community-robot.glb` — see above |
| Footer | ✅ |
| Good typography | ✅ (Fraunces display + Inter body, defined type scale) |
| Smooth transitions/animations | ✅ (Framer Motion, `prefers-reduced-motion` respected) |
| Desktop + tablet + mobile responsiveness | ✅ |
| Good performance | ✅ (capped DPR, lightweight lighting, no post-processing) |
| Clean, reusable React components | ✅ |
| Proper project structure | ✅ |
| GitHub-ready | ✅ |
| Deployment-ready | ✅ (Vercel/Netlify instructions above) |
| README documentation | ✅ (this file) |

**This project is not fully complete until you add the real Algoryx Community GLB file.**
Everything else is done and verified (`npm install`, `npm run build`, and `npx oxlint`
all pass cleanly).
