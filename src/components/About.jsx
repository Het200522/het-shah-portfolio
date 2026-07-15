import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { ABOUT, PROFILE } from '../constants/data';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs tracking-[0.3em]" style={{ color: 'var(--color-cyan)' }}>
            ABOUT
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            The short version
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg leading-relaxed"
            style={{ color: 'var(--color-muted)' }}
          >
            {ABOUT.description} I care most about the part where a model's output has to
            become something a real person can trust and act on — whether that's a
            disease-risk score or an incident response suggestion.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass flex flex-col gap-4 rounded-2xl p-6"
          >
            <div className="flex items-start gap-3">
              <GraduationCap size={20} style={{ color: 'var(--color-violet-bright)' }} />
              <div>
                <p className="font-medium">{ABOUT.degree}</p>
                <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
                  {ABOUT.specialization}
                </p>
                <p className="mt-1 font-mono text-xs" style={{ color: 'var(--color-muted)' }}>
                  {ABOUT.university} · {ABOUT.graduation} · CGPA {ABOUT.cgpa}
                </p>
              </div>
            </div>
            <div className="h-px w-full" style={{ background: 'var(--color-border)' }} />
            <div className="flex items-start gap-3">
              <MapPin size={20} style={{ color: 'var(--color-cyan)' }} />
              <div>
                <p className="font-medium">{PROFILE.location}</p>
                <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
                  Available for remote & on-site roles
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
