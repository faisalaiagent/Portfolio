# 🚀 Shah Faisal — AI Engineer & Full Stack Developer Portfolio

A world-class, production-ready portfolio built with **Next.js 15**, **TypeScript**, **Framer Motion**, and **Tailwind CSS**.

---

## ✅ Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + Custom CSS Variables |
| Animations | Framer Motion |
| UI | Custom Glass Design System |
| Forms | React Hook Form + Zod |
| Deployment | Vercel-optimized |

---

## ⚡ Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/faisalaiagent/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Copy environment file
cp .env.example .env.local

# 4. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout + SEO metadata
│   │   ├── page.tsx           # Main page
│   │   ├── robots.ts          # SEO robots config
│   │   └── sitemap.ts         # Auto sitemap
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx     # Floating navbar with mobile menu
│   │   │   └── Footer.tsx     # Footer
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── TimelineSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── shared/
│   │       ├── CustomCursor.tsx
│   │       ├── LoadingScreen.tsx
│   │       └── ScrollProgress.tsx
│   ├── data/
│   │   └── index.ts           # ← All portfolio content lives here
│   ├── lib/
│   │   └── utils.ts
│   └── styles/
│       └── globals.css
├── public/                    # Static assets
├── .env.example               # Environment variables template
├── next.config.ts
└── package.json
```

---

## 🎨 Customization

All personal content is centralized in **`src/data/index.ts`**:

```ts
export const siteConfig = {
  name: "Your Name",
  email: "you@email.com",
  github: "https://github.com/yourhandle",
  // ...
};
```

Edit that one file to update your name, bio, links, projects, skills, and testimonials.

---

## 🌐 Deployment (Vercel)

```bash
# Option 1: Vercel CLI
npm install -g vercel
vercel

# Option 2: Connect GitHub repo to vercel.com for auto-deploy on push
```

Add environment variables in your Vercel dashboard (see `.env.example`).

---

## 🔧 Environment Variables

```env
NEXT_PUBLIC_SITE_URL=https://yourportfolio.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+923100000000
NEXT_PUBLIC_EMAIL=you@email.com
```

---

Built with ❤️ using Next.js 15 & Framer Motion
