import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import Awards from "./Awards";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

const types = [
  { name: "Awards", selector: "awards" },
  { name: "Education", selector: "education" },
  { name: "Experience", selector: "experience" },
  { name: "Skills", selector: "skills" },
];

const About = () => {
  const [selected, setSelected] = useState("skills");
  return (
    <div className="max-w-7xl mx-auto min-h-screen grid grid-cols-6">
      <div className="flex items-center justify-start">
        <p className="-rotate-90 uppercase font-bold tracking-widest">
          about me
        </p>
      </div>
      <div className="col-span-5 grid grid-cols-5">
        <div className="col-span-2 flex flex-col items-start justify-center">
          <h2 className="font-medium text-2xl mb-7">
            Hey!, I&apos;m Jilver Pacheco and I develop things for the Internet.
          </h2>
          <p className="font-normal">
            I started in this wonderful world in 2020 when I built my first
            desktop app to store the documents of different academic courses of
            <strong> Electronic Engineering</strong>. Now, as a
            <strong> Software Developer </strong>my main focus is to build
            <strong> UI/UX</strong>-centric and accessible digital applications.
          </p>

          <div className="font-normal mt-7 flex items-center justify-center">
            <span className="mr-2">
              If you want to know more about me, see there.
            </span>
            <span className="w-14 h-14 flex items-center justify-center bg-black text-white rounded-full text-2xl">
              <BsArrowUpRight />
            </span>
          </div>
        </div>
        <div className="col-span-3 flex flex-col items-center justify-start pt-10 z-0">
          <div className="w-full grid grid-cols-4 pt-16">
            {types.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelected(item.selector)}
                className={` uppercase text-sm cursor-pointer p-1 duration-300 rounded ${
                  item.selector === selected
                    ? "font-bold bg-black text-white"
                    : "font-normal"
                } `}
              >
                {item.name}
              </button>
            ))}
          </div>
          <AnimatePresence exitBeforeEnter>
            {selected === "awards" && <Awards />}
            {selected === "education" && <Education />}
            {selected === "experience" && <Experience />}
            {selected === "skills" && <Skills />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default About;
