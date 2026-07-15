import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return; // skip on touch devices

    const handleMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
      }
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-[1] h-[400px] w-[400px] rounded-full opacity-[0.12] blur-[100px] will-change-transform hidden md:block"
      style={{ background: 'radial-gradient(circle, var(--color-violet-bright), var(--color-cyan) 70%, transparent 100%)' }}
      aria-hidden="true"
    />
  );
}
