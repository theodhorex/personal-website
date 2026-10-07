# Theodhore — Personal Portfolio & Engineering Showcase

> Web Developer & Web3 Enthusiast · Indonesia (UTC+7)  
> Built with Next.js 16, React 19, Tailwind CSS v4, and the Cohere 2026 Design System.

[![Next.js](https://img.shields.io/badge/Next.js-16.3.8-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-blue?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Turbopack](https://img.shields.io/badge/Turbopack-Enabled-000000?style=flat-square)](https://turbo.build/)
[![License](https://img.shields.io/badge/License-MIT-emerald?style=flat-square)](LICENSE)

---

## Overview

A high-performance personal portfolio engineered from first principles. It synthesizes the editorial rhythm, interactive particle physics, and deep case study architecture of [bouayaben.com](https://bouayaben.com/) with the restrained enterprise aesthetic of the **Cohere 2026 Web Design System**.

Designed to showcase real software systems, reactive Web3 dApps, smart contract architectures, and high-leverage developer tooling with uncompromising visual polish.

---

## Key Highlights

- **Interactive Vector Particle Field (`ParticleCanvas`)**: A 60 FPS HTML5 Canvas fluid simulation featuring cursor repulsion physics, curl-noise drift, and dynamic filaments rendered in Cohere mineral tones.
- **Curated Case Studies (`BouayabenWork`)**: Rule-separated project index (`01`–`05`) paired with an interactive slide-over drawer breaking down engineering constraints, architectural decisions, quantified production outcomes, and source repositories.
- **Cohere 2026 Design System**:
  - **Colors**: Canvas White (`#ffffff`), Near-Black Primary (`#17171c`), Deep Enterprise Green (`#003c33`), Soft Stone (`#eeece7`), and Coral (`#ff7759`) taxonomy accents.
  - **Typography**: Carved display headlines via `Space Grotesk` (tight line-height and negative letter tracking), neutral UI text via `Inter`, and technical markers via `Geist Mono`.
  - **Elevation & Radius**: Signature `22px` rounded cards, `32px` pill buttons, and crisp `1px` hairline rules without heavy drop shadows.
- **About & Capabilities Grid (`BouayabenAbout`)**: Two-column layout featuring a sticky label, editorial position statement, capability pill tags, and verifiable production invariants.
- **Direct Connect Channel (`BouayabenContact`)**: Single-action contact block with 1-click email copy feedback, GitHub, and LinkedIn links.
- **Zero Heavy External Dependencies**: Pure React 19 + GPU-accelerated CSS/Canvas, ensuring instant first paints and minimal bundle size.

---

## Tech Stack

| Domain | Technology | Purpose |
|---|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) | Server components, edge streaming, and static prerendering |
| **Compiler** | [Turbopack](https://turbo.build/) | Sub-second local HMR and lightning-fast production builds |
| **UI Library** | [React 19](https://react.dev/) | Component architecture and state management |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Theme tokens, custom deceleration curves, and utilities |
| **Typography** | `next/font/google` | `Space Grotesk`, `Inter`, and `Geist Mono` |
| **Icons** | [Lucide React](https://lucide.dev/) + Custom SVGs | Interface iconography |
| **Runtime** | [Bun](https://bun.sh/) | Fast package management and scripting |

---

## Featured Projects Showcased

1. **Solara DEX & Yield Aggregator (`01`)** — Decentralized exchange interface and yield aggregator with Multicall3 batching, Viem optimistic state, and zero-slippage routing.
2. **Hyperion Edge Engine (`02`)** — Ultra-low latency headless web platform built on Next.js 16 and Cloudflare Workers, delivering `<25ms` global TTFB across 40+ regions.
3. **Kratos On-Chain Indexer (`03`)** — Ultra-fast EVM log indexer built in Rust that parses millions of block receipts per second into parquet files for sub-5ms analytical queries.
4. **ChainForge Smart Contract Playground (`04`)** — Zero-install in-browser Solidity development sandbox running solc in WebAssembly with client-side EVM bytecode execution.
5. **Aura Latent 3D Canvas (`05`)** — High-performance 3D canvas rendering 500,000+ interactive particles at 60 FPS using instanced WebGL shaders and WebAssembly.

---

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (v1.2+) or Node.js (v20+)

### Installation

```bash
# Clone the repository
git clone https://github.com/theodhorex/personal_website.git
cd personal_website

# Install dependencies
bun install
```

### Development Server

Start the local development server at `http://localhost:3000`:

```bash
bun dev
```

### Production Build

Create an optimized static/production build using Turbopack:

```bash
bun run build
bun start
```

### Linting

Run ESLint checks:

```bash
bun run lint
```

---

## Project Structure

```
personal_website/
├── app/
│   ├── globals.css         # Cohere 2026 design tokens & keyframes
│   ├── layout.tsx          # Root layout with Google Fonts setup
│   └── page.tsx            # Landing page composition
├── components/
│   ├── bouayaben-about.tsx # About grid with sticky label & recognition
│   ├── bouayaben-contact.tsx # Contact section with 1-click email copy
│   ├── bouayaben-hero.tsx  # Monumental hero headline & stats
│   ├── bouayaben-work.tsx  # Work-row index & slide-over case study drawer
│   ├── particle-canvas.tsx # 60 FPS vector field particle canvas
│   ├── reveal.tsx          # Viewport scroll intersection animation
│   ├── site-header.tsx     # Sticky minimalist navigation
│   ├── footer.tsx          # Single-line status bar footer
│   └── icons.tsx           # Custom brand vector icons
├── public/                 # Static assets
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

---

## Author & Contact

**Theodhore** — Web Developer & Web3 Enthusiast  
- Email: [theodhore76@gmail.com](mailto:theodhore76@gmail.com)  
- GitHub: [@theodhorex](https://github.com/theodhorex)  
- Location: Indonesia (UTC+7)

---

## License

This project is licensed under the [MIT License](LICENSE).

