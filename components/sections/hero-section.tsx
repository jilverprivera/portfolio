import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Text3d } from 'components/ui/text-3d'

export const HeroSection = () => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const plane = useRef<HTMLDivElement>(null)
  const maxRotate = 45
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ['end end', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const zIndex = useTransform(scrollYProgress, [0, 0.75], [1, -1])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const position = useTransform(scrollYProgress, (pos) => (pos >= 1 ? 'relative' : 'fixed'))

  const manageMouseMove = (e: MouseEvent) => {
    const x = e.clientX / window.innerWidth
    const y = e.clientY / window.innerHeight
    const perspective = window.innerWidth * 4
    const rotateX = maxRotate * x - maxRotate / 2
    const rotateY = (maxRotate * y - maxRotate / 2) * -1
    if (plane.current != null) {
      plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`
    }
  }

  return (
    <motion.section style={{ opacity, zIndex }} ref={targetRef} className="relative h-screen flex items-center justify-center" id="hero">
      <motion.div
        style={{ position, scale, x: '-50%' }}
        className="fixed left-1/2 z-10 max-w-screen-3xl w-11/12 lg:pt-32 lg:pb-32 mx-auto flex flex-col items-center space-y-8 text-neutral-400"
      >
        <h1 className="text-lg font-semibold uppercase tracking-widest text-neutral-200">Hey!, I&apos;m Jilver Pacheco</h1>
        <div onMouseMove={(e: any) => manageMouseMove(e)}>
          <div ref={plane} className="custom-body flex flex-col items-center justify-center text-stone-400">
            <Text3d primary={'Software Developer'} secondary={'Since 2020'} />
            <Text3d primary={'Electronic Engineer'} secondary={'Since 2022'} />
            <Text3d primary={'Indie Maker'} secondary={'Since 2023'} />
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

