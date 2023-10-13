import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { AppProvider } from 'context'
import { Footer, Header } from 'components/layout'
import 'globals.css'

const MyApp = ({ Component, pageProps: { session, ...pageProps }, router }: AppProps) => {
  const { pathname } = router
  return (
    <AppProvider>
      <Header />
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
      <Footer />
    </AppProvider>
  )
}

export default MyApp

