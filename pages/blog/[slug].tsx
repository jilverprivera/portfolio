import React from "react";
import { Props } from "../../interfaces/staticProps";
import Layout from "../../layout";
import { getFileBySlug, getFiles } from "../../lib/mdx";
import { MDXRemote } from "next-mdx-remote";
import { MDXComponents } from "../../components/mdx/Components";
import { Post } from "../../interfaces/posts";
interface PostProps {
  source: any;
  frontmatter: Post;
}

const SinglePost = ({ source, frontmatter }: PostProps) => {
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
      <div className=" w-full pb-6 flex flex-col items-center justify-center">
        <span className="text-sm tracking-wide text-center text-gray-500 dark:text-stone-400 font-semibold">
          {frontmatter.date}
        </span>
        <h1 className="text-3xl text-center font-bold">{frontmatter.title}</h1>
        <hr className="w-24 mt-8 border-t-2 mx-auto" />
      </div>
      <div className="mt-8 prose sm:prose-sm lg:prose-lg mx-auto">
        <MDXRemote {...source} components={MDXComponents} />
      </div>
    </Layout>
  );
};

export default SinglePost;

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
