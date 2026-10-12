import type { Metadata } from "next";
import { Schedule } from "@/components/site/Schedule";
import { site } from "@/content/site";
import type { Level } from "@/lib/learning";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(site, {
  title: "Schedule",
  description: "Upcoming English, Spanish and German groups, filtered by level and time of day.",
  path: "/schedule",
});

const LEVELS: Level[] = ["A1", "A2", "B1", "B2", "C1"];
type Props = { searchParams: Promise<{ level?: string }> };

export default async function SchedulePage({ searchParams }: Props) {
  const { level } = await searchParams;
  const initialLevel = LEVELS.includes(level as Level) ? (level as Level) : undefined;
  return (
    <main id="main" className="px-3 sm:px-5">
      <div className="mx-auto max-w-7xl py-14">
        <h1 className="font-display text-5xl font-bold sm:text-6xl">Schedule</h1>
        <p className="mb-10 mt-4 max-w-xl text-lg text-muted">
          New groups start every month. Pick filters to narrow it down; tap a chip again to clear it.
        </p>
        <Schedule initialLevel={initialLevel} />
      </div>
    </main>
  );
}
