// The "academic" edition: a lean PhD-student homepage (photo and bio,
// publications, side projects, contact) that keeps pieces of the original
// site: its colors and theme toggle, the pill navbar, chunky sans headings,
// chip tags, and the honking penguin (now in Contact).
// All content comes from src/content/site.js.
import "./academic.css";
import Nav from "./components/Nav.jsx";
import Header from "./sections/Header.jsx";
import Publications from "./sections/Publications.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

const AcademicApp = () => (
  <div className="edition-academic min-h-screen font-serif text-copy-primary">
    <Nav />
    <div className="mx-auto max-w-[52rem] px-5 pt-24 sm:px-8 sm:pt-32">
      <Header />
      <main className="mt-16 space-y-16 sm:mt-20 sm:space-y-20">
        <Publications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  </div>
);

export default AcademicApp;
