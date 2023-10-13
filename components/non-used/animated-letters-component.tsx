import { motion } from 'framer-motion'
import { LETTER_ANIMATION_PROPS } from 'utils/transitions'

interface props {
  title: string
  variants: any
  color: string
}

export const AnimatedLetters = ({ title, variants, color }: props) => {
  const titleArr = title.split('')
  return (
    <motion.span
      className={`overflow-hidden whitespace-nowrap leading-tight inline-block ${color}`}
      variants={variants}
      initial="initial"
      animate="animate"
    >
      {titleArr.map((letter, index) => (
        <motion.span key={index} className="whitespace-nowrap inline-block" variants={LETTER_ANIMATION_PROPS}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  )
}

