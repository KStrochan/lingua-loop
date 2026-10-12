import Link from "next/link";
import { PhotoCredits } from "@/components/PhotoCredits";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-fg px-6 py-12 text-white sm:px-10">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          <div className="grid content-start gap-3">
            <p className="font-display text-3xl font-bold">{site.name}</p>
            <p className="max-w-sm text-white/75">{site.description}</p>
          </div>
          <div className="grid content-start gap-2 text-sm">
            <p className="font-bold">Support</p>
            <p className="text-white/75">{site.contact.hours}</p>
            <a href={`tel:${site.contact.phone.replace(/[^+\d]/g, "")}`} className="text-white">
              {site.contact.phone}
            </a>
          </div>
          <nav aria-label="Footer" className="grid content-start gap-2 text-sm">
            <p className="font-bold">Pages</p>
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-10 grid gap-2 border-t border-white/15 pt-5 text-xs text-white/70 [&_a]:text-white">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. Demo project by{" "}
            <a href="https://github.com/KStrochan">Konstantyn Strochan</a>; the school and teachers are fictional.
          </p>
          <PhotoCredits credits={site.photoCredits} />
        </div>
      </div>
    </footer>
  );
}
