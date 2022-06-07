import React from "react";
import { Props } from "../../interfaces/staticProps";
import { getFileBySlug, getFiles } from "../../lib/mdx";

const Project = () => {
  return <div>Project</div>;
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
