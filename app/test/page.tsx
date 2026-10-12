import type { Metadata } from "next";
import { PlacementTest } from "@/components/site/PlacementTest";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(site, {
  title: "Free level test",
  description: "Ten questions, about four minutes. Find your English level and a group that matches it.",
  path: "/test",
});

export default function TestPage() {
  return (
    <main id="main" className="px-3 sm:px-5">
      <div className="mx-auto max-w-4xl py-14">
        <h1 className="font-display text-5xl font-bold sm:text-6xl">Free level test</h1>
        <p className="mb-10 mt-4 max-w-xl text-lg text-muted">
          Ten English grammar questions, from easy to tricky. Skip any you are not sure about; guessing only makes the
          result less useful.
        </p>
        <PlacementTest />
      </div>
    </main>
  );
}
