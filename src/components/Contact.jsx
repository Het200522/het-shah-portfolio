import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { PROFILE } from '../constants/data';

// Set these once you create an EmailJS account (emailjs.com) — free tier is enough.
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [state, setState] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState('sending');

    try {
      if (EMAILJS_SERVICE_ID.startsWith('YOUR_')) {
        // EmailJS isn't configured yet — surface that clearly instead of failing silently.
        throw new Error('EmailJS is not configured');
      }
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        EMAILJS_PUBLIC_KEY
      );
      setState('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setState('error');
    }
  };

  return (
    <section id="contact" className="px-6 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <span className="font-mono text-xs tracking-[0.3em]" style={{ color: 'var(--color-cyan)' }}>
          CONTACT
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Let's build something
        </h2>
        <p className="mt-3 max-w-xl text-base" style={{ color: 'var(--color-muted)' }}>
          Open to internships, junior AI/ML roles, and interesting freelance builds.
          The fastest way to reach me is email.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="glass flex flex-col gap-5 rounded-2xl p-6"
          >
            <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-3 text-sm">
              <Mail size={18} style={{ color: 'var(--color-cyan)' }} />
              {PROFILE.email}
            </a>
            <div className="flex items-center gap-3 text-sm">
              <MapPin size={18} style={{ color: 'var(--color-violet-bright)' }} />
              {PROFILE.location}
            </div>
            <div className="h-px w-full" style={{ background: 'var(--color-border)' }} />
            <div className="flex gap-3">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:border-white/30"
                style={{ borderColor: 'var(--color-border)' }}
                aria-label="GitHub profile"
              >
                <Github size={17} />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:border-white/30"
                style={{ borderColor: 'var(--color-border)' }}
                aria-label="LinkedIn profile"
              >
                <Linkedin size={17} />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="glass flex flex-col gap-4 rounded-2xl p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="rounded-xl border bg-transparent px-4 py-2.5 text-sm outline-none focus:border-cyan-400"
                style={{ borderColor: 'var(--color-border)' }}
              />
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                className="rounded-xl border bg-transparent px-4 py-2.5 text-sm outline-none focus:border-cyan-400"
                style={{ borderColor: 'var(--color-border)' }}
              />
            </div>
            <textarea
              required
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What are you building?"
              rows={5}
              className="resize-none rounded-xl border bg-transparent px-4 py-2.5 text-sm outline-none focus:border-cyan-400"
              style={{ borderColor: 'var(--color-border)' }}
            />
            <button
              type="submit"
              disabled={state === 'sending'}
              className="flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white disabled:opacity-60"
              style={{ background: 'linear-gradient(90deg, var(--color-violet), var(--color-cyan))' }}
            >
              {state === 'sending' ? (
                <>
                  <Loader2 size={15} className="animate-spin" /> Sending…
                </>
              ) : (
                <>
                  <Send size={15} /> Send Message
                </>
              )}
            </button>

            {state === 'success' && (
              <p className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-signal)' }}>
                <CheckCircle2 size={16} /> Message sent — thanks for reaching out!
              </p>
            )}
            {state === 'error' && (
              <p className="flex items-center gap-2 text-sm text-amber-400">
                <AlertCircle size={16} /> Contact form isn't fully wired up yet — email me directly at{' '}
                {PROFILE.email}.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
