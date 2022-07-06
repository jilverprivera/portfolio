import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import "../styles/globals.css";
import { AppProvider } from "../context/AppContext";

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
  router,
}: AppProps) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <SessionProvider session={session}>
        <AppProvider>
          <Header />
          <AnimatePresence exitBeforeEnter initial={false}>
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
          <Footer />
        </AppProvider>
      </SessionProvider>
    </ThemeProvider>
  );
};

export default MyApp;
