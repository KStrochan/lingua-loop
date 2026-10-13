import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Counter } from "@/components/anim/Counter";
import { LiveLesson } from "@/components/anim/LiveLesson";
import { Loop } from "@/components/anim/Loop";
import { PlayWhenVisible } from "@/components/anim/PlayWhenVisible";
import { Reveal } from "@/components/anim/Reveal";
import { submitLead } from "@/app/actions";
import { LeadForm } from "@/components/LeadForm";
import { courses, howItWorks, photos, teachers } from "@/content/school";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";
import { unsplash } from "@/lib/unsplash";

export const metadata: Metadata = buildMetadata(site, { path: "/" });

const initials = (name: string) => name.split(" ").map((p) => p[0]).join("");
const tint = ["bg-[var(--violet)] text-white", "bg-coral text-fg", "bg-lime text-fg"];

export default function HomePage() {
  return (
    <main id="main" className="px-3 sm:px-5">
      <section className="mx-auto mt-4 grid max-w-7xl gap-3 sm:mt-5 sm:gap-4 md:grid-cols-6 md:grid-rows-[auto_auto]">
        <div className="tile grid content-between gap-10 bg-[var(--violet)] text-white md:col-span-4 md:row-span-2 md:p-10">
          <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-6xl">
            Speak in your first lesson. Not in your third year.
          </h1>
          <div className="grid gap-6">
            <p className="max-w-xl text-lg text-white/85">
              Live online classes in English, Spanish and German. Groups of up to six, a teacher who knows your name,
              and twice as much speaking time as a classroom course.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/test" className="btn-lime">
                Find my level in 4 minutes
              </Link>
              <Link href="/schedule" className="rounded-full border-2 border-white px-5 py-2.5 font-bold text-white no-underline">
                See the schedule
              </Link>
            </div>
          </div>
        </div>
        <div className="tile relative min-h-56 bg-surface p-0 md:col-span-2">
          <Image
            src={unsplash(photos.videoCall, 1000)}
            alt="Person on a video call with a teacher on a laptop"
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            loading="eager"
            fetchPriority="high"
            className="object-cover"
          />
          <PlayWhenVisible delay={1500} className="absolute inset-0">
            <LiveLesson />
          </PlayWhenVisible>
        </div>
        <div className="tile grid content-between gap-6 bg-lime md:col-span-1">
          <p className="font-display text-5xl font-bold">
            <Counter value={6} duration={900} />
          </p>
          <span aria-hidden="true" className="flex gap-1">
            {Array.from({ length: 6 }, (_, i) => (
              <span key={i} className="seat h-3 w-3 rounded-full bg-fg" style={{ "--d": `${0.3 + i * 0.1}s` } as CSSProperties} />
            ))}
          </span>
          <p className="font-semibold">students at most in every group</p>
        </div>
        <div className="tile grid content-between gap-6 bg-coral md:col-span-1">
          <p className="font-display text-5xl font-bold">
            <Counter value={4.9} decimals={1} duration={1200} />
          </p>
          <span aria-hidden="true" className="flex gap-1">
            {Array.from({ length: 5 }, (_, i) => (
              <svg key={i} viewBox="0 0 24 24" className="seat h-4 w-4" style={{ "--d": `${0.4 + i * 0.1}s` } as CSSProperties}>
                <path d="M12 2l3 6.5 7 .8-5.2 4.8 1.5 7L12 17.6 5.7 21.1l1.5-7L2 9.3l7-.8z" fill="#1B1440" />
              </svg>
            ))}
          </span>
          <p className="font-semibold">average lesson rating this year</p>
        </div>
      </section>

      <section id="courses" className="mx-auto max-w-7xl scroll-mt-6 py-20">
        <h2 className="font-display text-4xl font-bold sm:text-5xl">Courses</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {courses.map((c, i) => (
            <Reveal as="article" delay={i * 0.12} key={c.language} className="tile grid content-between gap-8 border-2 border-border bg-surface transition-transform duration-300 hover:-translate-y-1">
              <div className="grid gap-3">
                <span aria-hidden="true" className="grow-on-seen h-3 w-16 rounded-full" style={{ background: c.flagColor, "--d": `${0.3 + i * 0.12}s` } as CSSProperties} />
                <h3 className="font-display text-3xl font-bold">{c.language}</h3>
                <p className="text-muted">{c.text}</p>
              </div>
              <dl className="grid grid-cols-2 gap-3 border-t-2 border-border pt-4 text-sm">
                <div>
                  <dt className="text-muted">Levels</dt>
                  <dd className="font-bold">{c.levels}</dd>
                </div>
                <div>
                  <dt className="text-muted">Price</dt>
                  <dd className="font-bold">{c.price}</dd>
                </div>
              </dl>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 md:grid-cols-[1fr_1.3fr]">
        <div className="tile relative min-h-72 bg-surface p-0">
          <Image
            src={unsplash(photos.friends, 1200)}
            alt="Group of friends talking and laughing around a table"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="tile relative overflow-hidden bg-fg text-white md:p-10">
          <PlayWhenVisible className="absolute -right-4 -top-2 w-36 opacity-90 sm:w-44">
            <Loop className="w-full" />
          </PlayWhenVisible>
          <h2 className="relative font-display text-3xl font-bold sm:text-4xl">How it works</h2>
          <ol className="mt-8 grid gap-6">
            {howItWorks.map((step, i) => (
              <Reveal as="li" delay={i * 0.15} key={step.title} className="grid grid-cols-[3rem_1fr] gap-4">
                <span aria-hidden="true" className={`grid h-12 w-12 place-items-center rounded-full font-display text-xl font-bold ${tint[i]}`}>
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold">{step.title}</h3>
                  <p className="text-white/75">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="teachers" className="mx-auto max-w-7xl scroll-mt-6 py-20">
        <h2 className="font-display text-4xl font-bold sm:text-5xl">Teachers</h2>
        <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {teachers.map((t, i) => (
            <Reveal as="li" delay={(i % 6) * 0.08} key={t.name} className="tile grid content-start gap-3 bg-surface p-5">
              <span aria-hidden="true" className={`chip-wiggle grid h-14 w-14 place-items-center rounded-2xl font-display text-lg font-bold ${tint[i % 3]}`}>
                {initials(t.name)}
              </span>
              <h3 className="font-bold">{t.name}</h3>
              <p className="text-sm font-semibold text-[var(--violet)]">{t.langs}</p>
              <p className="text-sm text-muted">{t.note}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="mx-auto mb-16 grid max-w-7xl gap-4 md:grid-cols-2">
        <div className="tile grid content-start gap-5 bg-lime md:p-10">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Book a free trial class</h2>
          <p className="max-w-md">
            Tell us which language you want and roughly your level. We send two group times that fit, and the first
            lesson is on us.
          </p>
          <div className="relative mt-4 hidden aspect-[3/2] overflow-hidden rounded-3xl md:block">
            <Image src={unsplash(photos.desk, 1000)} alt="Laptop, notebook and coffee mug on a wooden desk" fill sizes="40vw" className="object-cover" />
          </div>
        </div>
        <div className="tile bg-surface md:p-10">
          <LeadForm action={submitLead} submitLabel="Book my free class" />
        </div>
      </section>
    </main>
  );
}
