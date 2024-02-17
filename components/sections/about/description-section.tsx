import { useState } from 'react'
import { motion } from 'framer-motion'
import { useMousePosition } from 'utils/hooks'

export const DescriptionSection = () => {
  const [isHovered, setIsHovered] = useState(false)
  const { x, y } = useMousePosition()
  const size = isHovered ? 480 : 0

  return (
    <section className="min-h-screen flex items-center justify-center">
      <motion.div
        className="mask w-full h-full flex flex-col items-start justify-center cursor-default space-y-4 text-8xl text-neutral-700"
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
          I create products that meet my needs, If they work for you, feel free
          to use, modify them and give me your feedback on my networks.
        </p>
      </motion.div>
      <div className="mx-auto max-w-screen-2xl w-11/12 h-full flex flex-col items-start justify-center cursor-default space-y-4 text-neutral-900">
        <h3 className="text-2xl">Who I am?</h3>
        <p className="text-8xl  font-medium">
          I&apos;m a <span className="text-primary">Software Developer</span>{' '}
          with strong focus on producing high quality & impactful digital
          experiences.
        </p>
      </div>
    </section>
  )
}

