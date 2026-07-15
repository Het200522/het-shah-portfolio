import { motion } from 'framer-motion';
import { EDUCATION, CERTIFICATIONS } from '../constants/data';
import { Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="px-6 py-24 md:px-16">
      <div className="mx-auto max-w-6xl grid gap-16 lg:grid-cols-2">
        <div>
          <span className="font-mono text-xs tracking-[0.3em]" style={{ color: 'var(--color-cyan)' }}>
            EDUCATION
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Academics</h2>

          <div className="mt-10 space-y-6">
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={edu.school + edu.period}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-5"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-semibold">{edu.school}</h3>
                  <span className="font-mono text-xs" style={{ color: 'var(--color-muted)' }}>
                    {edu.period}
                  </span>
                </div>
                <p className="mt-1 text-sm" style={{ color: 'var(--color-muted)' }}>
                  {edu.degree}
                </p>
                {edu.detail && (
                  <p className="mt-0.5 text-sm" style={{ color: 'var(--color-cyan)' }}>
                    {edu.detail}
                  </p>
                )}
                {edu.meta && (
                  <p className="mt-2 font-mono text-xs" style={{ color: 'var(--color-violet-bright)' }}>
                    {edu.meta}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div id="certifications">
          <span className="font-mono text-xs tracking-[0.3em]" style={{ color: 'var(--color-cyan)' }}>
            CERTIFICATIONS
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Credentials</h2>

          <div className="mt-10 space-y-4">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass flex items-center gap-4 rounded-2xl p-5"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: 'linear-gradient(135deg, var(--color-violet), var(--color-cyan))' }}
                >
                  <Award size={18} color="white" />
                </span>
                <div>
                  <h3 className="font-display font-medium">{cert.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
                    {cert.issuer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
