import { useContext } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { PERSPECTIVE, SLIDE_IN } from 'utils/transitions'
import { footerLinks, links } from 'utils/resources'
import { AppContext } from 'context'

export const Navigation = ({
  setIsActive
}: {
  setIsActive: (arg: boolean) => void
}) => {
  const { setIsHovered } = useContext(AppContext)
  return (
    <div className="flex flex-col justify-between py-12 px-12 box-border h-full">
      <div className="flex flex-col gap-4">
        {links.map((link, i) => (
          <div key={`b_${i}`} className="linkContainer">
            <motion.div
              custom={i}
              variants={PERSPECTIVE}
              initial="initial"
              animate="enter"
              exit="exit"
              onClick={() => setIsActive(false)}
            >
              <Link href={link.href}>
                <a
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="text-5xl hover:font-bold duration-150"
                >
                  {link.title}
                </a>
              </Link>
            </motion.div>
          </div>
        ))}
      </div>
      <motion.div className="flex flex-wrap">
        {footerLinks.map((link, i) => (
          <motion.a
            className="w-2/4"
            variants={SLIDE_IN}
            custom={i}
            initial="initial"
            animate="enter"
            exit="exit"
            key={`f_${i}`}
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
          >
            {link.title}
          </motion.a>
        ))}
      </motion.div>
    </div>
  )
}

