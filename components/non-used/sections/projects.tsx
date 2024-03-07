import { useEffect, useRef } from 'react'
import { useScroll } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import { ProjectCard } from 'components/non-used/ui/projects'
import { FrontMatter } from 'interfaces'

export const Projects = ({ projects }: { projects: FrontMatter[] }) => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  })

  return (
    <main ref={container}>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.025
        return (
          <ProjectCard
            key={project.slug}
            index={i}
            project={project}
            progress={scrollYProgress}
            range={[i * (1 / projects.length), 1]}
            targetScale={targetScale}
            color={project.color}
            totalProjects={projects.length}
          />
        )
      })}
    </main>
  )
}

