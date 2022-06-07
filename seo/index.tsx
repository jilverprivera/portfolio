import Head from "next/head";
import { useRouter } from "next/router";

import { metadata } from "../interfaces/seo";

const SEO = ({ title, date, description }: metadata) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Jilver  Pacheco Rivera" />
      <meta property="og:url" content={`https://leerob.io${router.asPath}`} />
      <link rel="canonical" href={`https://leerob.io${router.asPath}`} />
      <meta property="og:description" content={description} />
      <meta name="description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@jilverprivera" />
      <meta name="twitter:title" content={title} />
      <meta property="article:published_time" content={String(date)} />
      {date !== null && (
        <meta property="article:published_time" content={String(date)} />
      )}
    </Head>
  );
};

export default SEO;
