import { useRef } from 'react'
import { BsArrowDownRight } from 'react-icons/bs'
import { motion, useScroll, useTransform } from 'framer-motion'
import { NavButton } from 'components'

export const Hero = () => {
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
        className="fixed left-1/2 z-10 max-w-screen-2xl w-11/12 lg:pt-32 lg:pb-32 mx-auto flex flex-col items-start space-y-8 text-neutral-400"
      >
        <div className="space-y-4 w-full">
          <span className="text-neutral-400">Introduction</span>
          <h1 className="text-8xl leading-none font-bold text-neutral-200 w-3/5">
            Hey there!
            <br />
            I&apos;m Jilver Pacheco.
          </h1>
        </div>
        <div className="w-3/5 text-xl space-y-8 text-neutral-400 leading-normal">
          <p>
            Welcome my world! I&apos;m Jilver, a software developer + electronic engineer based in Bucaramanga, CO focused on building projects I can
            be proud of.
          </p>
          <p>
            I have a strong belief in the philosophy of constant learning and the ability to adapt to emerging technologies in order to keep
            progressing, because for me, the essence of life lies in creating and sharing ideas in a relaxed but impactful way.
          </p>
          <div className="w-full xs:flex-col-reverse md:flex-row flex items-center justify-start space-x-4">
            <p>See my works</p>
            <NavButton icon={<BsArrowDownRight />} section="works" />{' '}
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

