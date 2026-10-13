/** The school's loop: a figure of eight with a bright stroke running around it for ever. */
export function Loop({ className = "" }: { className?: string }) {
  const d = "M60 40 C 60 10, 100 10, 100 40 C 100 70, 140 70, 140 40 C 140 10, 100 10, 100 40 C 100 70, 60 70, 60 40 Z";
  return (
    <svg viewBox="40 0 120 80" className={className} aria-hidden="true">
      <path d={d} fill="none" stroke="rgb(255 255 255 / 0.15)" strokeWidth="7" strokeLinecap="round" />
      <path d={d} pathLength={1} className="loop-run" fill="none" stroke="#C8F560" strokeWidth="7" strokeLinecap="round" />
    </svg>
  );
}
