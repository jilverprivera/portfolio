import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

import { Blog, Post } from "../interfaces/posts";

const LatestPost = ({ posts }: Blog) => {
  const ref = useRef<HTMLDivElement | any>();
  const [currentWidth, setCurrentWidth] = useState<number>(0);
  useEffect(() => {
    setCurrentWidth(ref.current?.scrollWidth - ref.current?.offsetWidth);
  }, []);

  return (
    <div
      id="latest-posts"
      className="bg-slate-100 dark:bg-zinc-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto latest-post flex flex-col items-center justify-between mb-16">
        <div className="w-full mx-auto pt-10 flex items-center justify-between mb-5">
          <h2 className="text-4xl font-semibold mb-3">Latest Posts</h2>
          <div className="flex flex-col items-center justify-center">
            <span className="uppercase text-sm text-gray-500 dark:text-gray-300 mb-2">
              View all posts
            </span>
            <Link href="/blog">
              <a>
                <span className="text-base cursor-pointer">
                  jilverpacheco.vercel.app
                  <span className="text-base text-violet-800 dark:text-yellow-500">
                    /blog
                  </span>
                </span>
              </a>
            </Link>
          </div>
        </div>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -currentWidth }}
          ref={ref}
          className="w-full flex flew-row items-center justify-start"
        >
          {posts.map((post: Post, i: number) => (
            <div
              key={i}
              className="post-card h-96 rounded-xl mr-8 p-6  bg-white dark:bg-zinc-800"
            >
              <span className="text-sm text-gray-400">{post.date}</span>
              <h2 className="text-xl font-bold leading-7 mt-2">{post.title}</h2>
              <div className="my-2">
                {post.tags.map((item, i) => (
                  <span key={i} className="text-sm text-gray-400 mr-2">
                    {item}
                  </span>
                ))}
              </div>
              <p className="leading-7 text-base mb-8">{post.description}</p>

              <Link href={`/blog/${post.slug}`}>
                <a className="flex items-center justify-start">
                  <span className="text-md mr-2">Read more</span>
                  <span className="w-10 h-10 rounded-full flex items-center justify-center bg-black text-white">
                    <BsArrowRight />
                  </span>
                </a>
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LatestPost;
