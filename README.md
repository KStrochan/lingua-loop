# Lingua Loop

Demo website for Lingua Loop, an online language school I made up for my portfolio. The business, people and prices are fictional; the code is real.

Live online English, Spanish and German classes in small groups, with a free placement test.

## Status

In progress. The groundwork is done: brand colors and fonts, the contact form with Telegram delivery, metadata, tests and a Lighthouse check. The pages below are next.

Pages:

- [ ] Home
- [ ] Courses
- [ ] Placement test
- [ ] Schedule
- [ ] Teachers
- [ ] Contact

Features:

- [ ] 10-question placement test that recommends a course
- [ ] Group schedule with filters

## Design

Bright and friendly: violet with lime and coral, rounded shapes and a bento grid.

| Token | Value |
| --- | --- |
| bg | `#FAF9FF` |
| surface | `#FFFFFF` |
| fg | `#1B1440` |
| muted | `#514B6B` |
| border | `#DCD7F0` |
| accent | `#5B3CC4` |
| on accent | `#FFFFFF` |
| link | `#5B3CC4` |
| error | `#C62828` |
| lime | `#C8F560` |
| coral | `#FF6B5A` |
| radius | `20px` |

Headings use Unbounded, body text uses Onest. Both are self-hosted from `app/fonts` through `next/font/local`.

## Stack

- Next.js 16 (App Router), React 19
- TypeScript in strict mode
- Tailwind CSS 4
- zod for form validation
- Vitest and Testing Library
- Lighthouse CI

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run check` | Type check, lint and tests |
| `npm run lighthouse` | Builds the site, runs Lighthouse five times on mobile and fails if the median score in any category drops below 95 or the median LCP goes above 2.5 s |

## Contact form

Enquiries go to a Telegram chat. Copy `.env.example` to `.env.local` and fill in `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID`. Without them the form runs in demo mode and tells the visitor that nothing was sent.

## Deploying

Import the repository in Vercel and add the two Telegram variables if the form should deliver leads. Update `url` in `content/site.ts` once the site has its final domain.

## Credits

Fonts are licensed under the SIL Open Font License; the license texts are in `app/fonts`. Photos will come from Unsplash and are credited in the site footer.

## License

Code: MIT
