import { useContext, useEffect } from 'react'
// import { ProjectHero } from 'components/ui/projects'
import { AppContext } from 'context'
import { FrontMatter } from 'interfaces'
import { ProjectHero } from './hero'

export const ProjectResume = ({ project }: { project: FrontMatter }) => {
  const { slug } = project
  const { fullScreenFeature } = useContext(AppContext)

  const blockScrolling = (e: KeyboardEvent) => {
    const blockedKeys = ['ArrowUp', 'ArrowDown', ' ', 'PageUp', 'PageDown']
    if (blockedKeys.includes(e.key)) {
      e.preventDefault()
    }
  }

  useEffect(() => {
    if (fullScreenFeature) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', blockScrolling, false)
    } else {
      document.body.style.overflow = 'auto'
      document.removeEventListener('keydown', blockScrolling, false)
    }
    return () => {
      document.body.style.overflow = 'auto'
      document.removeEventListener('keydown', blockScrolling, false)
    }
  }, [fullScreenFeature])

  return (
    <div
      className={`pointer-events-none fixed inset-0 opacity-0 bg-white z-50 visual-${slug} overflow-scroll`}
    >
      <ProjectHero {...project} />
    </div>
  )
}

