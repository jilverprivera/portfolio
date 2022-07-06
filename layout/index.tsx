import SEO from "../seo";

import { layoutProps } from "../interfaces/layout";
import { domAnimation, LazyMotion, m } from "framer-motion";
import PAGE_TRANSITION from "../utils/pageTransitionVariants";
import { useWindow } from "../hooks/useWindow";

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
    </>
  );
};

export default Layout;
