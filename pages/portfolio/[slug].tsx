import React from "react";
import { Props } from "../../interfaces/staticProps";
import Layout from "../../layout";
import { getFileBySlug, getFiles } from "../../lib/mdx";

const Project = ({ source, frontmatter }: any) => {
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
      <div className="w-full principal flex items-center justify-center">
        <h1 className="text-5xl font-bold">Currently working on it</h1>
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
