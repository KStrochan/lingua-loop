import type { SiteConfig } from "./types";

export const site: SiteConfig = {
  name: "Lingua Loop",
  description: "Live online English, Spanish and German classes in small groups, with a free placement test.",
  url: "https://lingua-loop-bice.vercel.app",
  locale: "en",
  routes: ["/", "/test", "/schedule"],
  nav: [
    { href: "/#courses", label: "Courses" },
    { href: "/#teachers", label: "Teachers" },
    { href: "/schedule", label: "Schedule" },
    { href: "/test", label: "Level test" },
  ],
  contact: {
    phone: "+1 (555) 015-7700",
    address: "Online, with a small office at 5 Market Lane, Northbay",
    hours: "Support every day 8:00 to 21:00",
  },
  photoCredits: [
    { author: "Brooke Cagle", url: "https://unsplash.com/@brookecagle" },
    { author: "Surface", url: "https://unsplash.com/@surface" },
    { author: "Dylan Ferreira", url: "https://unsplash.com/@dylanferreira" },
    { author: "Andrew Neel", url: "https://unsplash.com/@andrewtneel" },
  ],
};
