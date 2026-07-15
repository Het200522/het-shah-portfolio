import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { NAV_LINKS, PROFILE } from '../constants/data';
import { useActiveSection } from '../hooks/useActiveSection';
import { useTheme } from '../context/ThemeContext';
import { scrollToId } from '../utils/helpers';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(NAV_LINKS.map((l) => l.href.replace('#', '')));
  const { theme, toggleTheme } = useTheme();

  const handleNav = (href) => {
    setOpen(false);
    scrollToId(href);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="glass mx-auto mt-3 flex w-[94%] max-w-6xl items-center justify-between rounded-2xl px-4 py-3 md:mt-4 md:px-6">
        <button
          onClick={() => handleNav('#hero')}
          className="font-display text-lg font-semibold tracking-tight"
        >
          Het<span className="text-gradient">.</span>
        </button>

        {/* Status pill — terminal-flavored, matches the AI/cyber signature */}
        <div className="hidden items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] tracking-wide md:flex" style={{ borderColor: 'var(--color-border)' }}>
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'var(--color-signal)', boxShadow: '0 0 6px var(--color-signal)' }} />
          <span style={{ color: 'var(--color-muted)' }}>OPEN TO WORK</span>
        </div>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href.replace('#', '');
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                    isActive ? 'text-gradient font-medium' : 'hover:text-white'
                  }`}
                  style={{ color: isActive ? undefined : 'var(--color-muted)' }}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle light and dark theme"
            className="rounded-full border p-2 transition-colors hover:border-white/20"
            style={{ borderColor: 'var(--color-border)' }}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href={PROFILE.resumeFile}
            download
            className="hidden items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium text-white sm:flex"
            style={{ background: 'linear-gradient(90deg, var(--color-violet), var(--color-cyan))' }}
          >
            <Download size={14} /> Resume
          </a>
          <button
            className="rounded-full border p-2 lg:hidden"
            style={{ borderColor: 'var(--color-border)' }}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="glass mx-auto mt-2 flex w-[94%] max-w-6xl flex-col gap-1 rounded-2xl p-3 lg:hidden"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="rounded-xl px-3 py-2 text-left text-sm"
                style={{ color: 'var(--color-muted)' }}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
