import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import { PROJECTS } from '../constants/data';

export default function Projects() {
  const filters = useMemo(() => {
    const set = new Set(['All']);
    PROJECTS.forEach((p) => p.tech.forEach((t) => set.add(t)));
    return Array.from(set).slice(0, 8);
  }, []);
  const [active, setActive] = useState('All');

  const visible = active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.tech.includes(active));

  return (
    <section id="projects" className="px-6 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <span className="font-mono text-xs tracking-[0.3em]" style={{ color: 'var(--color-cyan)' }}>
          PROJECTS
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Featured work
        </h2>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="rounded-full border px-3.5 py-1.5 text-xs font-mono transition-colors"
              style={{
                borderColor: active === f ? 'var(--color-cyan)' : 'var(--color-border)',
                color: active === f ? 'var(--color-cyan)' : 'var(--color-muted)',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass flex flex-col rounded-2xl p-6"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="rounded-full border px-2.5 py-0.5 font-mono text-[10px] tracking-wide"
                    style={{ borderColor: 'var(--color-border)', color: 'var(--color-signal)' }}
                  >
                    {project.tag}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-xl font-semibold">{project.title}</h3>
                <p className="mt-1 text-sm font-medium" style={{ color: 'var(--color-cyan)' }}>
                  {project.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  {project.description}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm" style={{ color: 'var(--color-muted)' }}>
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: 'var(--color-violet-bright)' }} />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="rounded-full border px-2.5 py-1 text-[11px] font-mono" style={{ borderColor: 'var(--color-border)', color: 'var(--color-muted)' }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors hover:border-white/30"
                      style={{ borderColor: 'var(--color-border)' }}
                    >
                      <Github size={13} /> Code
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium text-white"
                      style={{ background: 'linear-gradient(90deg, var(--color-violet), var(--color-cyan))' }}
                    >
                      <ExternalLink size={13} /> Live Demo
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
