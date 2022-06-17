import React from "react";
import { Project } from "../../interfaces/projects";
import { Props } from "../../interfaces/staticProps";
import Layout from "../../layout";
import { getFileBySlug, getFiles } from "../../lib/mdx";

interface ProjectProps {
  source?: any;
  frontmatter: Project;
}

const Project = ({ source, frontmatter }: ProjectProps) => {
  return (
    <Layout
      type={"website"}
      metadata={{
        title: frontmatter.title,
        description: frontmatter.description,
        slug: frontmatter.slug,
        date: frontmatter.date,
      }}
    >
      <div className="w-full principal flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-3">Comming Soon 😎</h1>
        <h2 className="text-lg font-regular">Fixing little details...</h2>
      </div>
    </Layout>
  );
};

export default Project;

export async function getStaticPaths() {
  const projects = await getFiles("projects");
  const paths = projects.map((project) => ({
    params: {
      slug: project.replace(/\.mdx/, ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: Props) {
  const { slug } = params;
  const { source, frontmatter } = await getFileBySlug("projects", slug);
  return {
    props: {
      source,
      frontmatter: {
        ...frontmatter,
      },
    },
  };
}
