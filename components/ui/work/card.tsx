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
  subTitle,
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
        className="project text-neutral-300 relative border-t border-neutral-700 last:border-b"
      >
        <span className="absolute top-2 left-2 text-xs">
          {category}
          {company && ` at ${company}`}
        </span>
        <p>{title}</p>
        <motion.div
          variants={anim}
          animate={isActive ? 'open' : 'closed'}
          className="imgContainer h-48"
        >
          <Image
            src={coverImage as string}
            width={320}
            height={180}
            quality={100}
            objectFit="contain"
            alt={slug}
            className="img"
          ></Image>
        </motion.div>
        {altTitle && <p>{altTitle}</p>}
      </a>
    </Link>
  )
}

