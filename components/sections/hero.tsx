import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useMousePosition } from 'utils/hooks'

export const Hero = () => {
  const [isHovered, setIsHovered] = useState(false)
  const { x, y } = useMousePosition()
  const size = isHovered ? 640 : 0

  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start']
  })
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.75])

  return (
    <motion.section
      ref={targetRef}
      style={{ scale, opacity }}
      className="min-h-screen  flex items-center justify-center"
    >
      <motion.div
        className="mask w-full h-full flex flex-col items-start justify-center cursor-default "
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
      >
        <div className="max-w-screen-3xl w-11/12 mx-auto py-48 px-12 rounded-3xl border border-neutral-950 space-y-4 text-neutral-950">
          <h3 className="text-2xl">What I do?</h3>
          <p
            className="text-8xl font-medium"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            I like to share my side projects, my experience, and build digital
            solutions, prioritizing quality, accessibility, and usability for
            users.
          </p>
        </div>
      </motion.div>

      <div className="max-w-screen-3xl w-11/12 mx-auto h-full py-48 px-12 rounded-3xl border border-neutral-800 space-y-4 text-neutral-300">
        <h3 className="text-2xl">Who I am?</h3>
        <p className="text-8xl font-medium">
          Hello, I&apos;m <span className="text-primary">Jilver Pacheco</span>,
          a software developer & electronic engineer passionate about crafting
          complete digital solutions.
        </p>
      </div>
    </motion.section>
  )
}

