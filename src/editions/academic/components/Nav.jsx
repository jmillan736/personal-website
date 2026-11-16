// Floating pill navbar (same shape as the original's: card, border,
// rounded-2xl, shadow), compact. Buttons scroll to sections; the URL hash is
// left alone because it picks the edition. Four links fit on a 360px phone.
import ThemeToggleButton from "../../../shared/ThemeToggleButton.jsx";

const ITEMS = [
  { id: "about", label: "About" },
  { id: "publications", label: "Publications" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function prefersReducedMotion() {
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
}

function goTo(id) {
  const target = document.getElementById(id);
  if (!target) return;
  target.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
  // Move keyboard focus too, so the next Tab continues from that section.
  target.focus({ preventScroll: true });
}

const Nav = () => (
  <div className="pointer-events-none fixed inset-x-0 top-3 z-30 flex justify-center px-3">
    <nav
      aria-label="Sections"
      className="pointer-events-auto flex max-w-full items-center rounded-2xl border border-rule bg-card font-sans text-sm font-bold text-copy-primary shadow-md"
    >
      <ul className="flex min-w-0 px-1 sm:px-2">
        {ITEMS.map(({ id, label }) => (
          <li key={id} className="flex-none">
            <button
              type="button"
              onClick={() => goTo(id)}
              className="whitespace-nowrap rounded-lg px-1.5 py-2.5 transition-colors hover:text-[rgb(var(--link))] sm:px-2.5"
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
      <ThemeToggleButton className="mr-2 flex-none p-1 text-[1rem]" />
    </nav>
  </div>
);

export default Nav;
