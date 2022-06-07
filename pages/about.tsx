import React from "react";
import Presentation from "../components/about";
import Layout from "../layout";

const About = () => {
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
      <div>
        <Presentation />
      </div>
    </Layout>
  );
};

export default About;
