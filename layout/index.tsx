import SEO from "../seo";

import { layoutProps } from "../interfaces/layout";
import { domAnimation, LazyMotion, m, motion } from "framer-motion";
import PAGE_TRANSITION from "../utils/pageTransitionVariants";
import { useWindow } from "../hooks/useWindow";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const layoutMotionProps = {
  initial: { opacity: 0, y: -20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: PAGE_TRANSITION.DURATION,
      ease: PAGE_TRANSITION.EASE,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: PAGE_TRANSITION.DURATION,
      ease: PAGE_TRANSITION.EASE,
    },
  },
};

const Layout = ({ children, metadata, type }: layoutProps) => {
  const { title, description, slug, date } = metadata;
  const { mousePosition } = useWindow();

  const { cursor } = useContext(AppContext);

  const cursorVariants = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      // zIndex: -1,
    },
    text: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      zIndex: 1,
      // backgroundColor: "red",
    },
  };

  return (
    <>
      <SEO title={title} description={description} slug={slug} date={date} />
      <LazyMotion features={domAnimation}>
        <m.main
          className={`mx-auto w-full ${type === "post" && "max-w-5xl mt-8"}`}
          {...layoutMotionProps}
        >
          {children}
        </m.main>
      </LazyMotion>
      <motion.div
        className={`pointer-events-none fixed top-0 left-0 -translate-x-2/4 -translate-y-2/4 h-6 w-6 rounded-full bg-zinc-50 dark:bg-zinc-800 ${
          cursor === "text" ? "mix-blend-difference" : ""
        }`}
        variants={cursorVariants}
        animate={cursor}
      />
    </>
  );
};

export default Layout;
