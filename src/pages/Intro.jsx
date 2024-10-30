import React, { useState } from "react";
import { motion } from "framer-motion";

import Reveal from "../animations/Reveal";

const Intro = () => {
  const [isClick, setIsClick] = useState(false);
  const variants = {
    jump: {y: [null, -20, 10, 0],
      transition: {
        duration:0.5,
        ease:'easeInOut'
      }
    },
    noJump: {y:0}
  };
  const playSound = () => {
    const audio = new Audio(
      "/personal-website/fnaf-12-3-freddys-nose-sound.mp3"
    );
    audio.play();
    setIsClick(true);
    setTimeout(() => setIsClick(false), 500); 
  };

  return (
    <section
      id="home"
      className="w-screen h-max text-copy-primary py-[25vh] max-md:py-[10vh] px-[5%]"
    >
      <div className="flex flex-row items-center max-md:flex-col-reverse">
        <div className="h-max flex flex-col gap-10 w-6/12 mr-[20%] max-md:m-0 max-md:text-center">
          <Reveal width="100%">
            <h1 className="text-7xl font-extrabold ">
              Hi, I&apos;m Jeffrey 👋🏼
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-3xl font-semibold">
              I&apos;m first year grad student at USC ✌🏼
              <br />
              studying computer engineering.
              <br />
              <br />
              I received a B.S. in Electrical Engineering and Computer Science
              at UC Berkeley 🐻
              <br />
              <br />
              Reach out if you like to learn more!
            </p>
          </Reveal>
          <Reveal>
            <a
              href="mailto:millanj@usc.edu"
              className="inline-block whitespace-now bg-cta-active text-cta-text rounded-lg py-4 px-6 text-3xl font-semibold opacity-90 hover:opacity-100"
            >
              Contact Me
            </a>
          </Reveal>
        </div>
        <Reveal>
          <motion.button
            onClick={playSound}
            animate={isClick ? "jump" : 'noJump'}
            variants={variants}
          >
            <img
              src="/personal-website/penguin.gif"
              className={`object-scale-down`}
            ></img>
          </motion.button>
        </Reveal>
      </div>
    </section>
  );
};

export default Intro;
