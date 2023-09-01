import { Link } from 'react-scroll'

type props = {
  section: string
  label: string
  duration: number
  offset: number
}

export const PageLink = ({ section, label, duration = 1000, offset }: props) => {
  return (
    <Link
      to={section}
      spy={true}
      smooth={true}
      offset={offset}
      duration={duration}
      activeClass="hovered"
      className="text-neutral-400 hover:cursor-pointer hover:text-neutral-200"
    >
      {label}
    </Link>
  )
}

