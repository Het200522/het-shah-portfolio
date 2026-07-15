import { useMemo } from 'react';
import { motion } from 'framer-motion';

/** Ambient floating particles — purely decorative, respects reduced motion via CSS. */
export default function ParticleField({ count = 28 }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 12 + 10,
        delay: Math.random() * 6,
        color: i % 2 === 0 ? 'var(--color-violet-bright)' : 'var(--color-cyan)',
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            background: p.color,
            opacity: 0.5,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.15, 0.6, 0.15],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
