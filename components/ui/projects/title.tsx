import { useContext, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import { AppContext } from 'context'
import { IFrontMatter } from 'interfaces'
import { useRouter } from 'next/router'

export const ProjectTitle = ({ project }: { project: IFrontMatter }) => {
  const { title, slug, category } = project
  const ref = useRef<HTMLParagraphElement>(null)
  const isInView = useInView(ref, { margin: '-40% 0px -40% 0px' })
  const { setInViewFeature, inViewFeature, handleSetFullscreenFeature } =
    useContext(AppContext)

  const router = useRouter()
  useEffect(() => {
    if (isInView) setInViewFeature(slug)
    if (!isInView && inViewFeature === slug) setInViewFeature(null)
  }, [isInView, slug, setInViewFeature, inViewFeature])

  const handleSetScreenFeature = () => {
    if (isInView) {
      router.push(`/work/${slug}`)
      // handleSetFullscreenFeature(slug)
    }
  }

  return (
    <h3
      ref={ref}
      className={`feature-title text-5xl font-bold my-48 leading-normal  ${
        isInView ? 'text-neutral-300' : 'text-neutral-600'
      } cursor-pointer`}
      onClick={() => handleSetScreenFeature()}
    >
      <span className="block text-xs font-semibold">{category}</span>
      {title}
    </h3>
  )
}

