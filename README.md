# Personal Website

Source code for my personal website, built with [Vite](https://vitejs.dev/),
[React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), and
[Framer Motion](https://www.framer.com/motion/), and deployed to GitHub Pages.

**Live site:** https://jmillan736.github.io/personal-website/

## Getting Started

```bash
npm install       # Install dependencies
npm run dev       # Start the dev server at http://localhost:5173/personal-website/
```

### Available Scripts

| Command                 | Description                                                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| `npm run dev`           | Start the local development server.                                                                           |
| `npm run build`         | Create a production build in `dist/`.                                                                         |
| `npm run build:preview` | Create a single self-contained `dist-preview/index.html` with all assets inlined, suitable for offline sharing. |
| `npm run lint`          | Run ESLint.                                                                                                   |
| `npm run deploy`        | Build the site and publish `dist/` to GitHub Pages.                                                           |

## Project Structure

| Path                                                 | Purpose                                                                                                             |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `src/content/site.js`                                | Single source of truth for all site content: text, links, images, projects, publications, news, experience, teaching, and honors. |
| `src/assets/`                                        | Images and audio. Assets are imported through `site.js` so Vite can optimize and fingerprint them.                  |
| `src/shared/`                                        | Components and utilities shared across editions (theme toggle, icons, PhD-year calculation, edition switcher).      |
| `src/editions/original/`, `src/editions/academic/`   | The two site editions.                                                                                              |
| `src/index.css`, `tailwind.config.js`                | Light and dark theme color definitions (`.light` / `.dark`) and their Tailwind integration.                         |

Routine content updates, such as revising the CV, should only require changes to
`src/content/site.js`.

## Site Editions

The site ships with two editions that render the same content:

| Edition  | URL                              | Description                                                        |
| -------- | -------------------------------- | ------------------------------------------------------------------ |
| Original | `/personal-website/#original`    | The original design, featuring animations and a pill-style navbar. |
| Academic | `/personal-website/#academic`    | A traditional academic homepage with bio, publications, and news.  |

Both are configured under `config` in `src/content/site.js`:

- `defaultEdition` — the edition loaded when the URL has no hash (`"original"` or `"academic"`).
- `showEditionSwitcher` — when `true`, displays an edition toggle in the bottom-right corner.

## Configuration

### Automatic PhD Year

`person.phdStart` in `site.js` records the PhD start date (e.g. `{ year: 2025, month: 1 }`).
Any content string containing the `{year}` placeholder, such as
`"I'm a {year}-year PhD student"`, is rendered with the correct ordinal for the
current date, so the text never needs manual updating.

### CV and Google Scholar Links

Both links default to `null`, in which case their buttons are hidden.

- **CV:** Place the PDF in `public/` (e.g. `public/Jeffrey_Millan_CV.pdf`) and set
  `links.cv` to its filename.
- **Google Scholar:** Set `links.scholar` to the profile URL.

## Deployment

The site is deployed to GitHub Pages using [`gh-pages`](https://www.npmjs.com/package/gh-pages).
Running `npm run deploy` builds the project and pushes `dist/` to the `gh-pages` branch.

Useful references:

- [Install Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite)
- [Deploying a Vite app to GitHub Pages](https://medium.com/@aishwaryaparab1/deploying-vite-deploying-vite-app-to-github-pages-166fff40ffd3)
- [Deploying to GitHub Pages using gh-pages](https://blog.seancoughlin.me/deploying-to-github-pages-using-gh-pages)

## Acknowledgments

Design inspiration from [hover.dev](https://www.hover.dev).
