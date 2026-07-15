import { motion } from 'framer-motion';
import { SKILLS } from '../constants/data';

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <span className="font-mono text-xs tracking-[0.3em]" style={{ color: 'var(--color-cyan)' }}>
          SKILLS
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          What I build with
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="font-display text-sm font-semibold tracking-wide" style={{ color: 'var(--color-violet-bright)' }}>
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border px-3 py-1 text-xs font-mono"
                    style={{ borderColor: 'var(--color-border)', color: 'var(--color-muted)' }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
