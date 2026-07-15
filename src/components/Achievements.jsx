import { motion } from 'framer-motion';
import { Trophy, Shield, Leaf } from 'lucide-react';
import { ACHIEVEMENTS } from '../constants/data';

const ICONS = { trophy: Trophy, shield: Shield, leaf: Leaf };

export default function Achievements() {
  return (
    <section id="achievements" className="px-6 py-24 md:px-16">
      <div className="mx-auto max-w-4xl">
        <span className="font-mono text-xs tracking-[0.3em]" style={{ color: 'var(--color-cyan)' }}>
          ACHIEVEMENTS
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Milestones
        </h2>

        <div className="relative mt-12 ml-3 border-l pl-8" style={{ borderColor: 'var(--color-border)' }}>
          {ACHIEVEMENTS.map((item, i) => {
            const Icon = ICONS[item.icon] ?? Trophy;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative mb-10 last:mb-0"
              >
                <span
                  className="absolute -left-[42px] flex h-8 w-8 items-center justify-center rounded-full"
                  style={{ background: 'linear-gradient(135deg, var(--color-violet), var(--color-cyan))' }}
                >
                  <Icon size={15} color="white" />
                </span>
                <span className="font-mono text-xs" style={{ color: 'var(--color-muted)' }}>
                  {item.year}
                </span>
                <h3 className="mt-1 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
