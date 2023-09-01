import { useContext, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import { AppContext } from 'context'
import { IFrontMatter } from 'interfaces'

export const PortfolioTitle = ({ slug, title }: IFrontMatter) => {
  const ref = useRef<HTMLParagraphElement>(null)
  const isInView = useInView(ref, { margin: '-40% 0px -40% 0px' })
  const { setInViewFeature, inViewFeature } = useContext(AppContext)

  useEffect(() => {
    if (isInView) setInViewFeature(slug)
    if (!isInView && inViewFeature === slug) setInViewFeature(null)
  }, [isInView, slug, setInViewFeature, inViewFeature])

  return (
    <h3 ref={ref} className={`feature-title text-5xl font-bold my-48 ${isInView ? 'text-neutral-100' : 'text-neutral-600'}`}>
      {title}
    </h3>
  )
}

