# Personal Website
Shoutout to [hover.dev](https://www.hover.dev) for inspiration!!!

Built with Vite + React + Tailwind CSS + framer-motion, deployed to GitHub Pages at
https://jmillan736.github.io/personal-website/

## Where things live

- **All the words, links, and pictures: `src/content/site.js`.** Updating the CV?
  That's the only file you should need to touch (projects, papers, news,
  experience, teaching, honors, ...).
- Images and the honk sound: `src/assets/` (imported by `site.js`, so Vite
  optimizes and fingerprints them).
- Shared bits both versions use: `src/shared/` (theme toggle, honk, icons,
  PhD-year math, the little "Version" switch).
- The two versions of the site: `src/editions/original/` and `src/editions/academic/`.
- Light/dark colors: `src/index.css` (`.light` / `.dark`), wired to Tailwind in
  `tailwind.config.js`.

## The PhD year updates itself

`person.phdStart` in `site.js` is when the PhD started (`{ year: 2025, month: 1 }`).
Any text with `{year}` in it (like `"I'm a {year}-year PhD student"`) gets the
right word automatically: "second" until Jan 2027, then "third", and so on. No
more forgetting to bump it 🎉

## Two versions of the site

| Version | URL | Vibe |
|---|---|---|
| Original | `.../personal-website/#original` | The OG site: penguin, emoji headings, pill navbar |
| Academic | `.../personal-website/#academic` | Classic PhD-student homepage (bio, papers, news) |

In `site.js` → `config`:

- `defaultEdition: "original"` (or `"academic"`) picks what loads with no `#` in the URL.
- `showEditionSwitcher: true` shows the little "Version: Original / Academic" pill in the
  bottom-right corner. Set it to `false` once you've picked a favorite.

## Adding a CV or Google Scholar link

Both are `null` for now, so no button shows up.

- **CV:** drop the PDF in `public/` (e.g. `public/Jeffrey_Millan_CV.pdf`) and set
  `links.cv: "Jeffrey_Millan_CV.pdf"` in `site.js`.
- **Scholar:** paste your profile URL into `links.scholar`.

## Commands

- `npm install`: install everything (first time only)
- `npm run dev`: local dev server at http://localhost:5173/personal-website/
- `npm run build`: production build into `dist/`
- `npm run build:preview`: one self-contained `dist-preview/index.html` (images, fonts, gif,
  and honk all baked in) that you can open straight from your computer or send to someone
- `npm run lint`: check the code
- `npm run deploy`: build and push `dist/` to GitHub Pages

## Original setup notes
1. `npm create vite@latest my-project -- --template react`
2. `cd my-project`
3. `npm install framer-motion`
4. `npm install -D tailwindcss postcss autoprefixer`
5. `npx tailwindcss init -p`
6. Follow Step Three in [Install Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite)

[Instructions on deploying a vite project](https://medium.com/@aishwaryaparab1/deploying-vite-deploying-vite-app-to-github-pages-166fff40ffd3)

[Deploying on GitHub Pages using gh-pages](https://blog.seancoughlin.me/deploying-to-github-pages-using-gh-pages)
You should be solid from there 😎
