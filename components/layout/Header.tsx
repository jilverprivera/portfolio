import { PageLink } from './PageLink'

export const Header = () => {
  return (
    <nav className="z-50 fixed top-4 left-1/2 -translate-x-1/2 rounded-xl border border-neutral-700 w-96  mx-auto p-4 bg-transparent backdrop-blur-sm flex items-center justify-around">
      <PageLink label="Introduction" section="hero" offset={0} duration={1000} />
      <PageLink label="Experience" section="experience" offset={-72} duration={1000} />
      <PageLink label="Works" section="works" offset={12} duration={1000} />
    </nav>
  )
}

