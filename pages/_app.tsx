import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { AppProvider } from 'context'
import { NoiseBackground } from 'components/layout'
import 'globals.css'

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
  router
}: AppProps) => {
  return (
    <AppProvider>
      <NoiseBackground />
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </AppProvider>
  )
}

export default MyApp

