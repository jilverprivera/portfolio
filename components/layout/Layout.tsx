import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import SEO from 'seo'
import { ILayout } from 'interfaces'

export const Layout = ({ children, metadata }: ILayout) => {
  const { title, description, slug, date } = metadata
  const targetRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!targetRef.current) return
      const { clientX, clientY } = ev
      targetRef.current.style.setProperty('--x', `${clientX}px`)
      targetRef.current.style.setProperty('--y', `${clientY}px`)
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <>
      <SEO title={title} description={description} slug={slug} date={date} />
      <motion.main
        ref={targetRef}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: -0 }}
        exit={{ opacity: 0, y: -20 }}
        className=" w-full min-h-screen bg-neutral-950 py-16 before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,100px)_var(--y,_100px),_var(--color-secondary)_0%,_transparent_50%)] before:opacity-50"
      >
        {children}
      </motion.main>
    </>
  )
}

