# Het Shah — Portfolio

A dark, glassmorphic portfolio built with React 19, Vite, Tailwind CSS, and Framer Motion.

## Signature design idea

The recurring visual motif is a **scan beam** — a thin cyan/violet line that sweeps across
section dividers and the hero avatar ring. It's a nod to the OCR/scanning pipeline in the
MediScan project, so the site's one signature element is drawn from your own work rather
than a generic decoration.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

## Before you deploy — two things need real keys

### 1. Contact form (EmailJS)
The contact form is wired to EmailJS but needs your own credentials:

1. Create a free account at emailjs.com.
2. Create an Email Service and an Email Template (with `from_name`, `from_email`, `message` variables).
3. Open `src/components/Contact.jsx` and replace:
   ```js
   const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
   const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
   ```
   with the values from your EmailJS dashboard.

Until you do this, the form shows a friendly fallback message pointing visitors to your email.

### 2. GitHub username
The GitHub section pulls live repos for `Het200522` via the public GitHub API
(`src/hooks/useGithubRepos.js` + `src/constants/data.js` → `githubUsername`). Update that
constant if your username ever changes. No API key is required for public repo data, but
GitHub's unauthenticated rate limit is 60 requests/hour per IP — fine for a portfolio.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to vercel.com/new, import the repo.
3. Framework preset: Vite (auto-detected). Build command `npm run build`, output dir `dist`.
4. Deploy — no environment variables are required unless you want to move the EmailJS keys
   into `import.meta.env.VITE_*` variables instead of hardcoding them.

## Deploy to Netlify

1. New site from Git → pick the repo.
2. Build command: `npm run build`. Publish directory: `dist`.

## Structure

```
src/
  components/   # section + UI components
  constants/    # resume content lives here — data.js
  context/      # ThemeContext (light/dark)
  hooks/        # useScrollProgress, useActiveSection, useGithubRepos
  utils/        # small helpers
public/
  Het_Shah_Resume.pdf   # served for the Download Resume buttons
```

## Updating your content

Everything text-based (summary, skills, projects, achievements, education, certifications)
lives in one place: `src/constants/data.js`. Edit that file and every section updates.

To swap the resume file, replace `public/Het_Shah_Resume.pdf` with your latest PDF, keeping
the same filename (or update `PROFILE.resumeFile` in `data.js` if you rename it).
