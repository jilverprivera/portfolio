import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { getAllFilesMetadata } from "../../lib/mdx";

import { Blog, Post } from "../../interfaces/posts";

import Layout from "../../layout";

const Blog = ({ posts }: Blog) => {
  const [searchedArticles, setSearchedArticles] = useState("");
  const filteredPosts = posts.filter((post: Post) =>
    post.title.toLowerCase().includes(searchedArticles.toLowerCase())
  );

  return (
    <Layout
      type={"website"}
      metadata={{
        title: "Blog - Jilver Pacheco",
        description: `Software Developer, Electronic Engineer, and robotics enthusiast.`,
        slug: "",
        date: null,
      }}
    >
      <section className="w-full bg-zinc-50">
        <div className="max-w-screen-xl mx-auto py-24">
          <h1 className="font-normal text-5xl tracking-widest">Blog</h1>
        </div>
        <div className="w-full bg-white  pt-12">
          <div className="max-w-screen-xl w-full mx-auto">
            <div className="relative w-2/4 mb-8 mx-auto">
              <input
                aria-label="Search articles"
                type="text"
                onChange={(e) => setSearchedArticles(e.target.value)}
                placeholder="Search articles"
                className="relative w-full mx-auto px-4 py-2 text-gray-900  bg-white border border-gray-200 rounded-md dark:border-neutral-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-800 dark:text-gray-100"
              />
              <svg
                className="absolute w-5 h-5 text-gray-400 right-3 top-2/4 -translate-y-2/4 dark:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <div className="flex flex-col items-center-justify-center">
              {!filteredPosts.length && (
                <p className="mb-4 text-lg text-center text-gray-600 dark:text-gray-400">
                  No articles found, sorry 😔.
                </p>
              )}

              <AnimatePresence exitBeforeEnter>
                {filteredPosts.map((item: Post, index: number) => (
                  <motion.div
                    className="py-5 grid grid-cols-5 border-b-2 last:border-b-0"
                    key={item.slug}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.2 * index },
                    }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-sm font-light uppercase">
                        {item.date}
                      </span>
                    </div>
                    <Link href={`/blog/${item.slug}`}>
                      <a className="cursor-pointer col-span-4">
                        <h2 className="text-xl font-semibold">{item.title}</h2>
                        <div>
                          {item.tags.map((tag, i: number) => (
                            <span
                              key={i}
                              className="mr-3 uppercase text-sm font-normal text-violet-800 dark:text-yellow-500"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="text-base font-normal">
                          {item.description}
                        </p>
                      </a>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps() {
  const allPosts = await getAllFilesMetadata("posts");

  const posts = allPosts.sort((a: any, b: any) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return {
    props: { posts },
  };
}
