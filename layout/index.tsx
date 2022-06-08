import { AnimatePresence, motion } from "framer-motion";

import SEO from "../seo";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import { layoutProps } from "../interfaces/layout";
import { variants } from "../helpers/variants";

const Layout = (props: layoutProps) => {
  const { metadata, type } = props;
  const { title, description, slug, date } = metadata;

  return (
    <>
      <SEO title={title} description={description} slug={slug} date={date} />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <motion.div
          className={`mx-auto ${type !== "post" ? "w-full" : "w-3/5"}`}
          variants={variants}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          {props.children}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default Layout;
