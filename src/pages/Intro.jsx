import React from "react";

import Reveal from "../animations/Reveal";

const Intro = () => {
  return (
    <section
      id="home"
      className="w-screen h-max text-copy-primary py-[25vh] max-md:py-[10vh] px-[5%]"
    >
      <div className="flex flex-row items-center max-md:flex-col-reverse">
        <div className="h-max flex flex-col gap-10 w-6/12 mr-[20%] max-md:m-0 max-md:text-center">
          <Reveal>
            <h1 className="text-7xl font-extrabold ">Hi, I&apos;m Jeffrey 👋🏼</h1>
          </Reveal>
          <Reveal>
            <p className="text-3xl font-semibold">
              I&apos;m first year grad student at USC ✌🏼
              <br />
              studying computer engineering.
              <br />
              <br />
              I received a B.S in Electrical Engineering and Computer Science at
              UC Berkeley 🐻
              <br />
              <br />
              Reach out if you like to learn more!
            </p>
          </Reveal>
          <Reveal>
            <a
              href="mailto:millanj@usc.edu"
              className="inline-block whitespace-nowrap w-max h-max bg-cta-active text-cta-text rounded-lg py-4 px-6 text-3xl font-semibold"
            >
              Contact Me
            </a>
          </Reveal>
        </div>
        <Reveal>
          <img
            src="/penguin.gif"
            className="object-scale-down"
          ></img>
        </Reveal>
      </div>
    </section>
  );
};

export default Intro;
