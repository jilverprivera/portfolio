import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { AnimatedLetters } from 'components/ui/animated-letters-component'
import { BANNER_PROPS } from 'utils'

export const HeroSection = () => {
  // const [windowsWidth, setWindowsWidth] = useState(0)
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start']
  })
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  // useEffect(() => {
  //   setWindowsWidth(window.innerWidth)
  // }, [])

  // const getBlocks = () => {
  //   const blockSize = windowsWidth * 0.05
  //   const nbOfBlocks = Math.ceil(window.innerHeight / blockSize)
  //   return Array.from({ length: nbOfBlocks }, (_, index) => {
  //     return <div key={index} onMouseEnter={(e) => colorize(e.target)} className="w-full h-[5vw]" />
  //   })
  // }

  // const colorize = (el: any) => {
  //   el.style.backgroundColor = '#c4c4c4'
  //   setTimeout(() => {
  //     el.style.backgroundColor = 'transparent'
  //   }, 250)
  // }

  return (
    <motion.section
      style={{ opacity }}
      ref={targetRef}
      className="max-w-screen-xl w-11/12 mx-auto flex items-start justify-center min-h-screen"
    >
      <motion.div
        style={{ scale }}
        className="w-full mx-auto relative z-20 space-y-8  text-neutral-900 pointer-events-none mix-blend-difference"
      >
        <div className="w-full py-32 ">
          <div className="w-full flex items-center justify-start text-[14rem] uppercase font-semibold h-52 tracking-wide">
            <AnimatedLetters
              title="Software"
              variants={BANNER_PROPS}
              color="text-neutral-900"
            />
          </div>
          <div className="w-full flex items-center justify-end text-[14rem]  uppercase font-semibold h-52 tracking-wide">
            <AnimatedLetters
              title="Developer"
              variants={BANNER_PROPS}
              color="text-neutral-900"
            />
          </div>
          <div className="w-2/4 flex items-center justify-between space-x-8 mt-16">
            <p className="text-base w-4/5 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
              amet mi sapien. Aenean congue justo nec semper faucibus. Aliquam
              eu sapien eu nulla commodo efficitur. Fusce nec nibh eu lorem
              vestibulum ornare.
            </p>
            <div className="w-32 h-32 bg-white rounded-full"> </div>
          </div>
        </div>
      </motion.div>
      {/* <div className="absolute flex w-full h-full overflow-hidden ">
        {windowsWidth > 0 &&
          Array.from({ length: 20 }, (_, index) => {
            return (
              <div key={index} className="w-[5vw] mix-blend-difference">
                {getBlocks()}
              </div>
            )
          })}
      </div> */}
    </motion.section>
  )
}

