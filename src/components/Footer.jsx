import { Mail, ArrowUp } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { PROFILE } from '../constants/data';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative px-6 pb-10 pt-16 md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 border-t pt-10 text-center" style={{ borderColor: 'var(--color-border)' }}>
        <div className="flex gap-4">
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-opacity hover:opacity-70">
            <Github size={18} />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-opacity hover:opacity-70">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="transition-opacity hover:opacity-70">
            <Mail size={18} />
          </a>
        </div>

        <p className="font-mono text-xs" style={{ color: 'var(--color-muted)' }}>
          © {year} {PROFILE.name}. Built with React, Vite &amp; Tailwind CSS.
        </p>

        <button
          onClick={scrollTop}
          aria-label="Back to top"
          className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:border-white/30"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
