import type { NextPage } from "next";
import { useTheme } from "next-themes";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import About from "../components/about";
import Banner from "../components/banner";
import Layout from "../layout";

const Home: NextPage = (props: any) => {
  const { children, ...customMeta } = props;

  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  return (
    <Layout
      type={"website"}
      metadata={{
        title: "Jilver Pacheco – Software Developer & Electronic Engineer.",
        description: `Software Developer, Electronic Engineer, and robotics enthusiast.`,
        slug: "",
        date: null,
      }}
    >
      <div id="banner">
        <Banner />
      </div>
      <div id="about">
        <About />
      </div>
      <div
        className=" max-w-7xl mx-auto min-h-screen flex items-center justify-between"
        id="portfolio"
      >
        Portfolio
      </div>
      <div
        className="w-full min-h-screen flex items-center justify-between max-w-7xl mx-auto"
        id="blog"
      >
        Blog
      </div>
    </Layout>
  );
};

export default Home;
