import { Link } from 'react-scroll'

interface Props {
  routes: Route[]
}

interface Route {
  name: string
  id: string
}

export const ProjectNavigation = ({ routes }: Props) => {
  return (
    <div className="fixed xs:hidden sm:hidden md:hidden lg:flex xl:flex flex-col justify-center items-start top-2/4 -translate-y-2/4 left-3 z-50">
      {routes.map((route, i) => (
        <Link
          key={i}
          className="relative my-1 pl-5 text-xs flex items-center justify-start  text-zinc-900 dark:text-zinc-100  duration-150 before:duration-150 before:absolute before:top-2/4 before:-translate-y-2/4 before:left-0 before:w-4 before:h-4 before:border-2 before:rounded-full before:hover:bg-zinc-600 before:hover:border-zinc-600 dark:before:hover:bg-zinc-100 dark:before:hover:border-zinc-100"
          to={route.id}
          spy={true}
          smooth={true}
          offset={-96}
          duration={500}
          activeClass="font-medium before:bg-zinc-900 dark:before:bg-zinc-100 before:border-zinc-900 dark:before:border-zinc-100"
        >
          {route.name}
        </Link>
      ))}
    </div>
  )
}

