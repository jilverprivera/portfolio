import { useState } from "react";

import { getAllFilesMetadata } from "../../lib/mdx";

import { Post } from "../../interfaces/posts";

import Layout from "../../layout";
import PageTitle from "../../components/layout/PageTitle";
import PostSearch from "../../components/PostSearch";
import PostCard from "../../components/PostCard";

interface Props {
  posts: Post[];
  lastPost?: Post;
}

const Blog = ({ posts }: Props) => {
  const [searchedArticles, setSearchedArticles] = useState<string>("");

  const filteredPosts = posts.filter((post: Post) =>
    post.title.toLowerCase().includes(searchedArticles.toLowerCase())
  );

  return (
    <Layout
      type={"website"}
      metadata={{
        title: "Blog - Jilver Pacheco",
        description: `My personal blog where I write the things I Like.`,
      }}
    >
      <PageTitle title="Blog" />
      <section className="max-w-6xl mx-auto mt-10 xs:w-11/12 sm:w-11/12 md:w-11/12 lg:w-11/12 xl:w-full bg-white dark:bg-zinc-900">
        <PostSearch setSearchedArticles={setSearchedArticles} />
        <div className="flex flex-col items-center-justify-center min-h-screen">
          {!filteredPosts.length && (
            <span className="mb-4 text-lg text-center text-gray-600 dark:text-gray-400">
              No articles found, sorry 😔.
            </span>
          )}

          {filteredPosts.map((post: Post, index: number) => (
            <PostCard key={post.slug} {...post} />
          ))}
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

  const lastPost = posts[0];

  return {
    props: { posts, lastPost },
  };
}
