import type { CSSProperties } from "react";

const CAPTIONS = [
  { who: "Lucía", text: "¿Qué hiciste el fin de semana?" },
  { who: "Tom", text: "Fui a la playa con mis amigos." },
  { who: "Lucía", text: "¡Qué bien! ¿Y qué tal el agua?" },
];

/**
 * Overlay for the video-call photo: a live badge, a speaking meter and captions that come and go
 * in turn, like a lesson in progress.
 */
export function LiveLesson() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex flex-col justify-between p-4">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 rounded-full bg-fg/80 px-3 py-1.5 text-sm font-bold text-white backdrop-blur">
          <span className="pulse-dot h-2 w-2 rounded-full bg-coral" />
          Live now: Spanish B1
        </span>
        <span className="flex h-8 items-end gap-0.5 rounded-full bg-fg/80 px-3 py-1.5 backdrop-blur">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className="eq-bar w-1 rounded-full bg-lime" style={{ "--d": `${i * -0.18}s` } as CSSProperties} />
          ))}
        </span>
      </div>
      <div className="relative h-20">
        {CAPTIONS.map((c, i) => (
          <p
            key={c.text}
            className="caption absolute bottom-0 left-0 max-w-[85%] rounded-2xl rounded-bl-sm bg-white px-4 py-2.5 text-fg shadow-lg"
            style={{ "--d": `${i * 3}s` } as CSSProperties}
          >
            <span className="block text-xs font-bold text-[var(--violet)]">{c.who}</span>
            <span className="text-sm font-semibold">{c.text}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
