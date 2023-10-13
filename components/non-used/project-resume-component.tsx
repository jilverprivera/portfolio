import { useContext, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'
import { AppContext } from 'context'
import { formatDate } from 'utils'
import { IFrontMatter } from 'interfaces'

export const ProjectResume = ({ slug, coverImage, title, description, tags, technologies, category, publishedAt, finished }: IFrontMatter) => {
  const { setFullScreenFeature, fullScreenFeature, setLastFullScreenFeature } = useContext(AppContext)

  const blockScrolling = (e: KeyboardEvent) => {
    const blockedKeys = ['ArrowUp', 'ArrowDown', ' ', 'PageUp', 'PageDown']
    if (blockedKeys.includes(e.key)) {
      e.preventDefault()
    }
  }

  const handleCloseResume = () => {
    if (fullScreenFeature) {
      setFullScreenFeature(null)
      setTimeout(() => {
        setLastFullScreenFeature(null)
      }, 250)
    }
  }

  const handleClickViewResume = () => {
    if (fullScreenFeature) {
      setTimeout(() => {
        setFullScreenFeature(null)
        setLastFullScreenFeature(null)
      }, 500)
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
    <div className={`pointer-events-none fixed inset-0 flex items-center justify-center opacity-0 bg-neutral-950 z-50 visual-${slug}`}>
      <div className="relative max-w-screen-3xl w-11/12 mx-auto aspect-video grid grid-cols-2 gap-8 py-8">
        <div className="relative overflow-hidden flex flex-col items-start justify-center">
          <h3 className="text-7xl font-bold text-neutral-400">{title}</h3>
          <p className="text-lg text-neutral-400 leading-relaxed my-8">{description}</p>
          <div className="w-full grid grid-cols-4 gap-8 border-y py-4 mb-8">
            <div>
              <h4 className="text-neutral-400 ext-lg mb-4 font-semibold">Category</h4>
              <p className="font-normal text-base text-neutral-400">{category}</p>
            </div>
            <div>
              <h4 className="text-neutral-400 ext-lg mb-4 font-semibold">Published At</h4>
              <p className="font-normal text-base text-neutral-400">{formatDate('en-US', new Date(publishedAt))}</p>
            </div>
            <div>
              <h4 className="text-neutral-400 text-lg mb-4 font-semibold">Tags</h4>
              <div className="flex flex-col items-start justify-center space-y-2">
                {tags
                  .sort((a, b) => a.localeCompare(b))
                  .map((tag, index) => (
                    <p key={index} className="text-base text-neutral-400 leading-tight">
                      {tag}
                    </p>
                  ))}
              </div>
            </div>
            <div>
              <h4 className="text-neutral-400 text-lg mb-4 font-semibold">Technologies</h4>
              <div className="flex flex-col items-start justify-center space-y-2">
                {technologies
                  ?.sort((a, b) => a.localeCompare(b))
                  .map((technology, index) => (
                    <p key={index} className="text-base text-neutral-400 leading-tight">
                      {technology}
                    </p>
                  ))}
              </div>
            </div>
          </div>
          {finished ? (
            <Link href={`/works/${slug}`}>
              <a
                onClick={() => handleClickViewResume()}
                className="relative bg-neutral-800 pl-4 pr-10 py-3 rounded-md hover:brightness-110 duration-200 text-white flex items-center justify-center group"
              >
                <span>View resume</span>
                <span className="absolute top-1/2 -translate-y-1/2 right-4 group-hover:right-3 duration-200">
                  <BsArrowRight />
                </span>
              </a>
            </Link>
          ) : (
            <button className="relative bg-neutral-800 px-4 py-3 rounded-md hover:brightness-110 duration-200 text-white flex items-center justify-center group cursor-not-allowed">
              <span className="text-neutral-100 text-lg">Resume page in progress</span>
            </button>
          )}
        </div>
        <div className="rounded-xl overflow-hidden flex items-center justify-center relative">
          <button
            onClick={() => handleCloseResume()}
            className="absolute z-10 top-9 right-2 w-12 h-12 flex items-center justify-center rounded-md group bg-neutral-400/20 hover:bg-neutral-400/40 duration-200 text-white opacity-100 text-2xl"
          >
            <span className="group-hover:scale-125 duration-200">
              <AiOutlineClose />
            </span>
          </button>
          {coverImage && <Image src={coverImage} width={1536} height={864} alt={slug} objectFit="cover" className="rounded-xl" />}
        </div>
      </div>
    </div>
  )
}

