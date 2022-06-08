import Link from "next/link";
import { motion } from "framer-motion";
import { Blog, Post } from "../interfaces/posts";

const LatestPost = ({ posts }: Blog) => {
  return (
    <div
      id="latest-posts"
      className="relative max-w-6xl min-h-screen flex flex-col items-start justify-start mx-auto"
    >
      <div className=" w-full pt-16 pb-8 flex items-center justify-between mb-8">
        <div>
          <h2 className="text-5xl font-bold mb-3">Latest Posts</h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="uppercase text-sm text-gray-500 dark:text-gray-300 mb-2">
            Want to view all my posts?
          </span>
          <Link href="/blog">
            <span className="text-base cursor-pointer">
              jilverpacheco.vercel.app
              <span className="text-base text-violet-800 dark:text-yellow-500">
                /blog
              </span>
            </span>
          </Link>
        </div>
      </div>

      {posts.map((item: Post, index: number) => (
        <motion.div
          className="mb-5"
          key={item.slug}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.2 * index }}
        >
          <Link href={`/blog/${item.slug}`}>
            <a className="cursor-pointer">
              <h2 className="text-sm font-normal">{item.date}</h2>
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
            </a>
          </Link>
          <p className="text-base font-medium">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default LatestPost;
