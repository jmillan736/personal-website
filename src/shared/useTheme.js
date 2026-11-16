// Light/dark theme shared by every component that calls useTheme().
// The theme lives in a tiny module-level store, so several toggle buttons
// (or the shell plus a toggle) always agree with each other.
import { useCallback, useEffect, useSyncExternalStore } from "react";

const THEMES = ["light", "dark"];
const listeners = new Set();

function readInitialTheme() {
  try {
    const saved = window.localStorage.getItem("theme");
    if (THEMES.includes(saved)) return saved;
  } catch {
    // Storage can be blocked (private mode, sandboxed iframe): ignore.
  }
  try {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  } catch {
    // Very old browsers: fall through to light.
  }
  return "light";
}

// Puts exactly one of "light" / "dark" on <body> (the color tokens hang off it).
function applyTheme(theme) {
  document.body.classList.remove(...THEMES.filter((t) => t !== theme));
  document.body.classList.add(theme);
}

let currentTheme = typeof window === "undefined" ? "light" : readInitialTheme();

function setTheme(theme) {
  currentTheme = theme;
  applyTheme(theme);
  try {
    window.localStorage.setItem("theme", theme);
  } catch {
    // Not saved, but the page still switches.
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

const getSnapshot = () => currentTheme;

export default function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  // Make sure <body> carries the class even before the first toggle
  // (index.html usually sets it already, to avoid a flash).
  useEffect(() => applyTheme(theme), [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  }, []);

  return { theme, toggleTheme };
}
