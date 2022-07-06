import React from "react";
import Layout from "../layout";

import Education from "../components/Education";
import Experience from "../components/Experience";
import Awards from "../components/Awards";
import Skills from "../components/Skills";

const Resume = () => {
  return (
    <Layout
      type={"website"}
      metadata={{
        title: "Resume - Jilver Pacheco.",
        description: `Software Developer, Electronic Engineer, and robotics enthusiast.`,
        slug: "",
        date: null,
      }}
    >
      <section className="w-full min-h-screen bg-zinc-50">
        <div className="max-w-screen-xl mx-auto py-24">
          <h1 className="font-normal text-5xl tracking-widest">Resume</h1>
        </div>
        <div className="w-full bg-white min-h-screen">
          <div className="max-w-screen-xl mx-auto">
            <Skills />
          </div>
          <div className="max-w-screen-xl mx-auto grid grid-cols-2 gap-10">
            <Education />
            <Experience />
          </div>
          <div className="max-w-screen-xl mx-auto">
            <Awards />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
