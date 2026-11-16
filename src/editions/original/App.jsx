// The "original" edition: Jeffrey's playful site (pill navbar, honking
// penguin, giant emoji headings), rendered from src/content/site.js.
import "./original.css";
import Navbar from "./pages/Navbar";
import Intro from "./pages/Intro";
import About from "./pages/About";
import Research from "./pages/Research";
import Papers from "./pages/Papers";
import Work from "./pages/Work";
import TeachingAwards from "./pages/TeachingAwards";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

const OriginalApp = () => (
  <div className="edition-original min-h-screen text-copy-primary">
    <Navbar />
    <main>
      <Intro />
      <About />
      <Research />
      <Papers />
      <Work />
      <TeachingAwards />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default OriginalApp;
