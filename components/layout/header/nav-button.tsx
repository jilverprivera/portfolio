import { useContext } from 'react'
import { motion } from 'framer-motion'
import { AppContext } from 'context'

interface IButtonProps {
  isActive: boolean
  setIsActive: (arg: boolean) => void
}

export const NavButton = ({ isActive, setIsActive }: IButtonProps) => {
  const { setIsHovered } = useContext(AppContext)
  return (
    <div
      className={`absolute top-0 right-0 w-28 h-12 cursor-pointer  overflow-hidden duration-200 ${!isActive ? 'rounded-2xl' : 'rounded-3xl'} `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-full h-full uppercase"
        onClick={() => setIsActive(!isActive)}
        animate={{ top: isActive ? '-100%' : '0%' }}
        transition={{ duration: 0.5, type: 'tween', ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <PerspectiveText label="Menu" />
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  )
}

function PerspectiveText({ label }: { label: string }) {
  return (
    <div className={'perspectiveText'}>
      <p className="opacity-100">{label}</p>
    </div>
  )
}

