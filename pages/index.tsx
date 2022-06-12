import Link from "next/link";
import type { NextPage } from "next";

import { Post } from "../interfaces/posts";
import { Project } from "../interfaces/projects";

import Layout from "../layout";
import Banner from "../components/Banner";
import { getAllFilesMetadata } from "../lib/mdx";
import LatestPost from "../components/LatestPost";
import LatestProjects from "../components/LatestProjects";

interface Props {
  posts: Post[];
  projects: Project[];
}

const Home: NextPage<Props> = ({ posts, projects }) => {
  return (
    <Layout
      type={"website"}
      metadata={{
        title: "Jilver Pacheco – Software Developer & Electronic Engineer.",
        description: `Software Developer, Electronic Engineer, and robotics enthusiast.`,
        slug: "",
        date: null,
      }}
    >
      <Banner />

      <LatestPost posts={posts} />
      <LatestProjects projects={projects} />
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = await getAllFilesMetadata("posts");
  const projects = await getAllFilesMetadata("projects");

  const sortedProjects = projects
    .sort((a: any, b: any) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, 6);

  const sortedPosts = posts
    .sort((a: any, b: any) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, 4);

  return {
    props: { posts: sortedPosts, projects: sortedProjects },
  };
}
