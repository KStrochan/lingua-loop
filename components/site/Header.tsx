import Link from "next/link";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="px-3 pt-3 sm:px-5 sm:pt-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-surface px-4 py-2.5 shadow-[0_2px_0_var(--border)] sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-fg no-underline">
          <span aria-hidden="true" className="relative h-7 w-10">
            <span className="absolute left-0 top-0 h-7 w-7 rounded-full border-[5px] border-[var(--violet)]" />
            <span className="absolute right-0 top-0 h-7 w-7 rounded-full border-[5px] border-[var(--coral)] mix-blend-multiply" />
          </span>
          <span className="font-display text-lg font-bold">{site.name}</span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          {site.nav.slice(0, 3).map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-fg no-underline hover:text-[var(--violet)]">
              {item.label}
            </Link>
          ))}
          <Link href="/test" className="btn-lime">
            Take the level test
          </Link>
        </nav>
        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-full bg-[var(--violet)] px-4 py-2 text-sm font-semibold text-white">Menu</summary>
          <nav aria-label="Mobile" className="absolute right-0 z-40 mt-2 grid w-56 gap-1 rounded-3xl bg-surface p-2 shadow-xl">
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-2xl px-4 py-2 text-fg no-underline hover:bg-bg">
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
