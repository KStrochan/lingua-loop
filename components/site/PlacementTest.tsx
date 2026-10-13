"use client";

import Link from "next/link";
import { useState } from "react";
import { submitLead } from "@/app/actions";
import { LeadForm } from "@/components/LeadForm";
import { GroupList } from "@/components/site/GroupList";
import { filterGroups, groups, levelFor, levelInfo, questions, score } from "@/lib/learning";

export function PlacementTest() {
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null));
  const [current, setCurrent] = useState(0);
  const [done, setDone] = useState(false);

  if (done) {
    const points = score(answers);
    const level = levelFor(points);
    const info = levelInfo[level];
    const matches = filterGroups(groups, { language: "English", level });
    const message = `Placement test result: ${level} (${points} of ${questions.length}). I would like to join an English ${level} group.`;
    return (
      <div className="grid gap-8">
        <div className="tile grid gap-4 bg-[var(--violet)] text-white md:p-10" aria-live="polite">
          <p className="text-white/80">
            You answered {points} of {questions.length} correctly
          </p>
          <p className="font-display text-6xl font-bold">
            {level} <span className="text-3xl">{info.name}</span>
          </p>
          <p className="max-w-xl text-lg text-white/85">{info.text}</p>
          <div className="flex flex-wrap gap-3">
            <Link href={`/schedule?level=${level}`} className="btn-lime">
              See all {level} groups
            </Link>
            <button type="button" className="rounded-full border-2 border-white px-5 py-2.5 font-bold" onClick={() => { setAnswers(questions.map(() => null)); setCurrent(0); setDone(false); }}>
              Take the test again
            </button>
          </div>
        </div>
        {matches.length ? (
          <section className="grid gap-4">
            <h2 className="font-display text-2xl font-bold">English groups at your level</h2>
            <GroupList items={matches} />
          </section>
        ) : null}
        <section className="tile grid gap-4 bg-surface md:p-10">
          <h2 className="font-display text-2xl font-bold">Book a free trial class</h2>
          <LeadForm action={submitLead} defaultMessage={message} submitLabel="Book my free class" />
        </section>
      </div>
    );
  }

  const q = questions[current]!;
  const chosen = answers[current];
  const last = current === questions.length - 1;

  return (
    <div className="tile grid gap-8 bg-surface md:p-10">
      <div className="grid gap-2">
        <p className="text-sm font-semibold text-muted">
          Question {current + 1} of {questions.length}
        </p>
        <div className="h-3 overflow-hidden rounded-full bg-bg" role="progressbar" aria-valuemin={0} aria-valuemax={questions.length} aria-valuenow={current + 1} aria-label="Test progress">
          <div className="h-full rounded-full bg-[var(--violet)] transition-[width] duration-500 ease-[cubic-bezier(0.34,1.4,0.64,1)]" style={{ width: `${((current + 1) / questions.length) * 100}%` }} />
        </div>
      </div>
      <fieldset className="grid gap-5">
        <legend className="mb-5 font-display text-3xl font-bold leading-snug">
          {q.prompt.split("___").map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 ? <span className="mx-1 inline-block min-w-16 border-b-4 border-[var(--violet)]" aria-label="blank">&nbsp;</span> : null}
            </span>
          ))}
        </legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {q.options.map((option, i) => (
            <label key={option} className="flex cursor-pointer items-center gap-3 rounded-2xl border-2 border-border px-5 py-4 font-semibold has-[:checked]:border-[var(--violet)] has-[:checked]:bg-[var(--violet)] has-[:checked]:text-white has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2">
              <input
                type="radio"
                name={`q${current}`}
                checked={chosen === i}
                onChange={() => setAnswers((a) => a.map((v, idx) => (idx === current ? i : v)))}
                className="sr-only"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button type="button" className="rounded-full px-5 py-2.5 font-bold disabled:opacity-40" onClick={() => setCurrent((c) => c - 1)} disabled={current === 0}>
          Back
        </button>
        <div className="flex gap-3">
          <button type="button" className="rounded-full border-2 border-fg px-5 py-2.5 font-bold" onClick={() => (last ? setDone(true) : setCurrent((c) => c + 1))}>
            {last ? "Finish anyway" : "Skip"}
          </button>
          <button type="button" className="btn-dark disabled:opacity-40" disabled={chosen === null} onClick={() => (last ? setDone(true) : setCurrent((c) => c + 1))}>
            {last ? "See my level" : "Next question"}
          </button>
        </div>
      </div>
    </div>
  );
}
