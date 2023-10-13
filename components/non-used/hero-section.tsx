import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { AnimatedLetters } from 'components/non-used/animated-letters-component'
import { LETTER_ANIMATION_PROPS } from 'utils/transitions'

export const HeroSection = () => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ['end end', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const zIndex = useTransform(scrollYProgress, [0, 0.75], [1, -1])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const position = useTransform(scrollYProgress, (pos) => (pos >= 1 ? 'relative' : 'fixed'))

  return (
    <motion.section style={{ opacity, zIndex }} ref={targetRef} className="relative h-screen" id="hero">
      <motion.div
        style={{ position, scale, x: '-50%' }}
        className="fixed left-1/2 z-10 max-w-screen-3xl w-11/12 lg:pt-32 lg:pb-32 mx-auto flex flex-col items-start space-y-8 text-neutral-400"
      >
        <div className="w-full flex flex-col items-end justify-center">
          <h1 className="text-[9.625rem] font-bold flex flex-col items-end justify-center w-full leading-3 tracking-tight">
            <span className="w-full space-x-12">
              <AnimatedLetters title="Software" variants={LETTER_ANIMATION_PROPS} color="text-neutral-800" />
              <AnimatedLetters title="Developer" variants={LETTER_ANIMATION_PROPS} color="text-neutral-800" />
            </span>
            <p className="space-x-12">
              <AnimatedLetters title="&" variants={LETTER_ANIMATION_PROPS} color="text-neutral-600" />
              <AnimatedLetters title="Electronic" variants={LETTER_ANIMATION_PROPS} color="text-neutral-800" />
              <AnimatedLetters title="Engineer" variants={LETTER_ANIMATION_PROPS} color="text-neutral-800" />
            </p>
          </h1>
          <p className="text-neutral-800 font-semibold mt-4 text-xl">Based on Bucaramanga, CO.</p>
        </div>
      </motion.div>
    </motion.section>
  )
}

