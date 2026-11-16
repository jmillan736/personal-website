# Redesign plan: two editions, one codebase

Goal: update jmillan736.github.io/personal-website into a modern PhD-student
site without losing its personality. We ship **two editions** that render the
same content so Jeffrey can compare them:

| Edition    | Hash        | What it is |
|------------|-------------|------------|
| `original` | `#original` | The current site's look and voice, refreshed and updated. |
| `academic` | `#academic` | A conventional PhD-student page that keeps recognizable pieces of the original. |

## Non-negotiables (both editions)

- **Facts come only from `src/content/site.js`.** Never hard-code names, dates,
  titles, venues, or links in components, and never invent content. If
  something seems missing from the content file, report it; do not make it up.
- The PhD year ("second-year") is computed from `person.phdStart`
  (Spring 2025 start). Nov 2026 → "second". Jan 2027 → "third".
- Do not show a phone number or GPA anywhere.
- `links.cv` and `links.scholar` are `null` for now: render nothing for them
  (no dead buttons), but support them when set.
- Section navigation uses `scrollIntoView` on buttons, **never `#section`
  anchors**: the URL hash is reserved for the edition (`#original` /
  `#academic`).
- All images/audio are ES-imported (via `site.js`), never referenced by
  hard-coded `/personal-website/...` paths.
- Quality floor: responsive from 360px wide, no horizontal scrollbar, light and
  dark themes both polished, WCAG AA text contrast, visible `:focus-visible`
  rings, `prefers-reduced-motion` respected, real alt text, semantic landmarks
  (`header`/`nav`/`main`/`section`/`footer`), external links get
  `target="_blank" rel="noopener noreferrer"`.
- The page must also work inside a sandboxed iframe preview: wrap
  `localStorage`, `location.hash` writes and `audio.play()` in try/catch, show
  the email address as visible text wherever there is a `mailto:` link, and
  load nothing from other hosts (fonts are bundled via `@fontsource`).
- No new dependencies beyond what the foundation installs unless truly needed.

## Architecture

```
src/
  main.jsx                 mounts <App/>
  App.jsx                  edition shell: hash → localStorage → config.defaultEdition;
                           lazy-loads the edition; renders <EditionSwitcher/>
  index.css                Tailwind directives + shared theme tokens (.light/.dark/.red)
  content/site.js          ALL content (owned by the planner; read-only for builders)
  assets/img, assets/audio optimized assets imported by site.js
  shared/                  phdYear.js, RichText.jsx, useTheme.js, ThemeToggleButton.jsx,
                           useHonk.js, EditionSwitcher.jsx, icons.jsx
  editions/
    original/              App.jsx + its own pages/components (owner: original builder)
    academic/              App.jsx + its own pages/components (owner: academic builder)
```

Each edition's root element carries `className="edition-original"` /
`"edition-academic"`; any edition-specific CSS is scoped under that class.

Scripts: `npm run dev`, `npm run build` (GitHub Pages, base
`/personal-website/`), `npm run build:preview` (one self-contained
`dist-preview/index.html`, everything inlined), `npm run deploy` (unchanged).

Shared theme tokens (unchanged from the current site; this palette **is** the
identity both editions share):

| Token | Light | Dark |
|---|---|---|
| background | 245,245,245 | 0,0,0 |
| card | 255,255,255 | 23,23,23 |
| border | 212,212,212 | 38,38,38 |
| copy-primary | 23,23,23 | 250,250,250 |
| copy-secondary | 115,115,115 | 115,115,115 |
| cta / cta-active | 139,92,246 / 124,58,237 | 99,102,241 / 79,70,229 |

`copy-secondary` is too faint for body copy: use it only for short meta text,
and each edition may define a stronger scoped secondary if it needs AA.

## Edition `original`: same soul, grown up a little

Someone who knows the current site should say "oh, it's the same site, just
updated." Keep, on purpose:

- Floating pill navbar (card, border, `rounded-2xl`, shadow) with the theme toggle.
- Giant extrabold emoji headings, alternating left/right alignment
  (About left, Work right, ...).
- The honking penguin in the hero (click → hop + honk).
- Purple/indigo CTA, chip-style tool tags, project cards with the pop-up modal.
- Reveal-on-scroll animation and the casual first-person voice.
- System sans font stack (Tailwind default), as today.

Page order and sections:

1. **Hero**: `intro.greeting` + `intro.casual` (with computed year) + "Contact Me" + penguin.
2. **About 👨🏽‍💻**: `media.jeffFull` photo + `about` paragraphs + icon links (LinkedIn, GitHub, email). Drop the CodePen icon.
3. **Research 🔬** (new): `research` threads as cards in the existing card style, then a compact "Experience" list from `experience` (role, org/unit, dates; bullets behind a click-to-expand so the page stays light).
4. **Papers 📝** (new): `publications`; Jeffrey's name emphasized; status/award shown as chips; link buttons.
5. **Work 🕵🏽‍♂️**: existing project grid + modal, from `projects`.
6. **Teaching & Awards 🏆** (new): `teaching` and `honors` as two cards.
7. **Contact 📮**: existing block; footer line with © year.

Nav: Home, About, Research, Papers, Work, Contact (+ theme toggle). It must not
overflow on a 360px screen (shrink text/gaps or scroll inside the pill).

"More professional" here means polish, not a new look:

- Responsive type: headings `text-5xl md:text-7xl`; hero copy about
  `text-xl md:text-2xl`; body `text-lg font-medium` instead of everything bold.
- A centered max-width container; replace `w-screen` (causes sideways scroll).
- Fix existing bugs: Reveal `width` prop, body scroll-lock done in an effect,
  modal closes on Esc and traps/restores focus, images have alt text.
- Typos fixed in content already (Hugging Face, Bootstrap, LinkedIn...).
- Reduced motion: Reveal renders content immediately.

## Edition `academic`: conventional PhD page, same DNA

Reference genre: the single-column academic homepage (photo + bio on top, then
research, news, publications, experience). A recruiter, professor, or reviewer
should find the bio, papers, and email within five seconds.

What carries over from the original (the "elements of the previous design"):
the exact color tokens, light/dark toggle, the floating pill navbar shape, the
chunky extrabold sans headings (smaller), chip tags, `rounded-2xl` photo, the
👋🏼 greeting, and the penguin, who moves to the footer and still honks.

Tokens:

- Type: body **Source Serif 4** (variable, bundled via `@fontsource-variable/source-serif-4`),
  18px, line-height ~1.65, measure ≤ 72ch. Name, section headings, nav, dates
  and chips use the same system sans stack as the original at weight 800/700
  with tight tracking. Scale: name 2.75rem, section h2 1.5rem, meta 0.875rem.
- Links: violet `124,58,237` in light, indigo-400 `129,140,248` in dark
  (scoped `--link`), underlined with offset.
- Layout: one centered column, `max-width: 52rem`, left-aligned text, generous
  vertical rhythm, separation by whitespace and the occasional hairline, **not**
  by wrapping every block in a card.

```
        ( Jeffrey Millan · About Research News Publications Experience Projects Contact · ☾ )

 ┌──────────┐  Jeffrey Millan
 │ portrait │  PhD student, Computer Engineering
 │          │  University of Southern California
 └──────────┘  [Email] [GitHub] [LinkedIn]   millanj@usc.edu
 Hi, I'm Jeffrey 👋🏼 I'm a second-year PhD student ... (intro.formal)

 ┌────────────────────────────────────────────────────────────┐
 │  MessageSpread: dots wander; a message hops on contact      │
 └────────────────────────────────────────────────────────────┘
   caption + live "reached 12 of 40"

 Research       interests chips, then the three threads as text blocks
 News           date | item rows (newest first; older ones behind "Show older")
 Publications   title / authors (Jeffrey bold) / venue, year / chips / [DOI] [PDF]
 Experience     dates | role, org, unit   (bullets in <details>)
 Teaching       same row pattern
 Honors | Service   two columns on desktop; conferences collapsed
 Projects       compact rows with thumbnail; expand inline for the long story
 Contact        short line + email; penguin at the right, honks on click
 footer         © year · last updated
```

The one bold element: **MessageSpread**, a small canvas that illustrates the
research itself. ~40 dots (fewer on small screens) wander with smooth
random-waypoint motion. One starts out carrying a message (accent color); when
a carrier passes within contact range of another dot, a short link flashes and
that dot becomes a carrier. When everyone has it, pause briefly and restart
from a new seed. Clicking/tapping starts a new message from the nearest dot.
Requirements: colors read from the theme tokens and update on theme toggle;
crisp on HiDPI; paused when off-screen or the tab is hidden; with
`prefers-reduced-motion` render one static mid-spread frame; `aria-label` on the
canvas plus a plain-language caption ("Each dot is a person or device on the
move. A message can only hop between two that pass close to each other. This is
the kind of network I study. Click to start a new message."). Keep it quiet:
small dots, thin links, no glow.

Everything else stays calm: no scroll-reveal animations, no hover effects on
every row. Motion is limited to MessageSpread, the penguin hop, and
open/close of expandable rows.

## Ownership (to avoid collisions)

- Foundation builder: everything outside `src/editions/academic` and
  `src/content/site.js`; moves the existing code into `src/editions/original`
  working as-is against the new content/assets.
- Original builder: only `src/editions/original/**`.
- Academic builder: only `src/editions/academic/**`.
- `src/content/site.js`, `src/shared/**`, config files: read-only for edition
  builders. Need something shared changed? Say so in the final report.
