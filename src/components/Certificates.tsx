"use client";

/**
 * Certificates section — Next.js + Tailwind CSS
 * ------------------------------------------------------------
 * Drop this file in as  components/Certificates.tsx  (or
 * app/components/Certificates.tsx, wherever your other section
 * components live) then render <Certificates /> on your page,
 * e.g. right after your Projects section.
 *
 * Assets: copy the 5 images into  public/certificates/  — the
 * paths below already point there (Next serves anything under
 * /public/ at the site root, so public/certificates/x.png -> /certificates/x.png).
 *
 * Styling assumes a dark theme (bg ~ #0a0d14, like your site's
 * theme-color meta tag), with a cyan-400 accent — see the note
 * near the bottom of the imports for how to change it.
 * ------------------------------------------------------------
 */

import { useEffect, useState } from "react";

type Cert = {
  name: string;
  issuer: string;
  date?: string;
  src: string;
};

const CERTS: Cert[] = [
  {
    name: "Technology Job Simulation",
    issuer: "Deloitte (via Forage)",
    date: "Jul 2026",
    src: "/certificates/cert-deloitte.png",
  },
  {
    name: "AI Tools & ChatGPT Workshop",
    issuer: "be10x",
    date: "May 2026",
    src: "/certificates/cert-be10x.png",
  },
  {
    name: "Agile Scrum Master",
    issuer: "Simplilearn SkillUp",
    date: "Aug 2026",
    src: "/certificates/cert-simplilearn-scrum.jpg",
  },
  {
    name: "The Hour of AI",
    issuer: "Code.org / CSforAll",
    src: "/certificates/cert-codeorg-hourofai.jpg",
  },
  {
    name: "Green Skills & Artificial Intelligence",
    issuer: "Edunet Foundation × AICTE × Shell",
    date: "Jul 2025",
    src: "/certificates/cert-edunet-greenskills.jpg",
  },
];

// Accent color: Tailwind's compiler needs literal class names (not interpolated
// strings) to detect and generate them, so the classes below are hardcoded to
// "cyan-400". To change the accent, find & replace "cyan-400" with e.g.
// "emerald-400", "amber-400", or "violet-400" everywhere in this file.

export default function Certificates() {
  const [active, setActive] = useState<Cert | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="certificates" className="bg-[#0a0d14] px-6 py-20 text-slate-100">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
          Verified credentials
        </p>
        <h2 className="mb-3 text-3xl font-bold sm:text-4xl">Certificates</h2>
        <p className="mb-10 max-w-xl text-sm leading-relaxed text-slate-400">
          Courses, workshops, and simulations I&apos;ve completed. Click any card to view the
          full certificate.
        </p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-3">
          {CERTS.map((cert) => (
            <button
              key={cert.src}
              type="button"
              onClick={() => setActive(cert)}
              className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] text-left transition
                hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-400/10
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cert.src}
                  alt={`${cert.name} certificate`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute right-2 top-2 rounded-full border border-cyan-400/60 bg-black/60 px-2 py-0.5 text-[10px] uppercase tracking-wide text-cyan-400 backdrop-blur">
                  Verified
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-1 px-4 py-3">
                <span className="text-sm font-semibold leading-snug">{cert.name}</span>
                <span className="text-xs text-cyan-400">{cert.issuer}</span>
                {cert.date && <span className="text-[11px] text-slate-500">{cert.date}</span>}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setActive(null)}
            className="absolute right-5 top-5 text-3xl leading-none text-slate-200 hover:text-white"
          >
            &times;
          </button>
          <figure
            className="flex max-h-[88vh] max-w-[92vw] flex-col items-center gap-3 sm:max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.src}
              alt={`${active.name} certificate`}
              className="max-h-[76vh] rounded-lg border border-white/10 bg-white"
            />
            <figcaption className="text-center text-sm text-slate-400">
              {[active.name, active.issuer, active.date].filter(Boolean).join(" · ")}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
