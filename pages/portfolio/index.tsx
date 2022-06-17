import { getAllFilesMetadata } from "../../lib/mdx";

import { Project, Projects } from "../../interfaces/projects";

import Layout from "../../layout";
import { useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import { AnimatePresence } from "framer-motion";

const Portfolio = ({ projects }: Projects) => {
  const [currentHover, setCurrentHover] = useState<number | null>(null);
  return (
    <Layout
      type={"website"}
      metadata={{
        title: "Jilver Pacheco - Portfolio",
        description: `Software Developer, Electronic Engineer, and robotics enthusiast.`,
        slug: "",
        date: null,
      }}
    >
      <div className="max-w-screen-xl mx-auto">
        <h1 className="font-bold text-6xl my-12">Portfolio</h1>

        <AnimatePresence exitBeforeEnter>
          {projects.map((project: Project, i: number) => (
            <ProjectCard key={project.slug} {...project} index={i} />
          ))}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default Portfolio;

export async function getStaticProps() {
  const projects = await getAllFilesMetadata("projects");

  const organizedProjects = projects.sort((a: any, b: any) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return {
    props: { projects: organizedProjects },
  };
}
