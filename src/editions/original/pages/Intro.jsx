// Hero: the wave, the casual intro, the Contact Me button and the penguin
// that hops and honks when you click it.
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "../animations/Reveal";
import { intro, links, media } from "../../../content/site.js";
import { fillYear } from "../../../shared/phdYear.js";
import useHonk from "../../../shared/useHonk.js";

const hop = {
  jump: { y: [null, -20, 10, 0], transition: { duration: 0.5, ease: "easeInOut" } },
  rest: { y: 0 },
};

// Keep the last word and the 👋🏼 together so the emoji never sits alone
// on its own line.
const greetingWords = intro.greeting.split(" ");
const greetingStart = greetingWords.slice(0, -2).join(" ");
const greetingEnd = greetingWords.slice(-2).join(" ");

const Intro = () => {
  const [hopping, setHopping] = useState(false);
  const reduceMotion = useReducedMotion();
  const honk = useHonk();

  const onPenguinClick = () => {
    honk();
    if (reduceMotion) return;
    setHopping(true);
    setTimeout(() => setHopping(false), 500);
  };

  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="flex min-h-[100svh] items-center pb-16 pt-24 md:pb-20 md:pt-32"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-5 sm:px-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:gap-12">
        <div className="order-2 flex flex-col gap-6 text-center md:order-1 md:gap-8 md:text-left">
          <Reveal>
            <h1
              id="home-heading"
              className="text-balance text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
            >
              {greetingStart}{" "}
              <span className="whitespace-nowrap">{greetingEnd}</span>
            </h1>
          </Reveal>
          <Reveal>
            <div className="mx-auto max-w-2xl space-y-4 text-xl font-semibold leading-snug md:mx-0 md:text-2xl">
              {intro.casual.map((line) => (
                <p key={line}>{fillYear(line)}</p>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-col items-center gap-3 md:items-start">
              <a
                href={`mailto:${links.email}`}
                className="inline-block rounded-lg bg-cta-active px-6 py-3 text-xl font-semibold text-cta-text opacity-90 shadow-md transition hover:-translate-y-0.5 hover:opacity-100 md:text-2xl"
              >
                Contact Me
              </a>
              <a
                href={`mailto:${links.email}`}
                className="text-muted text-base font-medium underline-offset-4 hover:underline"
              >
                {links.email}
              </a>
            </div>
          </Reveal>
        </div>

        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <Reveal width="fit-content">
            <motion.button
              type="button"
              onClick={onPenguinClick}
              aria-label="Click the penguin to make it honk"
              animate={hopping ? "jump" : "rest"}
              variants={hop}
              className="block rounded-2xl"
            >
              <img
                src={media.penguin}
                alt=""
                width="480"
                height="480"
                className="h-auto w-36 sm:w-52 md:w-72 lg:w-80"
              />
            </motion.button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Intro;
