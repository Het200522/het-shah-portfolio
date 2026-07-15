import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
          style={{ backgroundColor: 'var(--color-bg)' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center gap-4">
            <span className="font-mono text-xs tracking-[0.3em] text-muted" style={{ color: 'var(--color-muted)' }}>
              INITIALIZING
            </span>
            <div className="relative h-[2px] w-40 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="absolute top-0 left-0 h-full w-1/3 rounded-full"
                style={{ background: 'linear-gradient(90deg, var(--color-violet-bright), var(--color-cyan))' }}
                animate={{ x: ['-100%', '220%'] }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <span className="font-display text-lg tracking-wide text-gradient">Het Shah</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
