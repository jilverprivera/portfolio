import SectionTitle from "./layout/SectionTitle";
import PostCard from "./PostCard";

import { Blog, Post } from "../interfaces/posts";

const Posts = ({ posts }: Blog) => {
  return (
    <section className="max-w-screen-xl mx-auto xs:w-11/12 sm:w-11/12 md:w-11/12 lg:w-11/12 xl:w-full">
      <SectionTitle title="Latest Posts" />
      {posts.map((post: Post) => (
        <PostCard key={post.slug} {...post} />
      ))}
    </section>
  );
};

export default Posts;
