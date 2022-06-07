import { useRouter } from "next/router";

import SEO from "../seo";

import { layoutProps } from "../interfaces/layout";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Layout = (props: layoutProps) => {
  const { metadata, type } = props;
  const { title, description, slug, date } = metadata;

  return (
    <>
      <SEO title={title} description={description} slug={slug} date={date} />
      <Header />
      <div className={`mx-auto ${type !== "post" ? "w-full" : "w-3/5"}`}>
        {props.children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
