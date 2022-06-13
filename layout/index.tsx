import { AnimatePresence, motion } from "framer-motion";

import SEO from "../seo";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import { layoutProps } from "../interfaces/layout";
import { variants } from "../helpers/variants";
import { useEffect } from "react";

const Layout = ({ children, metadata, type }: layoutProps) => {
  const { title, description, slug, date } = metadata;

  return (
    <>
      <SEO title={title} description={description} slug={slug} date={date} />
      <Header />
      <div
        className={`mx-auto 
        ${
          type === "post"
            ? "max-w-5xl flex flex-col items-center justify-center"
            : "w-full "
        }
         `}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
