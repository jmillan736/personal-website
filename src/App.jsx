// Edition shell. Picks which version of the site to show:
//   1. the URL hash, if it is exactly #original or #academic
//   2. otherwise the last choice saved in localStorage ("edition")
//   3. otherwise config.defaultEdition from src/content/site.js
// Each edition is loaded lazily, so visitors only download the one they see.
import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { config } from "./content/site.js";
import useTheme from "./shared/useTheme.js";
import EditionSwitcher from "./shared/EditionSwitcher.jsx";

const EDITIONS = {
  original: lazy(() => import("./editions/original/App.jsx")),
  academic: lazy(() => import("./editions/academic/App.jsx")),
};

const isEdition = (value) => value === "original" || value === "academic";

function editionFromHash() {
  const hash = window.location.hash.slice(1);
  return isEdition(hash) ? hash : null;
}

function initialEdition() {
  const fromHash = editionFromHash();
  if (fromHash) return fromHash;
  try {
    const saved = window.localStorage.getItem("edition");
    if (isEdition(saved)) return saved;
  } catch {
    // Storage blocked: use the default below.
  }
  return isEdition(config.defaultEdition) ? config.defaultEdition : "original";
}

function App() {
  useTheme(); // keeps the light/dark class on <body> in sync
  const [edition, setEdition] = useState(initialEdition);

  // Follow manual hash edits and back/forward navigation.
  useEffect(() => {
    const onHashChange = () => {
      const fromHash = editionFromHash();
      if (fromHash) setEdition(fromHash);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const switchEdition = useCallback((next) => {
    // Component state is the source of truth; the hash and storage are extras
    // that may be unavailable in sandboxed previews.
    setEdition(next);
    try {
      if (window.location.hash !== `#${next}`) window.location.hash = next;
    } catch {
      // Ignore: some embedded previews do not allow changing the URL.
    }
    try {
      window.localStorage.setItem("edition", next);
    } catch {
      // Ignore: not remembered, but the switch still happens.
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const Edition = EDITIONS[edition];

  return (
    <>
      <Suspense fallback={<div className="min-h-screen" />}>
        <Edition />
      </Suspense>
      <EditionSwitcher edition={edition} onChange={switchEdition} />
    </>
  );
}

export default App;
