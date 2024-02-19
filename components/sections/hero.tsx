import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useMousePosition } from 'utils/hooks'

export const Hero = () => {
  const [isHovered, setIsHovered] = useState(false)
  const { x, y } = useMousePosition()
  const size = isHovered ? 512 : 0

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
      className="min-h-screen flex items-center justify-center"
      style={{ scale, opacity }}
    >
      <motion.div
        className="mask w-full h-full flex flex-col items-start justify-center cursor-default space-y-4 text-8xl text-neutral-900"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
      >
        <div className="mx-auto max-w-screen-2xl w-11/12">
          <h3 className="text-2xl">What I do?</h3>
        </div>
        <p
          className="mx-auto max-w-screen-2xl w-11/12 font-medium"
          onMouseEnter={() => {
            setIsHovered(true)
          }}
          onMouseLeave={() => {
            setIsHovered(false)
          }}
        >
          I build immersive digital solutions, prioritising quality and
          accessibility that resonate with users, ranging from agile
          methodologies to architecture development.
        </p>
      </motion.div>
      <div className="mx-auto max-w-screen-2xl w-11/12 h-full flex flex-col items-start justify-center cursor-default space-y-4 text-neutral-600">
        <h3 className="text-2xl">Who I am?</h3>
        <p className="text-8xl font-medium">
          Hi!, I&apos;m <span className="text-primary">Jilver Pacheco</span> a
          software developer + electronic engineer with +2 years of experience
          in the IT world.
          {/* with strong focus on producing high quality & impactful digital
          experiences. */}
        </p>
      </div>
    </motion.section>
  )
}
// in creating digital          products and accessible experiences

