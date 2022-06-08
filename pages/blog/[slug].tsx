import React from "react";
import { Props } from "../../interfaces/staticProps";
import Layout from "../../layout";
import { getFileBySlug, getFiles } from "../../lib/mdx";

const Post = ({ source, frontmatter }: any) => {
  return (
    <Layout
      type="posts"
      metadata={{
        title: frontmatter.title,
        description: frontmatter.description,
        slug: frontmatter.slug,
        date: frontmatter.date,
      }}
    >
      <div className="w-full principal flex items-center justify-center">
        <h1 className="text-5xl font-bold">Currently working on it</h1>
      </div>
    </Layout>
  );
};

export default Post;

export async function getStaticPaths() {
  const posts = await getFiles("posts");
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: Props) {
  const { slug } = params;
  const { source, frontmatter } = await getFileBySlug("posts", slug);

  return {
    props: {
      source,
      frontmatter: {
        ...frontmatter,
      },
    },
  };
}
