import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import LatestPostCard from "./LatestPostCard";
import SectionTitle from "../layout/components/SectionTitle";

import { Blog, Post } from "../interfaces/posts";

const LatestPost = ({ posts }: Blog) => {
  const ref = useRef<HTMLDivElement | any>();

  const [currentWidth, setCurrentWidth] = useState<number>(0);

  useEffect(() => {
    setCurrentWidth(ref.current?.scrollWidth - ref.current?.offsetWidth);
  }, []);

  return (
    <motion.div
      className="bg-slate-100 dark:bg-zinc-900 overflow-hidden w-full pb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <SectionTitle title="Latest Posts" type="posts" path="/blog" />

      <div className="max-w-screen-xl mx-auto">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -currentWidth }}
          ref={ref}
          className="flex flew-row items-center justify-start"
        >
          {posts.map((post: Post) => (
            <LatestPostCard key={post.slug} {...post} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LatestPost;
