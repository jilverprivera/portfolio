import { Fragment, useEffect, useRef } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import { Header } from './header'
import { SEO } from 'utils/seo'
import type { ILayout } from 'interfaces'

export const Layout = ({ children, metadata }: ILayout) => {
  const { title, description, slug, date } = metadata
  const targetRef = useRef<HTMLDivElement | null>(null)
  const bgColor = useMotionValue(0)
  // const background = useTransform(bgColor, [0, typeof window !== 'undefined' ? window.innerHeight : 0], ['#FFF', '#FFFFFF'])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY * 1.5
      bgColor.set(scrollPosition)
    }
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
      window.addEventListener('scroll', handleScroll)
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [bgColor])

  return (
    <Fragment>
      <SEO title={title} description={description} slug={slug} date={date} />
      <Header />
      <motion.main
        ref={targetRef}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: -0 }}
        exit={{ opacity: 0, y: -20 }}
        className="w-full min-h-screen "
        // style={{ background }}
      >
        {children}
      </motion.main>
    </Fragment>
  )
}

