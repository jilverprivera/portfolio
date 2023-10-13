import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import { CAROUSEL_VARIANTS_PROPS } from 'utils/transitions'

interface props {
  images: string[]
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity

export const Carousel = ({ images }: props) => {
  const [[page, direction], setPage] = useState([0, 0])
  const [imageIndex, setImageIndex] = useState(0)

  const paginate = (newDirection: number) => {
    const newIndex = page + newDirection
    if (newDirection === -1 && newIndex < 0) {
      setPage([images.length - 1, -1])
      setImageIndex(images.length - 1)
    } else if (newDirection === 1 && newIndex > images.length - 1) {
      setPage([0, 1])
      setImageIndex(0)
    } else {
      setPage([newIndex, newDirection])
      setImageIndex(newIndex)
    }
  }

  const handleImage = (index: number) => {
    const direction = imageIndex > index ? 1 : -1
    setPage([index, direction])
    setImageIndex(index)
  }

  return (
    <div className="relative pb-5">
      <div className="w-full mx-auto flex items-center justify-center flex-col aspect-video rounded-md overflow-hidden cursor-grab relative">
        <AnimatePresence initial={false} mode="popLayout" custom={direction}>
          <motion.img
            key={page}
            src={images[imageIndex]}
            custom={direction}
            className="aspect-video object-cover"
            variants={CAROUSEL_VARIANTS_PROPS}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: 'spring', stiffness: 100, damping: 50 }, opacity: { duration: 0.25 } }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_e: MouseEvent | TouchEvent, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
          />
        </AnimatePresence>

        <button
          onClick={() => paginate(-1)}
          className="absolute top-2/4 -translate-y-2/4 left-4  h-12 w-12 z-20 rounded-md bg-white flex items-center justify-center opacity-20 hover:opacity-100 duration-150 cursor-pointer"
        >
          <BiLeftArrow />
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute top-2/4 -translate-y-2/4 right-4  h-12 w-12 z-20 rounded-md bg-white flex items-center justify-center opacity-20 hover:opacity-100 duration-150 cursor-pointer"
        >
          <BiRightArrow />
        </button>
      </div>
      <div className="absolute bottom-0 left-2/4 -translate-x-2/4 z-30 flex items-center justify-center gap-x-2">
        {images.map((_item, i) => (
          <div
            key={i}
            onClick={() => handleImage(i)}
            className={`${
              imageIndex === i ? 'bg-gray-900 w-4 h-2 border-transparent' : 'bg-transparent w-2 h-2  border-gray-900'
            } rounded-full border cursor-pointer duration-200`}
          />
        ))}
      </div>
    </div>
  )
}

