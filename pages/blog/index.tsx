import Link from "next/link";
import React, { useState } from "react";
import { Blog, Post } from "../../interfaces/posts";
import Layout from "../../layout";
import { getAllFilesMetadata } from "../../lib/mdx";

const Blog = ({ posts }: Blog) => {
  const [searchedArticles, setSearchedArticles] = useState("");

  const filteredPosts = posts.filter((post: Post) =>
    post.title.toLowerCase().includes(searchedArticles.toLowerCase())
  );

  return (
    <Layout
      type={"website"}
      metadata={{
        title: "Jilver Pacheco - Blog",
        description: `Software Developer, Electronic Engineer, and robotics enthusiast.`,
        slug: "",
        date: null,
      }}
    >
      <div className="w-full min-h-screen ">
        <div className=" relative w-3/5 mb-4 mx-auto ">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchedArticles(e.target.value)}
            placeholder="Search articles"
            className="mt-16 relative w-full px-4 py-2 text-gray-900  bg-white border border-gray-200 rounded-md dark:border-neutral-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-800 dark:text-gray-100"
          />
          <svg
            className="mt-16 absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
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
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              No posts found.
            </p>
          )}

          {filteredPosts.map((item: Post) => (
            <div className="mt-16" key={item.slug}>
              <Link href={`/blog/${item.slug}`}>
                <div>
                  <h2>{item.title}</h2>
                  <div>
                    {item.tags.map((tag, i: number) => (
                      <span key={i}> {tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps() {
  const allPosts = await getAllFilesMetadata("posts");

  const posts = allPosts
    .sort((a: any, b: any) => a.date.localeCompare(b.date))
    .reverse();

  return {
    props: { posts },
  };
}
