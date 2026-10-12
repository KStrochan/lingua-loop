import { formatTime, type Group } from "@/lib/learning";

export function GroupList({ items }: { items: Group[] }) {
  return (
    <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
      {items.map((g) => (
        <li key={g.id} className="tile grid gap-4 border-2 border-border bg-surface p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-display text-xl font-bold">
                {g.language} {g.level}
              </p>
              <p className="text-sm text-muted">with {g.teacher}</p>
            </div>
            <span className={`rounded-full px-3 py-1 text-xs font-bold ${g.seatsLeft <= 2 ? "bg-coral" : "bg-lime"}`}>
              {g.seatsLeft} {g.seatsLeft === 1 ? "seat" : "seats"} left
            </span>
          </div>
          <dl className="grid grid-cols-3 gap-2 text-sm">
            <div>
              <dt className="text-muted">Days</dt>
              <dd className="font-semibold">{g.days}</dd>
            </div>
            <div>
              <dt className="text-muted">Time (UTC)</dt>
              <dd className="font-semibold tabular-nums">{formatTime(g.startMinutes)}</dd>
            </div>
            <div>
              <dt className="text-muted">Starts</dt>
              <dd className="font-semibold">{g.starts}</dd>
            </div>
          </dl>
        </li>
      ))}
    </ul>
  );
}
