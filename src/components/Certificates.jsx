import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BadgeCheck, X, ZoomIn } from 'lucide-react';
import { CERTIFICATIONS } from '../constants/data';

export default function Certificates() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === 'Escape' && setActive(null);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <section id="certificates" className="px-6 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <span className="font-mono text-xs tracking-[0.3em]" style={{ color: 'var(--color-cyan)' }}>
          CERTIFICATES
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Verified credentials
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
          Courses, workshops, and simulations I&apos;ve completed. Click any card to view the full certificate.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.button
              key={cert.title}
              type="button"
              onClick={() => setActive(cert)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass group flex flex-col overflow-hidden rounded-2xl text-left transition-colors hover:border-white/20"
            >
              <div className="relative h-44 w-full overflow-hidden bg-black/40">
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className="absolute right-2.5 top-2.5 flex items-center gap-1 rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-wide backdrop-blur"
                  style={{ borderColor: 'var(--color-border)', color: 'var(--color-signal)', background: 'rgba(10,13,20,0.6)' }}
                >
                  <BadgeCheck size={11} /> Verified
                </span>
                <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/30 group-hover:opacity-100">
                  <ZoomIn size={20} color="white" />
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-1 px-5 py-4">
                <h3 className="font-display text-base font-semibold leading-snug">{cert.title}</h3>
                <p className="text-sm font-medium" style={{ color: 'var(--color-cyan)' }}>
                  {cert.issuer}
                </p>
                {cert.date && (
                  <p className="mt-1 font-mono text-[11px]" style={{ color: 'var(--color-muted)' }}>
                    {cert.date}
                  </p>
                )}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            style={{ background: 'rgba(6,7,9,0.92)' }}
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setActive(null)}
              className="absolute right-6 top-6 rounded-full border p-2 transition-colors hover:border-white/30"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <X size={18} />
            </button>

            <motion.figure
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="m-0 flex max-h-[88vh] max-w-[92vw] flex-col items-center gap-4 sm:max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={active.image}
                alt={`${active.title} certificate`}
                className="max-h-[76vh] rounded-xl border bg-white"
                style={{ borderColor: 'var(--color-border)' }}
              />
              <figcaption className="text-center text-sm" style={{ color: 'var(--color-muted)' }}>
                <span style={{ color: 'var(--color-text)' }} className="font-medium">
                  {active.title}
                </span>
                {' · '}
                {active.issuer}
                {active.date ? ` · ${active.date}` : ''}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
