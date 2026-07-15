import { useEffect, useState } from 'react';

/** Fetches a user's public repos from the GitHub API, sorted by last update. */
export function useGithubRepos(username, limit = 6) {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | success | error

  useEffect(() => {
    let cancelled = false;

    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=${limit}`
        );
        if (!res.ok) throw new Error('GitHub API request failed');
        const data = await res.json();
        if (!cancelled) {
          setRepos(data.filter((r) => !r.fork));
          setStatus('success');
        }
      } catch {
        if (!cancelled) setStatus('error');
      }
    }

    fetchRepos();
    return () => {
      cancelled = true;
    };
  }, [username, limit]);

  return { repos, status };
}
