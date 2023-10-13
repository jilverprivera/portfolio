import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import SEO from 'seo'
import { ILayout } from 'interfaces'
// import { useRouter } from 'next/router'

export const LayoutHOC = ({ children, metadata }: ILayout) => {
  const { title, description, slug, date } = metadata
  const targetRef = useRef<HTMLDivElement | null>(null)

  return (
    <>
      <SEO title={title} description={description} slug={slug} date={date} />
      <motion.main
        ref={targetRef}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: -0 }}
        exit={{ opacity: 0, y: -20 }}
        className="  w-full min-h-screen bg-neutral-950"
        // className="w-full min-h-screen before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,100px)_var(--y,_100px),_var(--color-secondary)_0%,_transparent_25%)] before:opacity-50"
        // style={{ background: pathname === '/' ? background : '#0a0a0a' }}
      >
        {children}
      </motion.main>
    </>
  )
}

// const bgColor = useMotionValue(0)
// const background = useTransform(bgColor, [0, typeof window !== 'undefined' ? window.innerHeight : 0], ['#FFFFFF', '#0a0a0a'])

// const { pathname } = useRouter()
// useEffect(() => {
//   const updateMousePosition = (ev: MouseEvent) => {
//     if (!targetRef.current) return
//     const { clientX, clientY } = ev
//     targetRef.current.style.setProperty('--x', `${clientX}px`)
//     targetRef.current.style.setProperty('--y', `${clientY}px`)
//   }
//   window.addEventListener('mousemove', updateMousePosition)
//   return () => {
//     window.removeEventListener('mousemove', updateMousePosition)
//   }
// }, [])

// useEffect(() => {
//   const handleScroll = () => {
//     const scrollPosition = window.scrollY * 1.5
//     bgColor.set(scrollPosition)
//   }
//   if (typeof window !== 'undefined') {
//     window.addEventListener('scroll', handleScroll)
//   }
//   return () => {
//     if (typeof window !== 'undefined') {
//       window.removeEventListener('scroll', handleScroll)
//     }
//   }

// }, [bgColor])

