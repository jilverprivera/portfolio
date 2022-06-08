import type { NextPage } from "next";

import Layout from "../layout";
import Banner from "../components/Banner";
import { getAllFilesMetadata } from "../lib/mdx";
import LatestPost from "../components/LatestPost";
import { Blog } from "../interfaces/posts";
import { Projects } from "../interfaces/projects";
import LatestProjects from "../components/LatestProjects";

interface Props {
  posts: Blog;
  projects: Projects;
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

      <LatestProjects projects={projects} />
      <LatestPost posts={posts} />
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = await getAllFilesMetadata("posts");
  const projects = await getAllFilesMetadata("projects");

  const sortedProjects = projects
    .sort((a: any, b: any) => a.date.localeCompare(b.date))
    .reverse()
    .slice(0, 6);

  const sortedPosts = posts
    .sort((a: any, b: any) => a.date.localeCompare(b.date))
    .reverse()
    .slice(0, 4);

  return {
    props: { posts: sortedPosts, projects: sortedProjects },
  };
}
