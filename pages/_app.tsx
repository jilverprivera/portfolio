import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { AppProvider } from 'context'
import 'globals.css'

const MyApp = ({ Component, pageProps: { session, ...pageProps }, router }: AppProps) => {
  return (
    <AppProvider>
      <AnimatePresence mode="sync">
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </AppProvider>
  )
}

export default MyApp

