import type { NextPage } from "next";

import Layout from "../layout";
import Banner from "../components/banner";
import Presentation from "../components/about";
import Blog from "../components/blog";
import { getAllFilesMetadata } from "../lib/mdx";

const Home: NextPage = (props: any) => {
  const { children } = props;

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
      <div id="banner">
        <Banner />
      </div>

      <div
        className=" max-w-7xl mx-auto min-h-screen flex items-center justify-between"
        id="portfolio"
      >
        Portfolio
      </div>

      <div id="blog">
        <Blog post />
      </div>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const allPosts = await getAllFilesMetadata("posts");

  const posts = allPosts
    .sort((a: any, b: any) => a.date.localeCompare(b.date))
    .reverse()
    .slice(0, 4);

  return {
    props: { posts },
  };
}
