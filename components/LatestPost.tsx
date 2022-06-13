import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import PostCard from "./PostCard";
import SectionTitle from "./layout/SectionTitle";

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
      className="bg-slate-100 dark:bg-zinc-900 overflow-hidden w-full"
    >
      <div className="max-w-7xl mx-auto latest-post flex flex-col items-center justify-between mb-16">
        <SectionTitle title="Latest Posts" type="posts" path="/blog" />
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -currentWidth }}
          ref={ref}
          className="w-full xs:px-2 lg:px-0 mx-auto flex flew-row items-center justify-start"
        >
          {posts.map((post: Post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LatestPost;
