import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IFrontMatter } from 'interfaces'
import { motion } from 'framer-motion'

type props = {
  project: IFrontMatter
}

const anim = {
  initial: { width: 0 },
  open: { width: '16rem', transition: { duration: 1, ease: [0.23, 1, 0.32, 1] } },
  closed: { width: 0, transition: { duration: 1, ease: [0.23, 1, 0.32, 1] } }
}

export const ProjectCardV2 = ({ project }: props) => {
  const [isActive, setIsActive] = useState(false)

  const { title, coverImage, slug, subTitle } = project

  return (
    <div
      onMouseEnter={() => {
        setIsActive(true)
      }}
      onMouseLeave={() => {
        setIsActive(false)
      }}
      className="py-8 cursor-pointer w-full flex items-center justify-center text-neutral-100 border-t-2 last:border-b-2 border-neutral-500"
    >
      <p className="text-6xl mr-8">{title}</p>
      <motion.div variants={anim} animate={isActive ? 'open' : 'closed'} className="overflow-hidden flex items-center justify-center w-0  ">
        {coverImage && <Image src={coverImage ?? ''} alt={slug} width={640} height={360} objectFit="contain" />}
      </motion.div>
      <p className="text-6xl ml-8 ">{subTitle ?? ''}</p>
    </div>
  )
}

