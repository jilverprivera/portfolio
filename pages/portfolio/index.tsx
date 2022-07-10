import Layout from "../../layout";
import PageTitle from "../../components/layout/PageTitle";
import ProjectCard from "../../components/ProjectCard";

import { getAllFilesMetadata } from "../../lib/mdx";

import { Project, Projects } from "../../interfaces/projects";

const Portfolio = ({ projects }: Projects) => {
  return (
    <Layout
      type={"website"}
      metadata={{
        title: "Portfolio - Jilver Pacheco",
        description: `Software Developer, Electronic Engineer, and robotics enthusiast.`,
      }}
    >
      <PageTitle title="Portfolio" />
      <section className="max-w-6xl mx-auto min-h-screen mt-10 xs:w-11/12 sm:w-11/12 md:w-11/12 lg:w-11/12 xl:w-full mb-10 grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        {projects.map((project: Project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </section>
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
