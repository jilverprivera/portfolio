import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

import { getAllFilesMetadata } from "../../lib/mdx";

import { Project, Projects } from "../../interfaces/projects";

import Layout from "../../layout";
import { useState } from "react";

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
      <div className="w-full principal grid grid-cols-3">
        {projects.map((project: Project, index: number) => (
          <div
            key={project.slug}
            className="mt-8 relative overflow-hidden"
            onMouseEnter={() => setCurrentHover(index)}
            onMouseLeave={() => setCurrentHover(null)}
          >
            <Image
              src={project.cover_image}
              alt={project.title}
              width={512}
              height={360}
              layout="responsive"
              objectFit="cover"
            />
            <AnimatePresence exitBeforeEnter>
              {currentHover === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-0 left-0 right-0 p-4 flex flex-col items-center justify-center bg-project-info"
                >
                  {/* <p className="text-9xl font-bold text-zinc-900">
                    0{index + 1}
                  </p> */}
                  <h2 className="text-lg text-center text-white">
                    {project.title}
                  </h2>
                  <div>
                    {project.categories.map((item, i) => (
                      <span key={i} className="text-sm text-white">
                        {item}
                      </span>
                    ))}
                  </div>
                  <Link href={`/portfolio/${project.slug}`}>
                    <a className="  text-white absolute bottom-10 flex items-center justify-center">
                      <span className="text-sm mr-2">View project</span>
                      <span className="text-3xl w-12 h-12 bg-black rounded-full flex items-center justify-center">
                        <BsArrowRight />
                      </span>
                    </a>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Portfolio;

export async function getStaticProps() {
  const projects = await getAllFilesMetadata("projects");

  const organizedProjects = projects
    .sort((a: Project, b: Project) => a.date.localeCompare(b.date))
    .reverse();

  return {
    props: { projects: organizedProjects },
  };
}
