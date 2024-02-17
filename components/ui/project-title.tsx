import { useContext, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import { AppContext } from 'context'
import { IFrontMatterV2 } from 'interfaces'

export const PortfolioTitle = ({ project }: { project: IFrontMatterV2 }) => {
  const { title, slug } = project
  const ref = useRef<HTMLParagraphElement>(null)
  const isInView = useInView(ref, { margin: '-40% 0px -40% 0px' })
  const { setInViewFeature, inViewFeature, handleSetFullscreenFeature } = useContext(AppContext)

  useEffect(() => {
    if (isInView) setInViewFeature(slug)
    if (!isInView && inViewFeature === slug) setInViewFeature(null)
  }, [isInView, slug, setInViewFeature, inViewFeature])

  const handleSetScreenFeature = () => {
    if (isInView) {
      handleSetFullscreenFeature(slug)
    }
  }

  return (
    <h3
      ref={ref}
      className={`feature-title text-5xl font-bold my-48 leading-normal ${isInView ? 'text-neutral-900' : 'text-neutral-300'}`}
      onClick={() => handleSetScreenFeature()}
    >
      {title}
    </h3>
  )
}

