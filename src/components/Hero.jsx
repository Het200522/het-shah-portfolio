import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { PROFILE } from '../constants/data';
import { scrollToId } from '../utils/helpers';
import ParticleField from './ParticleField';
import profileImg from '../assets/Het Photo.png';

export default function Hero() {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: PROFILE.roles,
      typeSpeed: 45,
      backSpeed: 25,
      backDelay: 1400,
      loop: true,
      smartBackspace: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16 md:px-16"
    >
      <div className="grid-noise absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
        style={{ background: 'radial-gradient(circle, var(--color-violet), transparent 70%)' }}
        aria-hidden="true"
      />
      <ParticleField />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs" style={{ borderColor: 'var(--color-border)', color: 'var(--color-muted)' }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'var(--color-signal)' }} />
            {PROFILE.location}
          </div>

          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-gradient">{PROFILE.name}</span>
          </h1>

          <div className="mt-4 font-mono text-lg sm:text-xl" style={{ color: 'var(--color-cyan)' }}>
            <span ref={typedEl} />
            <span className="animate-pulse">|</span>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg" style={{ color: 'var(--color-muted)' }}>
            {PROFILE.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => scrollToId('#projects')}
              className="rounded-full px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
              style={{ background: 'linear-gradient(90deg, var(--color-violet), var(--color-cyan))' }}
            >
              View Projects
            </button>
            <a
              href={PROFILE.resumeFile}
              download
              className="flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors hover:border-white/30"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <Download size={15} /> Download Resume
            </a>
            <button
              onClick={() => scrollToId('#contact')}
              className="flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors hover:border-white/30"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <Mail size={15} /> Contact Me
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80"
        >
          <div
            className="absolute inset-0 animate-spin rounded-full opacity-40 blur-xl"
            style={{
              background: 'conic-gradient(from 0deg, var(--color-violet), var(--color-cyan), var(--color-violet))',
              animationDuration: '8s',
            }}
          />
          <div className="glass relative flex h-[92%] w-[92%] items-center justify-center overflow-hidden rounded-full">
            <img src={profileImg} alt="Het Shah" className="h-full w-full object-cover" />
          </div>
          {/* Scanning ring — signature OCR/scan motif */}
          <div
            className="absolute inset-0 rounded-full border-2 opacity-70"
            style={{ borderColor: 'transparent', borderTopColor: 'var(--color-cyan)', animation: 'spin 3s linear infinite' }}
          />
        </motion.div>
      </div>

      <button
        onClick={() => scrollToId('#about')}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce"
        style={{ color: 'var(--color-muted)' }}
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
}
