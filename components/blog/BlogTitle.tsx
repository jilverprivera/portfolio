import { motion } from 'framer-motion'

export const BlogTitle = () => {
  return (
    <motion.h1
      className="flex flex-wrap text-9xl uppercase font-semibold overflow-hidden leading-tight text-neutral-400"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75 }}
    >
      Blog
    </motion.h1>
  )
}

