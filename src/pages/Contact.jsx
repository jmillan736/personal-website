import React from "react";
import Reveal from "../animations/Reveal";

const Contact = () => {
  return (
    <section id='contact' className="w-screen h-max flex flex-col text-cta-text px-[5%] mb-[25vh] items-center">
      <div className="flex flex-col bg-cta-active w-max h-max p-8 text-center gap-6 rounded-3xl border-2 hover:bg-card hover:text-copy-primary">
        <Reveal>
          <h1 className="text-5xl font-extrabold">Contact 📮</h1>
        </Reveal>
        <Reveal>
          <p>
            Feel free to send an email or message through{" "}
            <a
              href="https://www.linkedin.com/in/jeffrey-millan/"
              className="hover:text-cta-active hover:underline"
            >
              Linkedn
            </a>
          </p>
        </Reveal>
        <Reveal>
          <a
            href="mailto:millanj@usc.edu"
            className="hover:text-cta-active hover:underline"
          >
            <div className="flex flex-row justify-center items-center text-2xl font-bold">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                role="img"
                viewBox="0 0 24 20"
                height="2em"
                width="2em"
              >
                <path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
              </svg>
              <h2>millanj@usc.edu</h2>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
