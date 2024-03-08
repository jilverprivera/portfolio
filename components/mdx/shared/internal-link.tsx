import { Link } from 'react-scroll'

type props = {
  routes: Route[]
}

interface Route {
  name: string
  id: string
}

export const InternalLink = ({ routes }: props) => {
  return (
    <div className="fixed border border-neutral-800 mix-blend-difference px-2 py-4 space-y-2 rounded-md backdrop-blur-sm xs:hidden sm:hidden md:hidden lg:flex xl:flex flex-col justify-center items-start top-2/4 -translate-y-2/4 left-2 z-50">
      {routes.map((route, i) => (
        <Link
          key={i}
          className="relative  pl-6 text-sm flex items-center justify-start text-neutral-300   duration-500 decoration-transparent cursor-pointer before:duration-150 before:absolute before:top-2/4 before:-translate-y-2/4 before:left-0 before:w-4 before:h-4 before:border-2 before:rounded-full  before:hover:bg-neutral-100 before:hover:border-neutral-100
"
          to={route.id}
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          activeClass="font-medium before:bg-neutral-900 before:bg-neutral-100 before:border-neutral-900 before:border-neutral-100"
        >
          {route.name}
        </Link>
      ))}
    </div>
  )
}

// before:duration-150 before:absolute before:top-2/4 before:-translate-y-2/4 before:left-0 before:w-4 before:h-4 before:border-2 before:rounded-full  before:hover:bg-neutral-100 before:hover:border-neutral-100

