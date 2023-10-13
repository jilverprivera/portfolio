import { NavLink } from './nav-link'

export const Header = () => {
  return (
    <nav className="z-50 fixed top-4 left-1/2 -translate-x-1/2 rounded-xl border border-neutral-700 w-96  mx-auto p-4 bg-transparent backdrop-blur-sm flex items-center justify-around">
      <NavLink label="Work" path="/" />
      <NavLink label="Side projects" path="/side-projects" />
      <NavLink label="About" path="/about" />
      <NavLink label="Blog" path="/blog" />
    </nav>
  )
}

