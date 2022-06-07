import Image from "next/image";
import Link from "next/link";

import { getAllFilesMetadata } from "../../lib/mdx";

import { Project, Projects } from "../../interfaces/projects";

import Layout from "../../layout";

const Portfolio = ({ projects }: Projects) => {
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
      <div className="w-full grid grid-cols-3 min-h-screen">
        {projects.map((project: Project, index: number) => (
          <div key={project.slug} className="mt-16">
            <Image
              src={project.cover_image}
              alt={project.title}
              width={512}
              height={360}
              layout="responsive"
              objectFit="cover"
            />
            4<p>0{index + 1}</p>
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
