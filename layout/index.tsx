import { useRouter } from "next/router";

import SEO from "../seo";

import { layoutProps } from "../interfaces/layout";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Layout = (props: layoutProps) => {
  const { metadata } = props;
  const { title, description, slug, date } = metadata;

  const { pathname } = useRouter();

  return (
    <>
      <SEO title={title} description={description} slug={slug} date={date} />
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
