import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Awards, Education, Experience, Skills } from "../components/about";
import Layout from "../layout";

const types = [
  { name: "Awards", selector: "awards" },
  { name: "Education", selector: "education" },
  { name: "Experience", selector: "experience" },
  { name: "Skills", selector: "skills" },
];

const About = () => {
  const [selected, setSelected] = useState("skills");

  return (
    <Layout
      type={"website"}
      metadata={{
        title: "Jilver Pacheco – About",
        description: `Software Developer, Electronic Engineer, and robotics enthusiast.`,
        slug: "",
        date: null,
      }}
    >
      <div className="max-w-6xl mx-auto principal grid grid-cols-6 gap-8">
        <div className="col-span-3 flex flex-col items-start justify-center">
          <h1 className="text-5xl font-bold mb-16">Some words...</h1>
          <h2 className="font-medium text-2xl mb-7">
            Hey!, I&apos;m Jilver Pacheco and I develop things for the Internet.
          </h2>
          <p className="font-normal leading-7">
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
        <div className="col-span-3 flex flex-col items-center justify-start mt-10  z-0">
          <div className="w-full grid grid-cols-4 gap-2 ">
            {types.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelected(item.selector)}
                className={`hover:text-black hover:font-medium uppercase text-sm cursor-pointer p-1 duration-300 rounded  ${
                  item.selector === selected
                    ? "font-bold"
                    : "font-normal text-gray-600 dark:text-white"
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
    </Layout>
  );
};

export default About;
