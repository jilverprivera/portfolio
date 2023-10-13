import { Link } from 'react-scroll'

type props = {
  textColor: any
  section: string
  label: string
  duration: number
  offset: number
}

export const PageLink = ({ textColor, section, label, duration = 1000, offset }: props) => {
  return (
    <Link
      to={section}
      spy={true}
      smooth={true}
      offset={offset}
      duration={duration}
      activeClass="hovered"
      className="hover:cursor-pointer"
      style={{ color: textColor }}
    >
      {label}
    </Link>
  )
}

