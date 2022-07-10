import React from "react";
import { Props } from "../../interfaces/staticProps";
import Layout from "../../layout";
import { getFileBySlug, getFiles } from "../../lib/mdx";
import { Post } from "../../interfaces/posts";
interface PostProps {
  source?: any;
  frontmatter: Post;
}

const Post = ({ source, frontmatter }: PostProps) => {
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
        <span className="text-sm tracking-wide font-semibold mb-2 text-center text-gray-500 dark:text-stone-300 ">
          {frontmatter.date}
        </span>
        <h1 className="text-4xl text-center font-bold">{frontmatter.title}</h1>
        <hr className="w-32 mt-8 border-t-2 mx-auto" />
      </div>
      {/* <div className="mt-8 mx-auto lg:prose-lg prose dark:prose-invert ">
        <MDXRemote {...source} components={MDXComponents} />
      </div> */}
      <div className="w-full my-16 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-3">Comming Soon 😎</h1>
        <h2 className="text-lg font-regular">Fixing little details...</h2>
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
