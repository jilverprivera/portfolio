import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IFrontMatter } from 'interfaces'

type props = {
  projects: IFrontMatter[]
  reversed?: boolean
  start: number
  finish?: number
}

export const ProjectCard = ({ projects, reversed, start, finish }: props) => {
  const firstImage = useRef<any>(null)
  const secondImage = useRef<any>(null)
  let requestAnimationFrameId: number | null = null
  let xPercent = reversed ? 100 : 0
  let currentXPercent = reversed ? 100 : 0
  const speed = 0.15

  const manageMouseMove = ({ clientX }: MouseEvent) => {
    xPercent = (clientX / window.innerWidth) * 100
    if (!requestAnimationFrameId) {
      requestAnimationFrameId = window.requestAnimationFrame(animate)
    }
  }

  const animate = () => {
    const xPercentDelta = xPercent - currentXPercent
    currentXPercent = currentXPercent + xPercentDelta * speed
    const firstImagePercent = 66.66 - currentXPercent * 0.33
    const secondImagePercent = 33.33 + currentXPercent * 0.33

    if (finish) {
      firstImage.current.style.width = `${firstImagePercent}%`
    }
    if (finish) {
      secondImage.current.style.width = `${secondImagePercent}%`
    }

    if (Math.round(xPercent) == Math.round(currentXPercent)) {
      window.cancelAnimationFrame(requestAnimationFrameId ?? 0)
      requestAnimationFrameId = null
    } else {
      window.requestAnimationFrame(animate)
    }
  }

  return (
    <div
      onMouseMove={(e: any) => {
        manageMouseMove(e)
      }}
      className="flex gap-8 pb-24"
    >
      <div ref={firstImage} className="imageContainer">
        <Link href={`/works/${projects[start].slug}`} className="relative ">
          <a>
            <Image
              src={`${projects[start].coverImage}`}
              width={1920}
              height={1080}
              alt={projects[start].slug}
              className="rounded-md hover:rounded-xl duration-500 overflow-hidden"
            />
          </a>
        </Link>
        <div className=" text-neutral-200">
          <h3 className="text-xl font-medium text-neutral-300">{projects[start].title}</h3>
          <p className="text-lg text-neutral-400">{projects[start].description}</p>
          <p className="text-base text-neutral-500">{projects[start].publishedAt}</p>
        </div>
      </div>

      {finish && (
        <div ref={secondImage} className="imageContainer">
          <Link href={`/works/${projects[1].slug}`} className="relative ">
            <a>
              <Image
                src={`${projects[finish].coverImage}`}
                width={1920}
                height={1080}
                alt={projects[finish].slug}
                className="rounded-md hover:rounded-xl duration-500 overflow-hidden"
              />
            </a>
          </Link>
          <div className=" ">
            <h3 className="text-xl font-medium text-neutral-300">{projects[finish].title}</h3>
            <p className="text-lg text-neutral-400">{projects[finish].description}</p>
            <p className="text-base text-neutral-500">{projects[finish].publishedAt}</p>
          </div>
        </div>
      )}
    </div>
  )
}

