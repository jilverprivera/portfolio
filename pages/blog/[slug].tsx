import React from "react";
import { Props } from "../../interfaces/staticProps";
import Layout from "../../layout";
import { getFileBySlug, getFiles } from "../../lib/mdx";

const Post = ({ source, frontmatter }: any) => {
  return (
    <Layout
      type="post"
      metadata={{
        title: frontmatter.title,
        description: frontmatter.description,
        slug: frontmatter.slug,
        date: frontmatter.date,
      }}
    >
      <div className="border-2 border-black principal flex flex-col items-center justify-center">
        <span>{frontmatter.date}</span>
        <h1 className="text-5xl font-bold">{frontmatter.title}</h1>
        <div>
          {frontmatter.tags.map((item: string, i: number) => (
            <span key={i} className="text-slate-500 uppercase text-sm mx-2">
              {item}
            </span>
          ))}
        </div>

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
