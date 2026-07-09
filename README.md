# Studio Forma — Design Agency Website

A classic single-page business website, built exactly to the standard
brief: Navbar, Hero, About, Services, Contact, Footer — fully responsive
and animated with Framer Motion, no extra app-style complexity.

## Sections
- **Navbar** — sticky, transparent-to-solid on scroll, animated mobile menu
- **Hero** — animated headline entrance, dual CTAs, quick stats row
- **About** — studio story with image, split layout
- **Services** — 4 animated service cards, staggered reveal on scroll
- **Contact** — validated form (name/email/message) with a real success
  state, plus studio contact info
- **Footer** — nav links, contact info, copyright

## Setup
```bash
npm install
npm run dev
```
Open the local URL shown (usually http://localhost:5173).

## Deploy to Vercel
1. Push this folder to a GitHub repo
2. vercel.com → New Project → Import the repo (Vite auto-detected)
3. Deploy

Or via CLI:
```bash
npm install -g vercel
vercel
```

## Tech stack
- React 18 + Vite
- Framer Motion (scroll reveals, mobile menu, form transitions)
- Tailwind CSS
- lucide-react (icons)

## Folder structure
```
src/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Services.jsx
    Contact.jsx
    Footer.jsx
    Reveal.jsx       reusable scroll-reveal wrapper (up/left/right)
  App.jsx
  main.jsx
```

## Customizing
- Colors & fonts: `tailwind.config.js` (canvas/ink/cobalt/lime tokens)
- Copy: edit directly inside each component in `src/components/`
- Services list: `SERVICES` array in `Services.jsx`
- Stats row: the array in `Hero.jsx`
