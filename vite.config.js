import { readFileSync } from 'node:fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// For the single-file preview: put the favicon inside index.html as a data
// URL and drop the large apple-touch-icon, so the page makes no other requests.
const inlineFavicon = () => ({
  name: 'inline-favicon',
  transformIndexHtml(html) {
    const png = readFileSync('public/favicon.png').toString('base64')
    return html
      .replace(/href="[^"]*favicon\.png"/, `href="data:image/png;base64,${png}"`)
      .replace(/\s*<link rel="apple-touch-icon"[^>]*>/, '')
  },
})

// Dev server: only scan the real entry (not dist-preview/index.html), and
// pre-bundle the libraries the lazily loaded editions use, so the first page
// load never triggers a mid-load "dependencies changed, reloading".
const optimizeDeps = {
  entries: ['index.html'],
  include: ['react', 'react-dom/client', 'framer-motion', 'prop-types'],
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // `npm run build:preview` → one self-contained dist-preview/index.html
  // (every image, font, gif and sound inlined) that opens straight from disk.
  if (mode === 'preview') {
    return {
      plugins: [react(), viteSingleFile(), inlineFavicon()],
      base: './',
      publicDir: false, // nothing from public/ is copied next to index.html
      cacheDir: process.env.VITE_CACHE_DIR || 'node_modules/.vite',
      build: {
        outDir: 'dist-preview',
        assetsInlineLimit: 100 * 1024 * 1024, // inline everything (100 MB cap)
      },
    }
  }

  // Normal dev server and the GitHub Pages build.
  return {
    plugins: [react()],
    base: '/personal-website/',
    optimizeDeps,
    // Lets two dev servers run side by side with different cache folders.
    cacheDir: process.env.VITE_CACHE_DIR || 'node_modules/.vite',
  }
})
