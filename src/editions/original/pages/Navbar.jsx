// The floating pill navbar. Buttons scroll to each section; we never use
// "#about" links because the URL hash picks the site edition.
import { useReducedMotion } from "framer-motion";
import ThemeToggleButton from "../../../shared/ThemeToggleButton";

// label shown in the pill → id of the section it scrolls to
const PAGES = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Research", id: "research" },
  { label: "Papers", id: "papers" },
  { label: "Work", id: "work" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const reduceMotion = useReducedMotion();

  const scrollTo = (id) => {
    const behavior = reduceMotion ? "auto" : "smooth";
    if (id === "home") {
      window.scrollTo({ top: 0, behavior });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior, block: "start" });
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-30 flex justify-center px-2 pt-4 sm:pt-6">
      <nav
        aria-label="Main"
        className="pointer-events-auto flex max-w-full items-center rounded-2xl border border-border bg-card text-copy-primary shadow-md"
      >
        {/* Small text on phones so all six items fit; if a phone is narrower
            still, the list scrolls sideways inside the pill. */}
        <ul className="no-scrollbar flex min-w-0 items-center overflow-x-auto py-1.5 pl-1.5 sm:gap-1 sm:py-2 sm:pl-2">
          {PAGES.map(({ label, id }) => (
            <li key={id} className="shrink-0">
              <button
                type="button"
                onClick={() => scrollTo(id)}
                className="rounded-lg px-1 py-2 text-xs font-bold transition-colors hover:bg-background min-[380px]:text-[13px] sm:px-3 sm:text-base"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
        <ThemeToggleButton className="mx-1 shrink-0 p-1.5 sm:mx-2 sm:p-2" />
      </nav>
    </header>
  );
};

export default Navbar;
