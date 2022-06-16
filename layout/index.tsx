import SEO from "../seo";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { layoutProps } from "../interfaces/layout";

const Layout = ({ children, metadata, type }: layoutProps) => {
  const { title, description, slug, date } = metadata;

  return (
    <>
      <SEO title={title} description={description} slug={slug} date={date} />
      <Header />
      <div
        className={`mx-auto ${
          type === "post" ? "max-w-6xl mt-8 dark:prose-zinc" : "w-full"
        }`}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
