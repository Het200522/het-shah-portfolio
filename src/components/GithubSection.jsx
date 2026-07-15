import { motion } from 'framer-motion';
import { Star, GitFork } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import { useGithubRepos } from '../hooks/useGithubRepos';
import { PROFILE } from '../constants/data';
import { formatDate } from '../utils/helpers';

export default function GithubSection() {
  const { repos, status } = useGithubRepos(PROFILE.githubUsername, 6);

  return (
    <section id="github" className="px-6 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs tracking-[0.3em]" style={{ color: 'var(--color-cyan)' }}>
              GITHUB
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Latest on GitHub
            </h2>
          </div>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <Github size={15} /> @{PROFILE.githubUsername}
          </a>
        </div>

        {status === 'loading' && (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="glass h-40 animate-pulse rounded-2xl" />
            ))}
          </div>
        )}

        {status === 'error' && (
          <p className="mt-10 text-sm" style={{ color: 'var(--color-muted)' }}>
            Couldn't load live repositories right now — visit the profile directly on{' '}
            <a href={PROFILE.github} className="underline" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            .
          </p>
        )}

        {status === 'success' && (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {repos.length === 0 && (
              <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
                No public repositories to show yet.
              </p>
            )}
            {repos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="glass flex flex-col rounded-2xl p-5"
              >
                <h3 className="font-display font-semibold">{repo.name}</h3>
                <p className="mt-2 flex-1 text-sm" style={{ color: 'var(--color-muted)' }}>
                  {repo.description || 'No description provided.'}
                </p>
                <div className="mt-4 flex items-center justify-between font-mono text-xs" style={{ color: 'var(--color-muted)' }}>
                  <div className="flex items-center gap-3">
                    {repo.language && (
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full" style={{ background: 'var(--color-cyan)' }} />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star size={12} /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={12} /> {repo.forks_count}
                    </span>
                  </div>
                  <span>{formatDate(repo.updated_at)}</span>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
