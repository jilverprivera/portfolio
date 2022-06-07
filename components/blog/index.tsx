import React, { useState } from "react";
// import { InferGetStaticPropsType } from 'next';

const Blog = ({ posts }: any) => {
  const [searchArticles, setSearchArticles] = useState("");

  //   const filteredBlogPosts = posts.filter((post: any) =>
  //     post.tags.toLowerCase().includes(searchArticles.toLowerCase())
  //   );

  return (
    <div className="max-w-7xl mx-auto min-h-screen grid grid-cols-6 pt-16">
      <div className="flex items-center justify-start">
        <p className="-rotate-90 uppercase font-bold tracking-widest">BLOG</p>
      </div>
    </div>
  );
};

export default Blog;
