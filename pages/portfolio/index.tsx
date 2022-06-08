import Image from "next/image";
import Link from "next/link";

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
            {currentHover === index && (
              <div className="absolute top-0 left-0 right-0  p-4 bg-project-info">
                <p className="text-9xl font-bold text-zinc-900">0{index + 1}</p>
                <h2>{project.title}</h2>
                <div>
                  {project.categories.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}
                </div>
                <Link href={`/portfolio/${project.slug}`}>
                  <span>View project</span>
                </Link>
              </div>
            )}
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
