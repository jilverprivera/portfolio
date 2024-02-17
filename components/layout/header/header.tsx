'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { NavButton } from './nav-button'
import { Navigation } from './navigation'
import { useEscapePress } from 'utils/hooks/useEscapePress'

const menu = {
  open: {
    width: '480px',
    height: '650px',
    top: '0px',
    right: '0px',
    transition: { duration: 0.75, type: 'tween', ease: [0.76, 0, 0.24, 1] }
  },
  closed: {
    width: '112px',
    height: '48px',
    top: '0px',
    right: '0px',
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: 'tween',
      ease: [0.76, 0, 0.24, 1]
    }
  }
}

export const Header = () => {
  const [isActive, setIsActive] = useState(false)
  useEscapePress(() => setIsActive(false))
  // const targetRef = useRef<HTMLDivElement | null>(null)

  // const bgColor = useMotionValue(0)
  // const background = useTransform(bgColor, [0, typeof window !== 'undefined' ? window.innerHeight : 0], ['#fafafa', '#0a0a0a'])
  // const textColor = useTransform(bgColor, [0, typeof window !== 'undefined' ? window.innerHeight : 0], ['#0a0a0a', '#fafafa'])

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

  return (
    <motion.div className="fixed right-8 top-8 z-50 rounded-3xl bg-white">
      <motion.div className="max-w-md w-full h-full relative" variants={menu} animate={isActive ? 'open' : 'closed'} initial="closed">
        <AnimatePresence>{isActive && <Navigation setIsActive={setIsActive} />}</AnimatePresence>
      </motion.div>
      <NavButton isActive={isActive} setIsActive={setIsActive} />
    </motion.div>
  )
}

