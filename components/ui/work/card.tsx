import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FrontMatter } from 'interfaces'

const anim = {
  initial: { width: 0 },
  open: {
    width: 'auto',
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
  },
  closed: { width: 0 }
}

export const WorkCard = ({
  title,
  altTitle,
  coverImage,
  slug,
  category,
  company
}: FrontMatter) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <Link href={`/work/${slug}`}>
      <a
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        className="w-full relative py-4 flex items-center justify-center text-neutral-300 border-t border-neutral-700"
      >
        <span className="absolute top-2 left-2 text-xs">
          {category}
          {company && ` at ${company}`}
        </span>
        <p className="text-7xl mr-4">{title}</p>
        <motion.div
          variants={anim}
          animate={isActive ? 'open' : 'closed'}
          className="overflow-hidden flex justify-center w-0 h-48 rounded-md"
        >
          <Image
            src={coverImage as string}
            width={320}
            height={180}
            quality={100}
            objectFit="cover"
            alt={slug}
          />
        </motion.div>
        {altTitle && <p className="text-7xl ml-4">{altTitle}</p>}
      </a>
    </Link>
  )
}

