import { useScrollProgress } from '../hooks/useScrollProgress';

export default function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[60] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-violet to-cyan transition-[width] duration-100"
        style={{ width: `${progress}%`, background: 'linear-gradient(90deg, var(--color-violet), var(--color-cyan))' }}
      />
    </div>
  );
}
