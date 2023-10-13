import { useState } from 'react'
import { motion } from 'framer-motion'
import { useMousePosition } from 'utils/hooks'

export const DescriptionSection = () => {
  const [isHovered, setIsHovered] = useState(false)
  const { x, y } = useMousePosition()
  const size = isHovered ? 480 : 64

  return (
    <section className="min-h-screen flex items-center justify-center">
      <motion.div
        className="mask w-full h-full flex items-center justify-center cursor-default text-9xl text-stone-900"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
      >
        <p
          className="mx-auto max-w-screen-3xl w-11/12"
          onMouseEnter={() => {
            setIsHovered(true)
          }}
          onMouseLeave={() => {
            setIsHovered(false)
          }}
        >
          In my free time I create products that meet my needs, If they work for you, feel free to use, modify them and give me your feedback
        </p>
      </motion.div>
      <div className="w-full h-full flex items-center justify-center cursor-default  text-9xl text-stone-400">
        <p className="mx-auto max-w-screen-3xl w-11/12">
          I&apos;m a <span className="text-primary">Software Developer</span> with strong focus on producing high quality & impactful digital
          experience.
        </p>
      </div>
    </section>
  )
}

