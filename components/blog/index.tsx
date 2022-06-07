import React, { useState } from "react";
// import { InferGetStaticPropsType } from 'next';

const Blog = ({ posts }: any) => {
  const [searchArticles, setSearchArticles] = useState("");

  //   const filteredBlogPosts = posts.filter((post: any) =>
  //     post.tags.toLowerCase().includes(searchArticles.toLowerCase())
  //   );

  return (
    <div className="max-w-7xl mx-auto min-h-screen grid grid-cols-6 pt-16">
      <div className="flex items-center justify-start">
        <p className="-rotate-90 uppercase font-bold tracking-widest">BLOG</p>
      </div>
      <div className=" col-span-5 relative w-3/5 mb-4 mx-auto ">
        <input
          aria-label="Search articles"
          type="text"
          onChange={(e) => setSearchArticles(e.target.value)}
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
    </div>
  );
};

export default Blog;
