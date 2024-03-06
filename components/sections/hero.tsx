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
      className="min-h-screen flex items-center justify-center"
    >
      <motion.div
        className="mask w-full h-full flex flex-col items-start justify-center cursor-default space-y-4 text-neutral-950"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
      >
        <div className="max-w-screen-xl w-11/12 mx-auto ">
          <h3 className="text-2xl">What I do?</h3>
          <p
            className="text-7xl font-medium"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            I build immersive digital solutions, prioritizing quality and
            accessibility that resonate with users, ranging from agile
            methodologies to architecture development.
          </p>
        </div>
      </motion.div>

      <div className="mx-auto max-w-screen-xl w-11/12 h-full flex flex-col items-start justify-center cursor-default space-y-4 text-neutral-500">
        <h3 className="text-2xl">Who I am?</h3>
        <p className="text-7xl font-medium">
          Hello, I&apos;m <span className="text-primary">Jilver Pacheco</span>,
          a software developer & electronic engineer passionate about crafting
          complete digital solutions.
        </p>
      </div>
    </motion.section>
  )
}

