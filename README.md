# Built By The Cruzat `v5.86`
### Senior UI Architect & Front-End Engineering Portfolio
**[builtby.thecruzat.com](https://builtby.thecruzat.com)**

---

## ⚡ The Project
This repository represents the 2026 modernization of my professional portfolio. Originally a legacy rehab, **v5.86** has been fully re-engineered onto **Nuxt 3.9** and **Vue 3**. It serves as a flagship demonstration of enterprise-grade front-end architecture, balancing high-fidelity design with bleeding-edge performance.

## 🛠 Modernized Stack (2026 Revision)
* **Core:** Nuxt 3.9+ (Vue 3 Composition API)
* **Build Tool:** Vite with `vite-plugin-css-injected-by-js` for optimized asset delivery
* **Styling:** SCSS with modern variable scoping and Tailwind CSS integration
* **Icons:** FontAwesome 7.x (SVG Core)
* **Fonts:** Optimized delivery via `@nuxtjs/google-fonts`
* **Logic:** Node.js `vm` for secure, build-time data orchestration

## 🎯 Architectural Highlights
The 2026 migration from Nuxt 2 to Nuxt 3 allowed for several significant "Senior-level" improvements:

* **Hybrid Rendering:** Leveraging **SSR** for SEO-critical content while utilizing **ClientOnly** components for interactive elements like cookie consent.
* **Dynamic Build-Time Injection:** A sophisticated `nuxt.config.ts` implementation using `node:vm` to fetch, sanitize, and inject remote data into the public runtime config at build time.
* **State-Aware Navigation:** Improved hydration logic that coordinates between asynchronous section loading and client-side anchor scrolling to ensure pixel-perfect landing on hash links.
* **Consent-First Analytics:** A robust GTM implementation integrated directly into the app head, respecting `localStorage` privacy choices before execution.
* **Print-Engine Optimization:** Dedicated CSS layers designed specifically to ensure the dynamic Resume page renders perfectly for physical print and PDF generation.

## 🚀 Development

### Installation
```bash
# install dependencies
$ yarn install
```

### Local Workflow
```bash
# launch dev server via nuxi
$ yarn dev
```

### Build & Deployment
```bash
# production build
$ yarn build

# generate static project (SSG)
$ yarn generate

# preview production build
$ yarn start
```

---

## 📋 Engineering Standards
* **Performance:** Audited via Lighthouse for Core Web Vitals compliance.
* **Accessibility:** Semantic HTML structures and ARIA-aware interactive components.
* **Maintainability:** Modular SCSS and component-driven architecture for a "design-to-code" workflow.

> **"Automate the 'How' so I can obsess over the 'Beautiful'."**

---
