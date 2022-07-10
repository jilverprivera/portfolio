import { useContext } from "react";

import { AppContext } from "../context/AppContext";

import Layout from "../layout";

import { getAllFilesMetadata } from "../lib/mdx";

import type { NextPage } from "next";
import { Post } from "../interfaces/posts";
import { Project } from "../interfaces/projects";

import Projects from "../components/Projects";
import Posts from "../components/Posts";

interface Props {
  posts: Post[];
  projects: Project[];
}

const Home: NextPage<Props> = ({ posts, projects }) => {
  const { cursorEnter, cursorLeave } = useContext(AppContext);
  return (
    <Layout
      type={"website"}
      metadata={{
        title: "Jilver Pacheco – Software Developer & Electronic Engineer.",
        description: `Software Developer, Electronic Engineer, and robotics enthusiast.`,
      }}
    >
      <section className="max-w-screen-xl mx-auto principal xs:w-11/12 sm:w-11/12 md:w-11/12 lg:w-11/12 xl:w-full xs:py-10 sm:py-16 md:py-24 lg:py-24 flex xs:flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row items-center sm:justify-center xs:justify-center md:justify-between lg:justify-between ">
        <div className="xs:w-full sm:w-full md:max-w-md lg:max-w-lg xs:mt-5 sm:mt-10 md:mt-0 lg:mt-0 xs:flex xs:flex-col xs:justify-center xs:items-center sm:flex sm:flex-col sm:justify-center sm:items-center md:block lg:block">
          <h2 className="text-base font-chillax font-chillaxMedium">
            Software Developer | Electronic Engineer
          </h2>
          <h1 className="text-5xl font-chillaxMedium mt-2 mb-5">
            Jilver Pacheco
          </h1>
          <p className="xs:text-center sm:text-center md:text-left lg:text-left font-chillaxRegular">
            Welcome to my tiny space on the WWW, here I show my side projects,
            talk about things I like.
          </p>
          <p className="my-5">
            From <strong>Colombia</strong> to the World❤️.
          </p>
          <a
            href="/resume_en.pdf"
            download
            className="border-2 px-3 py-1.5 rounded-full"
            onMouseEnter={() => cursorEnter()}
            onMouseLeave={() => cursorLeave()}
          >
            <span className="text-black dark:text-white">Download CV</span>
          </a>
        </div>
        <div className="xs:max-w-sm sm:max-w-md md:max-w-sm md:ml-10 lg:ml-0 lg:max-w-xl w-full h-96 flex items-center justify-center bg-stone-100 dark:bg-zinc-900">
          <span className="xs:text-5xl sm:text-5xl md:text-7xl lg:text-9xl font-chillaxBold">
            IMAGE
          </span>
        </div>
      </section>

      <section className="max-w-2xl mx-auto my-10 py-5 flex flex-col items-center justify-center">
        <h2 className="font-ClashGroteskMedium text-3xl text-zinc-800 dark:text-white text-center">
          Hey!, I&apos;m Jilver Pacheco and I develop things for the Internet.
        </h2>
        <a
          href="/resume_en.pdf"
          download
          className="border-2 mt-5 px-3 py-1.5 rounded-md text-black dark:text-white hover:border-pink-500 hover:bg-pink-500 dark:hover:border-violet-500 dark:hover:bg-violet-500 duration-200"
          onMouseEnter={() => cursorEnter()}
          onMouseLeave={() => cursorLeave()}
        >
          Download CV
        </a>
      </section>

      <Projects projects={projects} />
      <Posts posts={posts} />
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = await getAllFilesMetadata("posts");
  const projects = await getAllFilesMetadata("projects");

  const sortedProjects = projects
    .sort(
      (a: Project, b: Project) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    .slice(0, 6);

  const sortedPosts = posts
    .sort(
      (a: Project, b: Project) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    .slice(0, 3);

  return {
    props: { posts: sortedPosts, projects: sortedProjects },
  };
}
