import { useState } from 'react'
import { Link } from 'react-scroll'
import { AnimatePresence, motion } from 'framer-motion'

interface props {
  icon: JSX.Element
  section: string
}

export const NavButton = ({ icon, section }: props) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
      className="relative cursor-pointer border hover:border-none border-neutral-400 duration-150 xs:w-24 md:w-28 lg:w-16 xs:h-24 md:h-28 lg:h-16 rounded-full flex items-center justify-center flex-col "
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Link to={section} spy={true} smooth={true} offset={0} duration={1000} className="flex items-center justify-center flex-col">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 1, delay: 1.8 }}
          className={`xs:text-2xl lg:text-3xl z-10 duration-150 ${isHover ? 'text-neutral-950' : 'text-neutral-400'}`}
        >
          {icon}
        </motion.span>
        <AnimatePresence mode="wait">
          {isHover && (
            <motion.div
              initial={{ opacity: 0, width: 0, height: 0 }}
              animate={{ opacity: 1, width: 64, height: 64 }}
              exit={{ opacity: 1, width: 0, height: 0 }}
              transition={{ duration: 0.15 }}
              className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 rounded-full bg-neutral-100"
            />
          )}
        </AnimatePresence>
      </Link>
    </motion.div>
  )
}

