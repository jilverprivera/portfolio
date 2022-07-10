import { useContext } from "react";
import { domAnimation, LazyMotion, m, motion } from "framer-motion";

import { AppContext } from "../context/AppContext";
import { useWindow } from "../hooks/useWindow";

import SEO from "../seo";

import PAGE_TRANSITION from "../utils/PAGE_TRANSITIONS";

import { layoutProps } from "../interfaces/layout";

const layoutMotionProps = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: PAGE_TRANSITION.DURATION,
      ease: PAGE_TRANSITION.EASE,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: PAGE_TRANSITION.DURATION,
      ease: PAGE_TRANSITION.EASE,
    },
  },
};

const Layout = ({ children, metadata, type }: layoutProps) => {
  const { title, description, slug, date } = metadata;
  const { cursor } = useContext(AppContext);
  const { mousePosition } = useWindow();

  const cursorVariants = {
    default: {
      height: 12,
      width: 12,
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      zIndex: 1000,
    },
    text: {
      height: 48,
      width: 48,
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      zIndex: 1000,
    },
  };

  return (
    <>
      <SEO title={title} description={description} slug={slug} date={date} />
      <LazyMotion features={domAnimation}>
        <m.main
          className={`mx-auto w-full bg-white dark:bg-zinc-900 ${
            type === "post" && "max-w-5xl mt-8"
          }`}
          {...layoutMotionProps}
        >
          {children}
        </m.main>
      </LazyMotion>
      <motion.div
        className={`pointer-events-none fixed top-0 left-0 rounded-full  ${
          cursor === "text"
            ? "mix-blend-difference dark:mix-blend-difference bg-zinc-50 dark:bg-zinc-800"
            : "bg-zinc-900 dark:bg-white"
        }`}
        variants={cursorVariants}
        animate={cursor}
      />
    </>
  );
};

export default Layout;
