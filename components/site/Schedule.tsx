"use client";

import { useState } from "react";
import { GroupList } from "@/components/site/GroupList";
import { filterGroups, groups, type Language, type Level, type PartOfDay } from "@/lib/learning";

const LANGS: Language[] = ["English", "Spanish", "German"];
const LEVELS: Level[] = ["A1", "A2", "B1", "B2", "C1"];
const PARTS: { value: PartOfDay; label: string }[] = [
  { value: "morning", label: "Morning" },
  { value: "afternoon", label: "Afternoon" },
  { value: "evening", label: "Evening" },
];

function Chips<T extends string>({ label, options, value, onChange }: { label: string; options: { value: T; label: string }[]; value: T | undefined; onChange: (v: T | undefined) => void }) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-sm font-bold">{label}</span>
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          aria-pressed={value === o.value}
          onClick={() => onChange(value === o.value ? undefined : o.value)}
          className="rounded-full border-2 border-fg px-4 py-1.5 text-sm font-semibold aria-pressed:bg-fg aria-pressed:text-white"
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function Schedule({ initialLevel }: { initialLevel?: Level }) {
  const [language, setLanguage] = useState<Language | undefined>();
  const [level, setLevel] = useState<Level | undefined>(initialLevel);
  const [part, setPart] = useState<PartOfDay | undefined>();
  const shown = filterGroups(groups, { language, level, part });

  return (
    <div className="grid gap-8">
      <div className="tile grid gap-4 bg-surface">
        <Chips label="Language" options={LANGS.map((l) => ({ value: l, label: l }))} value={language} onChange={setLanguage} />
        <Chips label="Level" options={LEVELS.map((l) => ({ value: l, label: l }))} value={level} onChange={setLevel} />
        <Chips label="Time" options={PARTS} value={part} onChange={setPart} />
      </div>
      <p className="text-sm text-muted" aria-live="polite">
        {shown.length} {shown.length === 1 ? "group" : "groups"} found
      </p>
      {shown.length ? (
        <GroupList items={shown} />
      ) : (
        <div className="tile grid justify-items-start gap-3 bg-coral">
          <p className="font-display text-xl font-bold">No group matches all three filters.</p>
          <button type="button" className="btn-dark" onClick={() => { setLanguage(undefined); setLevel(undefined); setPart(undefined); }}>
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
