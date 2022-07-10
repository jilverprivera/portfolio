// import { useTheme } from "next-themes";
import { BsArrowDown } from "react-icons/bs";
import Awards from "../components/Awards";
import Education from "../components/Education";
import Experience from "../components/Experience";
import PageTitle from "../components/layout/PageTitle";
import Skills from "../components/Skills";

import Layout from "../layout";

const About = () => {
  return (
    <Layout
      type={"website"}
      metadata={{
        title: "About - Jilver Pacheco",
        description: `Software Developer, Electronic Engineer, and robotics enthusiast.`,
      }}
    >
      <section className="max-w-6xl xs:w-11/12 sm:w-11/12 md:w-11/12 lg:w-11/12 xl:w-full mx-auto pb-20">
        <PageTitle title="Resume" />
        <div className="max-w-2xl mx-auto mt-10 pb-5 flex flex-col items-center justify-center border-b-2 xs:w-11/12 sm:w-11/12 md:w-full lg:w-full">
          <p className="font-ClashGroteskRegular leading-7 text-center">
            I started in this wonderful world in 2020 when I built my first
            desktop app to store the documents of different academic courses of
            <strong> Electronic Engineering</strong>. Now, as a
            <strong> Software Developer </strong>my main focus is to build
            <strong> UI/UX</strong>-centric and accessible digital applications.
          </p>

          <div className="font-ClashGroteskRegular mt-7 flex items-center justify-center">
            <span className="mr-2">
              If you want to know more about me, see there.
            </span>
            <span className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full text-xl">
              <BsArrowDown />
            </span>
          </div>
        </div>
        <Skills />
        <Education />
        <Experience />
        <Awards />
      </section>
    </Layout>
  );
};

export default About;
