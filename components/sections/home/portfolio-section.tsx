import { useContext, useEffect } from 'react'
import { AnimatePresence, stagger, useAnimate } from 'framer-motion'
import { AppContext } from 'context'
import { PortfolioTitle, ProjectCard, ProjectResume } from 'components/ui'
import { useEscapePress, useHidePageOverflow } from 'utils/hooks'
import { IFrontMatterV2 } from 'interfaces'

export const PortfolioSection = ({
  projects
}: {
  projects: IFrontMatterV2[]
}) => {
  const [scope, animate] = useAnimate()
  const {
    fullScreenFeature,
    lastFullScreenFeature,
    setFullScreenFeature,
    setLastFullScreenFeature
  } = useContext(AppContext)
  const onEscapePress = () => {
    if (fullScreenFeature) {
      setFullScreenFeature(null)
      setTimeout(() => {
        setLastFullScreenFeature(null)
      }, 250)
    }
  }
  useEscapePress(onEscapePress)
  useHidePageOverflow(!!fullScreenFeature)

  useEffect(() => {
    if (fullScreenFeature) {
      animate([
        [
          '.feature-title',
          { opacity: 0, x: '-200px' },
          { duration: 0.3, delay: stagger(0.05) }
        ],
        [
          `.visual-${lastFullScreenFeature}`,
          { opacity: 1, scale: 1, pointerEvents: 'auto' },
          { at: '<' }
        ],
        ['.active-card ', { opacity: 0, scale: 0, x: '200px' }, { at: '<' }]
      ])
    } else {
      animate([
        [
          '.feature-title',
          { opacity: 1, x: '0px' },
          { duration: 0.3, delay: stagger(0.05) }
        ],
        [
          `.visual-${lastFullScreenFeature}`,
          { opacity: 0, scale: 0.75, pointerEvents: 'auto' },
          { at: '<' }
        ],
        ['.active-card ', { opacity: 1, scale: 1, x: '0px' }, { at: '<' }]
      ])
    }
  }, [fullScreenFeature, lastFullScreenFeature, animate])

  return (
    <section
      ref={scope}
      className="max-w-screen-2xl w-11/12 mx-auto relative "
      id="works"
    >
      {lastFullScreenFeature &&
        projects.map((project) => (
          <ProjectResume key={project.slug} project={project} />
        ))}
      <div className="flex w-full items-start justify-center gap-8">
        <div className="w-full py-[20vh] flex-1">
          {projects.map((project) => (
            <PortfolioTitle key={project.slug} project={project} />
          ))}
        </div>
        <div className="sticky top-0 flex h-screen w-3/5 items-center">
          <div className="relative aspect-video w-full rounded-2xl [&:has(>_.active-card)]:bg-transparent">
            <AnimatePresence mode="wait">
              {projects.map((project) => (
                <ProjectCard key={project.slug} {...project} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
